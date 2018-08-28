'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is json
class DateJSON extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.toJSON();
    }
  }

}

module.exports = DateJSON;
