'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCHours extends AsyncObject {

  constructor(date, hours) {
    super(date, hours);
  }

  definedSynCall() {
    return (date, hours) => {
      date.setUTCHours(hours);
      return date;
    }
  }

}

module.exports = DateWithUTCHours;
