function keyMirror(object){
  var keys = Object.keys(object)
  var mirrored = {}
  keys.forEach(defineKey, mirrored)
  return mirrored
}

function defineKey(key){
  this[key] = key
}

module.exports = keyMirror
