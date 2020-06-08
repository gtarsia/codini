import { stubIfTest } from 'dummee'
import { snakeCase, camelCase } from 'lodash'

function utils() {
  return { snakeCase, camelCase }
}

export default stubIfTest(utils)
