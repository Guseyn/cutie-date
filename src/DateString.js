'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class DateString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toDateString();
    }
  }

}

module.exports = DateString;
