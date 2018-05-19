'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class UTCString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toUTCString();
    }
  }

}

module.exports = UTCString;
