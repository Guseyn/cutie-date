'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCDayOfMonth extends AsyncObject {

  constructor(date, day) {
    super(date, day);
  }

  definedSynCall() {
    return (date, day) => {
      date.setUTCDate(day);
      return date;
    }
  }

}

module.exports = DateWithUTCDayOfMonth;
