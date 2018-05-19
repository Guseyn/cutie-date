'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithMinutes extends AsyncObject {

  constructor(date, minutes) {
    super(date, minutes);
  }

  definedSyncCall() {
    return (date, minutes) => {
      date.setMinutes(minutes);
      return date;
    }
  }

}

module.exports = DateWithMinutes;
