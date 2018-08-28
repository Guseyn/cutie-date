'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
