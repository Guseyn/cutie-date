'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithFullYear extends AsyncObject {

  constructor(date, year) {
    super(date, year);
  }

  definedSynCall() {
    return (date, year) => {
      date.setFullYear(year);
      return date;
    }
  }

}

module.exports = DateWithFullYear;
