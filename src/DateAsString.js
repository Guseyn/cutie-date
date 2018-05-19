'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class DateAsString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toString();
    }
  }

}

module.exports = DateAsString;
