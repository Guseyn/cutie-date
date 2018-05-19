'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithDayOfMonth extends AsyncObject {

  constructor(date, day) {
    super(date, day);
  }

  definedSynCall() {
    return (date, day) => {
      date.setDate(day);
      return date;
    }
  }

}

module.exports = DateWithDayOfMonth;
