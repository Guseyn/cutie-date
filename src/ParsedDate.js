'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(ms)
class ParsedDate extends AsyncObject {

  constructor(dateString) {
    super(dateString);
  }

  definedSynCall() {
    return (dateString) => {
      return Date.parse(dateString);
    }
  }

}

module.exports = ParsedDate;
