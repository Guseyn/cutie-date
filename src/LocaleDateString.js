'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class LocaleDateString extends AsyncObject {
  constructor (date, ...args) {
    super(date, ...args)
  }

  syncCall () {
    return (date, ...args) => {
      return date.toLocaleDateString(...args)
    }
  }
}

module.exports = LocaleDateString
