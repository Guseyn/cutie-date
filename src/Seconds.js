'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(0 - 59)
class Seconds extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getSeconds();
    }
  }

}

module.exports = Seconds;
