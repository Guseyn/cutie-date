'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithYear extends AsyncObject {

  constructor(date, year) {
    super(date, year);
  }

  definedSyncCall() {
    return (date, year) => {
      date.setYear(year);
      return date;
    }
  }

}

module.exports = DateWithYear;
