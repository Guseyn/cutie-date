'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number(0 - 23)
class UTCHours extends AsyncObject {
  constructor (date) {
    super(date)
  }

  syncCall () {
    return (date) => {
      return date.getUTCHours()
    }
  }
}

module.exports = UTCHours
