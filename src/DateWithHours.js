'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithHours extends AsyncObject {

  constructor(date, hours) {
    super(date, hours);
  }

  definedSynCall() {
    return (date, hours) => {
      date.setHours(hours);
      return date;
    }
  }

}

module.exports = DateWithHours;
