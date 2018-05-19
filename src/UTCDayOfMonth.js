'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(1-31)
class UTCDayOfMonth extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getUTCDate();
    }
  }

}

module.exports = UTCDayOfMonth;
