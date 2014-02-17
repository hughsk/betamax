var assert = require('assert')
var betamax = require('./')
var test = require('tape')
var fs = require('fs')

betamax(__dirname + '/fixtures/basic', test)('basic', function(t, done) {
  var directory = null

  t.once('end', function() {
    assert(!fs.existsSync(directory + '/file'))
    assert(!fs.existsSync(directory))
  })

  directory = t.directory
  t.ok(directory, 'a directory has been supplied')
  t.ok(fs.existsSync(directory), 'that directory exists')
  t.ok(fs.existsSync(directory + '/file'), 'and contains the right file')
  t.end()
})
