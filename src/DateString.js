'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is string
class DateString extends AsyncObject {
  constructor (date) {
    super(date)
  }

  syncCall () {
    return (date) => {
      return date.toDateString()
    }
  }
}

module.exports = DateString
