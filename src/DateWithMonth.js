'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is date
class DateWithMonth extends AsyncObject {
  constructor (date, month) {
    super(date, month)
  }

  syncCall () {
    return (date, month) => {
      date.setMonth(month)
      return date
    }
  }
}

module.exports = DateWithMonth
