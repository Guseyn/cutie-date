'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(0 - 59)
class Seconds extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getSeconds();
    }
  }

}

module.exports = Seconds;
