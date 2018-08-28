'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(4 digits)
class UTCFullYear extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getUTCFullYear();
    }
  }

}

module.exports = UTCFullYear;
