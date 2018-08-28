'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithFullYear extends AsyncObject {

  constructor(date, year) {
    super(date, year);
  }

  definedSyncCall() {
    return (date, year) => {
      date.setFullYear(year);
      return date;
    }
  }

}

module.exports = DateWithFullYear;
