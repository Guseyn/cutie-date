'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number(ms)
class UTC extends AsyncObject {
  constructor (...params) {
    super(...params)
  }

  syncCall () {
    return (...params) => {
      return Date.UTC(...params)
    }
  }
}

module.exports = UTC
