import test from 'ava'
import logMissingArgument from './log-missing-argument'
import { log } from '../console'

test('logMissingArgument should work correctly', (t) => {
  log.cb = () => {}
  const arg = 'argument'

  logMissingArgument(arg)
  t.deepEqual(log.calls, [
    { args: ['codini: argument arg missing, will do nothing'] },
    { args: ['usage: codini <command> <inputName> <outputName>'] },
  ])
})
