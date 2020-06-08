import { stubIfTest } from 'dummee'
import readline from 'readline'

export const createInterface = stubIfTest(readline.createInterface)
