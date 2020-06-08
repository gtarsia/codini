import test from 'ava'
import dummee from 'dummee'
import { createInterface } from './readline'
import question from './question'

test('question should work correctly', async (t) => {
  const q = Symbol('question')
  const a = Symbol('answer')
  const innerQuestion = dummee((qq, cb) => { cb(a) })
  const close = dummee()
  createInterface.cb = () => ({
    question: innerQuestion,
    close,
  })
  const answer = await question(q)
  t.deepEqual(innerQuestion.calls.shift().args[0], q)
  t.deepEqual(answer, a)
  t.deepEqual(close.calls, [{ args: [] }])
})
