'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithUTCDayOfMonth extends AsyncObject {

  constructor(date, day) {
    super(date, day);
  }

  definedSyncCall() {
    return (date, day) => {
      date.setUTCDate(day);
      return date;
    }
  }

}

module.exports = DateWithUTCDayOfMonth;
