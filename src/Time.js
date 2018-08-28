'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(ms)
class Time extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getTime();
    }
  }

}

module.exports = Time;
