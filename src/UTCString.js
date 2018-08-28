'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class UTCString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.toUTCString();
    }
  }

}

module.exports = UTCString;
