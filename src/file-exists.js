import { stubIfTest } from 'dummee'
import { access } from './fs'

function fileExists(file) {
  return new Promise((resolve, reject) => {
    access(file, (err) => {
      if (/ENOENT/.test(err)) {
        return resolve(false)
      }
      if (err) {
        return reject(err)
      }
      return resolve(true)
    })
  })
}

export default stubIfTest(fileExists)
