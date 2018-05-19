'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class DateSource extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toSource();
    }
  }

}

module.exports = DateSource;