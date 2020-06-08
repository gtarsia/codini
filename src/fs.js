import { stubIfTest } from 'dummee'
import { promisify } from 'util'
import fs from 'fs'

export const writeFile = stubIfTest(promisify(fs.writeFile))
export const access = stubIfTest(promisify(fs.access))
