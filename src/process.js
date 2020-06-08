import { stubIfTest } from 'dummee'

export const exit = stubIfTest(process.exit)
