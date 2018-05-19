'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithSeconds extends AsyncObject {

  constructor(date, seconds) {
    super(date, seconds);
  }

  definedSynCall() {
    return (date, seconds) => {
      date.setSeconds(seconds);
      return date;
    }
  }

}

module.exports = DateWithSeconds;
