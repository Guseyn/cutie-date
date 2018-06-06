'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(ms)
class Now extends AsyncObject {

  constructor() {
    super();
  }

  definedSyncCall() {
    return () => {
      return Date.now();
    }
  }

}

module.exports = Now;
