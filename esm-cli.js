#!/usr/bin/env node

/* eslint-disable no-global-assign */
require = require('esm')(module/* , options */)
module.exports = require('./src/cli.js').default()
