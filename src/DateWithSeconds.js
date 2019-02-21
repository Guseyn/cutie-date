'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is date
class DateWithSeconds extends AsyncObject {
  constructor (date, seconds) {
    super(date, seconds)
  }

  syncCall () {
    return (date, seconds) => {
      date.setSeconds(seconds)
      return date
    }
  }
}

module.exports = DateWithSeconds
