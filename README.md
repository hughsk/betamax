# betamax [![Flattr this!](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=hughskennedy&url=http://github.com/hughsk/betamax&title=betamax&description=hughsk/betamax%20on%20GitHub&language=en_GB&tags=flattr,github,javascript&category=software)[![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Automate the copying/removing of temporary directories for your
[tape](https://github.com/substack/tape) tests.

## Usage ##

[![betamax](https://nodei.co/npm/betamax.png?mini=true)](https://nodei.co/npm/betamax)

## `betamax(directory[, test])` ###

Where `directory` is the directory you want to copy to a temporary folder
for each test. Returns a test decorator that will handle creating and removing
the temporary directories as required:

``` javascript
var betamax = require('betamax')
var test = require('tape')

var basic = betamax(
  __diraname + '/fixtures/basic'
)

test('basic', basic(function(t) {
  // The temporary directory is set
  // as a property on `t`:
  var directory = t.directory

  t.end()
}))
```

You might find it simpler to supply `betamax` with tape's `test` function, which will give you back a modified version to construct your tests with:

``` javascript
var betamax = require('betamax')
var tape = require('tape')

var test = betamax(
  __dirname + '/fixtures/basic'
, tape)


// You can pass tape's `test` method into
// betamax to use it directly:
test('basic', function(t) {
  var directory = t.directory
  // test things here...
  t.end()
})
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/betamax/blob/master/LICENSE.md) for details.
