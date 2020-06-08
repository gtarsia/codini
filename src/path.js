import { stubIfTest } from 'dummee'
import path from 'path'

export const resolve = stubIfTest(path.resolve)
