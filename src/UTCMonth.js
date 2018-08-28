'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(0 - 11)
class UTCMonth extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getUTCMonth();
    }
  }

}

module.exports = UTCMonth;
