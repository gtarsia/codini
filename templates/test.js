
export default function test({ camelCase }) {
  const snakeName = process.argv[4]
  const camelName = camelCase(snakeName)
  return `
import test from 'ava'
import dummee from 'dummee'
import ${camelName} from './${snakeName}'

test('${camelName} should work correctly', (t) => {
})
`
}
