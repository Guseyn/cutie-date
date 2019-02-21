'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number(ms)
class ParsedDate extends AsyncObject {
  constructor (dateString) {
    super(dateString)
  }

  syncCall () {
    return (dateString) => {
      return Date.parse(dateString)
    }
  }
}

module.exports = ParsedDate
