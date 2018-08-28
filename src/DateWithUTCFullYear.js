'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithUTCFullYear extends AsyncObject {

  constructor(date, year) {
    super(date, year);
  }

  definedSyncCall() {
    return (date, year) => {
      date.setUTCFullYear(year);
      return date;
    }
  }

}

module.exports = DateWithUTCFullYear;
