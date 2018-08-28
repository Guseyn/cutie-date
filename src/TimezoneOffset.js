'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class TimezoneOffset extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getTimezoneOffset();
    }
  }

}

module.exports = TimezoneOffset;
