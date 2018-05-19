'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(4 digits)
class FullYear extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getFullYear();
    }
  }

}

module.exports = FullYear;
