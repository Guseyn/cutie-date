'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is primitive value
class DateValue extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.valueOf();
    }
  }

}

module.exports = DateValue;
