'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(0-6)
class UTCDayOfWeek extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getUTCDay();
    }
  }

}

module.exports = UTCDayOfWeek;
