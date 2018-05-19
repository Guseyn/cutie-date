'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(2 or 3 digits)
class Year extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getYear();
    }
  }

}

module.exports = Year;
