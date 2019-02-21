'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number(0 - 59)
class Minutes extends AsyncObject {
  constructor (date) {
    super(date)
  }

  syncCall () {
    return (date) => {
      return date.getMinutes()
    }
  }
}

module.exports = Minutes
