import packageJson from './package.json'
const { dependencies, devDependencies } = packageJson

/**
 * 
 * @param moduleName module name
 * @returns 
 */
export function isUsing(moduleName: string): boolean {
    return Object.keys(dependencies).indexOf(moduleName) >= 0 ||
        Object.keys(devDependencies).indexOf(moduleName) >= 0
}

