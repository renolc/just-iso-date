var isoDate = require('./index')
var assert = require('assert')

var date = isoDate.toDate("1988-02-13")
assert.equal(date.getFullYear(), 1988)
assert.equal(date.getMonth(), 1)
assert.equal(date.getDate(), 13)

date = isoDate.toDate("1988-02-13T20:41:52.728Z")
assert.equal(date.getFullYear(), 1988)
assert.equal(date.getMonth(), 1)
assert.equal(date.getDate(), 13)

var string = isoDate.toString(date)
assert.equal(string, '1988-02-13')

try {
  isoDate.toDate('1988-2-13')
  assert.fail(null, null, 'should have thrown')
} catch (e) {
  assert.equal(e.message, 'Invalid date supplied. Please specify a date object or date string in YYYY-MM-DD format.')
}

console.log('all tests pass')