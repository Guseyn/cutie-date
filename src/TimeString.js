'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class TimeString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.toTimeString();
    }
  }

}

module.exports = TimeString;