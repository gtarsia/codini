import test from 'ava'
import getArguments from './get-arguments'
import { exit } from './process'
import logMissingArgument from './log/log-missing-argument'
import { log } from './console'

let command = null
let inputName = null
let outputName = null

function setArgv() {
  process.argv = [undefined, undefined, command, inputName, outputName]
}

exit.cb = () => {}

test('getArguments should work correctly', (t) => {
  command = 'wf'
  inputName = Symbol('inputName')
  outputName = Symbol('outputName')
  setArgv()
  t.deepEqual(getArguments(), { command, inputName, outputName })
})

test('getArguments should fail if arguments are not provided', (t) => {
  outputName = null
  setArgv()
  getArguments()
  t.deepEqual(logMissingArgument.calls.shift(), { args: ['outputName'] })
  t.deepEqual(exit.calls.shift(), { args: [1] })

  inputName = null
  setArgv()
  getArguments()
  t.deepEqual(logMissingArgument.calls.shift(), { args: ['inputName'] })
  t.deepEqual(exit.calls.shift(), { args: [1] })

  command = null
  setArgv()
  getArguments()
  t.deepEqual(logMissingArgument.calls.shift(), { args: ['command'] })
  t.deepEqual(exit.calls.shift(), { args: [1] })
})

test('getArguments should exit if command is not recognized', (t) => {
  log.calls = []
  command = 'weef'
  inputName = Symbol('inputName')
  outputName = Symbol('outputName')
  setArgv()
  getArguments()
  t.deepEqual(log.calls.shift(), { args: [`codini: '${command}' is not a valid command`] })
  t.deepEqual(exit.calls.shift(), { args: [1] })
})
