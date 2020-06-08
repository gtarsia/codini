import { stubIfTest } from 'dummee'
import { createInterface } from './readline'

function question(q) {
  const { stdin: input, stdout: output } = process
  const int = createInterface({ input, output })
  return new Promise((resolve) => {
    int.question(q, (answer) => {
      resolve(answer)
      int.close()
    })
  })
}

export default stubIfTest(question)
