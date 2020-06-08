import { stubIfTest } from 'dummee'
import fileExists from './file-exists'
import question from './question'
import { writeFile } from './fs'
// import { log } from './console'

async function writeTemplateToFile(template, outputPath) {
  if (await fileExists(outputPath)) {
    const answer = await question('output file already exists, proceed? (Y/n)')
    if (answer === 'n' || answer === 'N') {
      return
    }
  }
  writeFile(outputPath, template)
}

export default stubIfTest(writeTemplateToFile)
