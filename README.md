# keyMirror

[![Build Status](https://travis-ci.org/bloodyowl/keymirror.svg)](https://travis-ci.org/bloodyowl/keymirror)

[![browser support](https://ci.testling.com/bloodyowl/keymirror.png)](https://ci.testling.com/bloodyowl/keymirror)

## install

```sh
$ npm install bloody-keymirror
```

## require

```javascript
var keyMirror = require("bloody-keymirror")
```

## api

### keyMirror(object) > mirroredObject

takes an object, and creates a new one having,
for each `object`'s `key` a `key` property set to
`key`.

## example

```javascript
var constants = keyMirror({
  GET_DATA : null,
  RECEIVED_DATA : null
})

constants.GET_DATA // "GET_DATA"
```
