'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is date
class DateWithUTCMilliseconds extends AsyncObject {
  constructor (date, milliseconds) {
    super(date, milliseconds)
  }

  syncCall () {
    return (date, milliseconds) => {
      date.setUTCMilliseconds(milliseconds)
      return date
    }
  }
}

module.exports = DateWithUTCMilliseconds
