import { basename } from 'path'

export default function test({ camelCase }) {
  const snakeName = basename(process.argv[4], '.test.js')
  const camelName = camelCase(snakeName)
  return `import test from 'ava'
import dummee from 'dummee'
import ${camelName} from './${snakeName}'

test('${camelName} should work correctly', (t) => {
})
`
}
