import test from 'ava'
import { snakeCase, camelCase } from 'lodash'
import utils from './utils'

test('utils should work correctly', (t) => {
  t.deepEqual(utils(), { snakeCase, camelCase })
})
