'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(ms)
class UTC extends AsyncObject {

  constructor(...params) {
    super(...params);
  }

  definedSyncCall() {
    return (...params) => {
      return Date.UTC(...params);
    }
  }

}

module.exports = UTC;
