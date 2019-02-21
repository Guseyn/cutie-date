'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is date
class DateWithHours extends AsyncObject {
  constructor (date, hours) {
    super(date, hours)
  }

  syncCall () {
    return (date, hours) => {
      date.setHours(hours)
      return date
    }
  }
}

module.exports = DateWithHours
