'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class LocaleDateString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toLocaleDateString();
    }
  }

}

module.exports = LocaleDateString;
