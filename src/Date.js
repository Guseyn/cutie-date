'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is date
class CutieDate extends AsyncObject {

  constructor(...params) {
    super(...params);
  }

  definedSyncCall() {
    return (...params) => {
      return new Date(...params);
    }
  }

}

module.exports = CutieDate;
