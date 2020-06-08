import { stubIfTest } from 'dummee'
import { log } from './console'
import { exit } from './process'
import logMissingArgument from './log/log-missing-argument'

function getArguments() {
  const [/* bin */, /* file */, command, inputName, outputName] = process.argv
  if (!command) {
    logMissingArgument('command')
    return exit(1)
  }
  if (!inputName) {
    logMissingArgument('inputName')
    return exit(1)
  }
  if (!outputName && command !== 'wo' && command !== 'writeout') {
    logMissingArgument('outputName')
    return exit(1)
  }
  if (['wf', 'writefile', 'wo', 'writeout'].indexOf(command) === -1) {
    log(`codini: '${command}' is not a valid command`)
    return exit(1)
  }
  return { command, inputName, outputName }
}

export default stubIfTest(getArguments)
