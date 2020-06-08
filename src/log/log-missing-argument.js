import { stubIfTest } from 'dummee'
import { log } from '../console'

function logMissingArgument(command) {
  log(`codini: ${command} arg missing, will do nothing`)
  log('usage: codini <command> <inputName> <outputName>')
}

export default stubIfTest(logMissingArgument)
