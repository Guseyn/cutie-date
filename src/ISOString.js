'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is string
class ISOString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.toISOString();
    }
  }

}

module.exports = ISOString;
