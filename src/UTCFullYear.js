'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(4 digits)
class UTCFullYear extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getUTCFullYear();
    }
  }

}

module.exports = UTCFullYear;
