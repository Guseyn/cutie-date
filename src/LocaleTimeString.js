'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class LocaleTimeString extends AsyncObject {
  constructor (date, ...args) {
    super(date, ...args)
  }

  syncCall () {
    return (date, ...args) => {
      return date.toLocaleTimeString(...args)
    }
  }
}

module.exports = LocaleTimeString
