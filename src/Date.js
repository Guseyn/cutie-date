'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class Date extends AsyncObject {

  constructor(...params) {
    super(...params);
  }

  definedSynCall() {
    return (...params) => {
      return new Date(...params);
    }
  }

}

module.exports = Date;
