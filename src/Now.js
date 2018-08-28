'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
