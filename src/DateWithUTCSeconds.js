'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithUTCSeconds extends AsyncObject {

  constructor(date, seconds) {
    super(date, seconds);
  }

  definedSyncCall() {
    return (date, seconds) => {
      date.setUTCSeconds(seconds);
      return date;
    }
  }

}

module.exports = DateWithUTCSeconds;
