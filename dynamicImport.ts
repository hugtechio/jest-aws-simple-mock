import * as cp from 'child_process'
const modules = cp.execSync('npm list --depth=0', {encoding: 'utf-8'})

console.log(modules)

/**
 * 
 * @param moduleName name of library
 * @returns true: module is currently using, otherwise false
 */
export function isUsing (moduleName: string): boolean {
    return modules.includes(moduleName)
}

