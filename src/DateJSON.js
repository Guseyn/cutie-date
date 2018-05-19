'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is json
class DateJSON extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toJSON();
    }
  }

}

module.exports = DateJSON;
