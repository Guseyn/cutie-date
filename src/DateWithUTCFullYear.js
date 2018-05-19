'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCFullYear extends AsyncObject {

  constructor(date, year) {
    super(date, year);
  }

  definedSynCall() {
    return (date, year) => {
      date.setUTCFullYear(year);
      return date;
    }
  }

}

module.exports = DateWithUTCFullYear;