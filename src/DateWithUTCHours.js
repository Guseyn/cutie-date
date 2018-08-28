'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithUTCHours extends AsyncObject {

  constructor(date, hours) {
    super(date, hours);
  }

  definedSyncCall() {
    return (date, hours) => {
      date.setUTCHours(hours);
      return date;
    }
  }

}

module.exports = DateWithUTCHours;
