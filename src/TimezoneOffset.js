'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class TimezoneOffset extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getTimezoneOffset();
    }
  }

}

module.exports = TimezoneOffset;
