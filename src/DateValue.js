'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is primitive value
class DateValue extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.valueOf();
    }
  }

}

module.exports = DateValue;
