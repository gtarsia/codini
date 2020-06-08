import writeTemplateToFile from './write-template-to-file'
import req from './require'
import utils from './utils'
import { resolve } from './path'
import { log } from './console'
import getArguments from './get-arguments'

export default async function cli() {
  const { command, inputName, outputName } = getArguments()
  const inputPath = resolve(__dirname, '..', 'templates', `${inputName}.js`)
  const template = await (req(inputPath).default(utils()))
  if (command === 'writefile' || command === 'wf') {
    const outputPath = resolve(outputName)
    writeTemplateToFile(template, outputPath)
  } else if (command === 'writeout' || command === 'wo') {
    log(template)
  }
}
