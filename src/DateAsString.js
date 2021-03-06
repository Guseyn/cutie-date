'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class DateAsString extends AsyncObject {
  constructor (date) {
    super(date)
  }

  syncCall () {
    return (date) => {
      return date.toString()
    }
  }
}

module.exports = DateAsString
