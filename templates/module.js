import { basename } from 'path'

export default function mod({ camelCase }) {
  const snakeName = basename(process.argv[4], '.js')
  const name = camelCase(snakeName)
  const template = `import { stubIfTest } from 'dummee'

function ${name}() {
}

export default stubIfTest(${name})
`
  return template
}
