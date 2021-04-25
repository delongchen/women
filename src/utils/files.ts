import { readFileSync, writeFileSync } from 'fs'


const ReadErrors = {
  no_such_file_or_dir: 'ENOENT'
}

function readWithErrorHandle(FILE: string, handler=null): string {
  try {
    return readFileSync(FILE, 'utf-8')
  } catch (e) {
    if (e.code === ReadErrors.no_such_file_or_dir) {
      if (typeof handler === 'function') return handler()
      else {
        console.error("no such file and no handler")
      }
    }
  }
}

export function readFileAsJson<T>(FILE: string): T {
  return JSON.parse(readWithErrorHandle(FILE)) as T
}

export function readOrCreate(FILE: string, textConstructor: () => any) {
  return readWithErrorHandle(FILE, () => {
    let text = textConstructor()
    if (typeof text !== 'string') {
      text = JSON.stringify(text)
    }
    writeFileSync(FILE, text)
    return text
  })
}
