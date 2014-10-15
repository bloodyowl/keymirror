var tape = require("tape")
var keyMirror = require("..")

tape("keyMirror", function(test){

  var source = {
    FOO : null,
    BAR : null,
    BAZ : null
  }
  var expected = {
    FOO : "FOO",
    BAR : "BAR",
    BAZ : "BAZ"
  }
  var mirrored = keyMirror(source)
  test.notEqual(mirrored, source, "outputs a different object")
  test.equal(typeof mirrored, "object", "outputs the correct type")
  test.deepEqual(mirrored, expected, "outputs the correct structure")
  test.end()

})
