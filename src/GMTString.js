'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class GMTString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toGMTString();
    }
  }

}

module.exports = GMTString;