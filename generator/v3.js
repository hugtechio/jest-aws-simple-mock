const { open, readdir } = require('fs/promises')
const Axios = require('axios')
const { parse } = require('node-html-parser')
const { default: axios } = require('axios')
const fs = require('fs')

const Header = (fileName) => `
/**
* @description mocks_v3:${fileName} module is mocks for AWS-SDK V3
* 
* This mock module has generated from mock_generator.
* Generator Version: {v0.1.0}
* Author: hugtechio
*/

`

async function genDef (clients_file_path, noCache) {
  console.log('[Params]:', clients_file_path, noCache)
  const handle = await open(clients_file_path)
  const content = await handle.readFile({encoding: 'utf-8'})
  const clients = content.split('\n').filter(c => c)

  async function* asyncGet () {
    for (let i = 0; i < clients.length; i++) {
      const path = `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/${clients[i]}/classes/${clients[i].slice('client-'.length).replace(/-/g,'')}.html`
      try {
        const sdkpath = `./tmp/aws-sdk-js-v3/clients/${clients[i]}/src/`
        const files = await readdir(sdkpath)
        const klass = files[0].slice(0, files[0].length - 3)
        const module = `@aws-sdk/${clients[i]}`

        const r = await axios.get(path)
        console.log('[Success]:', path)
        yield {mockName: `mock${klass}`, name: klass, moduleName: module, methods: [...new Set(
          parse(r.data)
            // Pick up HTML class of method list
            .querySelectorAll('.tsd-kind-method > a')
            // Pick up text element and Join
            .map(a => a.childNodes ? a.childNodes.filter(n => n.nodeType === 3).join('') : '')
            // remove empty
            .filter(m => m && m !== 'send')
          )]
        }
      } catch (e) {
        console.log('[Error]:', path)
      }
    }
  }

  let modules = []
  if (noCache === 'true') {
    console.log('[Flag]: nocache')
    for await (const r of asyncGet()) modules.push(r)
    fs.writeFileSync('./tmp/modules_cache.json', JSON.stringify(modules))
  } else {
    console.log('[Flag]: from cache')
    modules = JSON.parse(fs.readFileSync('./tmp/modules_cache.json', 'utf8'))
  }

  let code = ''
  let index = `\n`

  const attachMockFunctionString = `
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}

  `
  function writeMockMethodObject(mockMethod, method, moduleName, name, resultPromiseMethod, once=true, eof=false) {
    code += (`  ${mockMethod}: (result:any, mock?: jest.SpyInstance): jest.SpyInstance => {\n`)
    code += (`    return attachMock('${moduleName}', '${method}', '${name}', Promise.${resultPromiseMethod}(result), ${once}, mock)\n`)
    if (eof) {
      code += (`  }\n`)
    } else 
    {
      code += (`  },\n`)
    }
  }

  modules.forEach(r => {
    code = Header(r.mockName) 
    console.log('[Begin]:', r.mockName)
    code += attachMockFunctionString

    code += (`export const ${r.mockName} = {\n`)
    r.methods.forEach(m => {
      writeMockMethodObject(m, m, r.moduleName, r.name, 'resolve', true)
      writeMockMethodObject(`${m}All`, m, r.moduleName, r.name, 'resolve', false)
      writeMockMethodObject(`${m}Throw`, m, r.moduleName, r.name, 'reject', true)
    })
      writeMockMethodObject('send', 'send', r.moduleName, `${r.name}Client`, 'resolve', true)
      writeMockMethodObject('sendAll', 'send', r.moduleName, `${r.name}Client`, 'resolve', false)
      writeMockMethodObject('sendThrow', 'send', r.moduleName, `${r.name}Client`, 'reject', true, true)
    code += (`}`)

    fs.writeFileSync(`./tmp/mocks_v3/${r.mockName}.ts`, code, 'utf8')
    index += (`export * from './${r.mockName}'\n`)
    console.log('[End]:', r.mockName)

    if (r.name === 'DynamoDB') {
      console.log('[Begin(Backward Compatibility):mockDynamo]:', r.mockName)
      code = Header('mockDynamo') 
      code += attachMockFunctionString

      code += (`export const mockDynamo = {\n`)
      r.methods.forEach(m => {
        writeMockMethodObject(m, m, r.moduleName, r.name, 'resolve', true)
        writeMockMethodObject(`${m}All`, m, r.moduleName, r.name, 'resolve', false)
        writeMockMethodObject(`${m}Throw`, m, r.moduleName, r.name, 'reject', true)
      })
        writeMockMethodObject('send', 'send', r.moduleName, `${r.name}Client`, 'resolve', true)
        writeMockMethodObject('sendAll', 'send', r.moduleName, `${r.name}Client`, 'resolve', false)
        writeMockMethodObject('sendThrow', 'send', r.moduleName, `${r.name}Client`, 'reject', true, true)
      code += (`}`)

      fs.writeFileSync(`./tmp/mocks_v3/mockDynamo.ts`, code, 'utf8')
      index += (`export * from './mockDynamo'\n`)
    }
  })
  fs.writeFileSync(`./tmp/mocks_v3/index.ts`, index, 'utf8')
}

genDef(process.argv[2], process.argv[3], process.argv[4])