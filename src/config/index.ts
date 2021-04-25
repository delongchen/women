import { readOrCreate } from "../utils/files";
import { OS_INFO } from "../utils/osInfos";
import { stringify, parse } from 'yaml'

interface WomenConfig {
  pkgManager: string
}

const config = readOrCreate(`${OS_INFO.homeDir}/.womenrc`, () => {
  return stringify({
    ...OS_INFO,
    pkgManager: 'homebrew'
  })
})

export function readConfig(): WomenConfig {
  return parse(config) as WomenConfig
}
