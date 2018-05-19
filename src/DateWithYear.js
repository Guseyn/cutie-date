'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithYear extends AsyncObject {

  constructor(date, year) {
    super(date, year);
  }

  definedSynCall() {
    return (date, year) => {
      date.setYear(year);
      return date;
    }
  }

}

module.exports = DateWithYear;
