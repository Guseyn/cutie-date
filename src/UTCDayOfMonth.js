'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(1-31)
class UTCDayOfMonth extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getUTCDate();
    }
  }

}

module.exports = UTCDayOfMonth;
