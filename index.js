var copy = require('directory-copy')
var tmpd = require('quick-tmp')
var mkdp = require('mkdirp')
var rmrf = require('rimraf')
var path = require('path')
var n = 0

module.exports = betamax

function betamax(dir, test) {
  if (test) return wrap(test, betamax(dir))

  dir = path.resolve(dir)

  return function(test) {
    return function(t) {
      var dst = t.directory = tmpd('betamax-' + n++)()
      var src = dir

      mkdp.sync(dst)

      copy({
          src: src
        , dest: dst
        , excludes: [
          /[^\d\D]/g
        ]
      }, function(err) {
        if (err) t.ifError(err)

        test(t.once('end', function() {
          rmrf.sync(dst)
        }))
      })
    }
  }
}

function wrap(test, fn) {
  return function betaTest(name, run) {
    test(name, fn(run))
  }
}
