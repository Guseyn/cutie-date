'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCSeconds extends AsyncObject {

  constructor(date, seconds) {
    super(date, seconds);
  }

  definedSynCall() {
    return (date, seconds) => {
      date.setUTCSeconds(seconds);
      return date;
    }
  }

}

module.exports = DateWithUTCSeconds;
