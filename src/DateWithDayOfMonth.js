'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithDayOfMonth extends AsyncObject {

  constructor(date, day) {
    super(date, day);
  }

  definedSyncCall() {
    return (date, day) => {
      date.setDate(day);
      return date;
    }
  }

}

module.exports = DateWithDayOfMonth;
