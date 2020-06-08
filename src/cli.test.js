import test from 'ava'
import dummee from 'dummee'
import cli from './cli'
import { log } from './console'
import req from './require'
import { resolve } from './path'
import writeTemplateToFile from './write-template-to-file'
import utils from './utils'
import getArguments from './get-arguments'

const inputName = Symbol('inputName')
const inputPath = Symbol('inputPath')
const outputName = Symbol('outputName')
const outputPath = Symbol('outputPath')
const template = Symbol('template')
const utilsObject = Symbol('utilsObject')

async function run(t, command) {
  resolve.cb = p => (p === outputName ? outputPath : inputPath)
  writeTemplateToFile.cb = () => {}
  log.cb = () => {}
  const templater = dummee(() => template)
  req.cb = () => templater
  utils.cb = () => utilsObject
  getArguments.cb = () => ({ command, inputName, outputName })

  await cli()
  t.deepEqual(resolve.calls.shift(), { args: [__dirname, '..', 'templates', inputName] })
  t.deepEqual(req.calls.shift(), { args: [inputPath] })
  t.deepEqual(templater.calls.shift(), { args: [utilsObject] })
}

test('cli should call writeTemplateToFile if command is wf or writeTemplateToFile', async (t) => {
  await run(t, 'wf')
  t.deepEqual(resolve.calls.shift(), { args: [outputName] })
  t.deepEqual(writeTemplateToFile.calls.shift(), { args: [template, outputPath] })
  await run(t, 'writefile')
  t.deepEqual(resolve.calls.shift(), { args: [outputName] })
  t.deepEqual(writeTemplateToFile.calls.shift(), { args: [template, outputPath] })
})

test('cli should use log if command is wo or writeout', async (t) => {
  await run(t, 'wo')
  t.deepEqual(log.calls.shift(), { args: [template] })
  await run(t, 'writeout')
  t.deepEqual(log.calls.shift(), { args: [template] })
})
