// test/global.js
const jsdom = require('jsdom')
const { JSDOM } = jsdom

global.dom = new JSDOM('')
global.window = global.dom.window
global.document = window.document
global.navigator = window.navigator
