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

const AttachMockFunctionString = `
function attachMock(moduleName:string, method:string, name:string, promise:Promise<any>, once:boolean=true, mock?:jest.SpyInstance): jest.SpyInstance {
  const mod = require(moduleName)
  const awsSdkObject = mod[name]
  // @ts-ignore
  const tmp = (mock) ? mock : jest.spyOn(awsSdkObject.prototype, method)
  return (once) ? tmp.mockImplementationOnce(() => promise) : tmp.mockImplementation(() => promise)
}
`

async function genDef () {
  async function readFile (path) {
    const handle = await open(path)
    const content = await handle.readFile({encoding: 'utf-8'})
    await handle.close()
    return content.split('\n').filter(c => c)
  }

  function getPaths(type, packageName) {
    if (type === 'client') {
      return {
        docPath: `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/${packageName.slice('client-'.length)}`,
        sdkPath: `./tmp/aws-sdk-js-v3/clients/${packageName}/src/`,
        modulePath: `@aws-sdk/${packageName}`
      }
    } else {
      return {
        docPath: `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-${packageName}/`,
        sdkPath: `./tmp/aws-sdk-js-v3/lib/${packageName}/src/`,
        modulePath: `@aws-sdk/${packageName}`
      }
    }

  }
  async function createMockDefinitions (packageNames, type) {
    let returns = []
    function getAttr(json) {
      if (type === 'client') {
        return json.props.pageProps.operations
      } else {
        return json.props.pageProps.items.filter(i => i.type === 'Class')
      }
    }

    for (let i = 0; i < packageNames.length; i++) {
      const paths = getPaths(type, packageNames[i])
      const path = paths.docPath
      console.log('Document Path: => ', path)
      try {
        const sdkpath = paths.sdkPath
        const files = await readdir(sdkpath)
        const klass = files[0].slice(0, files[0].length - 3)
        const module = paths.modulePath 
        const r = await axios.get(path)

        console.log('[Success]:', path)
        const topIndex = r.data.indexOf('{')
        const lastIndex = r.data.lastIndexOf('}')
        let jsonStrng = r.data.slice(topIndex, lastIndex + 1)
        let json = JSON.parse(jsonStrng)
        const itemsFromDocument = getAttr(json, type)
        console.log(itemsFromDocument)
        const methods = itemsFromDocument.map(o => {
          if (o.name.indexOf('Command') !== -1) {
            const sliced = o.name.slice(0, o.name.indexOf('Command'))
            const firstLetter = sliced.charAt(0).toLowerCase()
            return firstLetter + sliced.slice(1)
          } else {
            return undefined
          }
        }).filter(m => m)
        console.log(methods)

        returns.push({mockName: `mock${klass}`, name: klass, moduleName: module, methods: [...new Set(
          methods
          )]
        })
      } catch (e) {
        console.log('[Error]:', e)
      }
    }
    return returns
  }

  let code = ''
  let index = `\n`
  const attachMockFunctionString = AttachMockFunctionString
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

  let mocks = []
  // Generate Client 
  const clientPackageNames = await readFile('./tmp/client_list.txt')
  mocks = await createMockDefinitions(clientPackageNames, 'client')
  console.log(mocks)

  mocks.forEach(r => {
    code = Header(r.mockName) 
    console.log('[Begin]:', r.mockName)
    code += attachMockFunctionString

    code += (`export const ${r.mockName} = {\n`)
    r.methods.forEach(m => {
      if (m === 'send') {
        writeMockMethodObject(m + 'Promise', m, r.moduleName, r.name, 'resolve', true)
        writeMockMethodObject(`${m}PromiseAll`, m, r.moduleName, r.name, 'resolve', false)
        writeMockMethodObject(`${m}PromiseThrow`, m, r.moduleName, r.name, 'reject', true)
      } else {
        writeMockMethodObject(m, m, r.moduleName, r.name, 'resolve', true)
        writeMockMethodObject(`${m}All`, m, r.moduleName, r.name, 'resolve', false)
        writeMockMethodObject(`${m}Throw`, m, r.moduleName, r.name, 'reject', true)
      }
    })
    // For backward compatibility
    writeMockMethodObject('send', 'send', r.moduleName, `${r.name}Client`, 'resolve', true)
    writeMockMethodObject('sendAll', 'send', r.moduleName, `${r.name}Client`, 'resolve', false)
    writeMockMethodObject('sendThrow', 'send', r.moduleName, `${r.name}Client`, 'reject', true, true)
    code += (`}\n`)

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
      code += (`}\n`)

      fs.writeFileSync(`./tmp/mocks_v3/mockDynamo.ts`, code, 'utf8')
      index += (`export * from './mockDynamo'\n`)
    }
  })



  // Generate Lib
  mocks = await createMockDefinitions(['lib-dynamodb'], 'lib')
  mocks.forEach(r => {
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
    code += (`}\n`)

    fs.writeFileSync(`./tmp/mocks_v3/${r.mockName}.ts`, code, 'utf8')
    index += (`export * from './${r.mockName}'\n`)
    console.log('[End]:', r.mockName)
  })

  fs.writeFileSync(`./tmp/mocks_v3/index.ts`, index, 'utf8')

  fs.writeFileSync('./tmp/modules_cache.json', JSON.stringify(mocks), 'utf8')
}

genDef()