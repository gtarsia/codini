import { stubIfTest } from 'dummee'

export const log = stubIfTest(console.log)
