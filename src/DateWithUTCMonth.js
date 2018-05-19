'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCMonth extends AsyncObject {

  constructor(date, month) {
    super(date, month);
  }

  definedSynCall() {
    return (date, month) => {
      date.setUTCMonth(month);
      return date;
    }
  }

}

module.exports = DateWithUTCMonth;
