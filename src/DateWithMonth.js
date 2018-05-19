'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithMonth extends AsyncObject {

  constructor(date, month) {
    super(date, month);
  }

  definedSynCall() {
    return (date, month) => {
      date.setMonth(month);
      return date;
    }
  }

}

module.exports = DateWithMonth;
