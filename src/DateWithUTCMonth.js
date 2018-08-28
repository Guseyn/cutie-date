'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class DateWithUTCMonth extends AsyncObject {

  constructor(date, month) {
    super(date, month);
  }

  definedSyncCall() {
    return (date, month) => {
      date.setUTCMonth(month);
      return date;
    }
  }

}

module.exports = DateWithUTCMonth;
