'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithUTCMinutes extends AsyncObject {

  constructor(date, minutes) {
    super(date, minutes);
  }

  definedSyncCall() {
    return (date, minutes) => {
      date.setUTCMinutes(minutes);
      return date;
    }
  }

}

module.exports = DateWithUTCMinutes;
