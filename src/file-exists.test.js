import test from 'ava'
import fileExists from './file-exists'
import { access } from './fs'

test('fileExists should return true if file does exist', async (t) => {
  const file = Symbol('file')
  access.cb = (f, cb) => { cb(null) }
  t.deepEqual(await fileExists(file), true)
})

test("fileExists should return false if file doesn't exist", async (t) => {
  const file = Symbol('file')
  access.cb = (f, cb) => { cb(new Error('ENOENT')) }
  t.deepEqual(await fileExists(file), false)
})

test('fileExists should error if error is not ENOENT', async (t) => {
  const file = Symbol('file')
  access.cb = (f, cb) => { cb(new Error('BADBAD')) }
  const err = await t.throwsAsync(() => fileExists(file))
  t.deepEqual(err.message, 'BADBAD')
})
