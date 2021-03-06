'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class GMTString extends AsyncObject {
  constructor (date) {
    super(date)
  }

  syncCall () {
    return (date) => {
      return date.toGMTString()
    }
  }
}

module.exports = GMTString
