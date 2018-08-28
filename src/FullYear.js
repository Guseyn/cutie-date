'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(4 digits)
class FullYear extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getFullYear();
    }
  }

}

module.exports = FullYear;
