'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCMinutes extends AsyncObject {

  constructor(date, minutes) {
    super(date, minutes);
  }

  definedSynCall() {
    return (date, minutes) => {
      date.setUTCMinutes(minutes);
      return date;
    }
  }

}

module.exports = DateWithUTCMinutes;
