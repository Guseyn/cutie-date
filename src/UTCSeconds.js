'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number(0 - 59)
class UTCSeconds extends AsyncObject {
  constructor (date) {
    super(date)
  }

  syncCall () {
    return (date) => {
      return date.getUTCSeconds()
    }
  }
}

module.exports = UTCSeconds
