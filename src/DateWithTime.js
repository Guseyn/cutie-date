'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithTime extends AsyncObject {

  constructor(date, time) {
    super(date, time);
  }

  definedSyncCall() {
    return (date, time) => {
      date.setTime(time);
      return date;
    }
  }

}

module.exports = DateWithTime;
