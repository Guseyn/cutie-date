'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class LocaleTimeString extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.toLocaleTimeString();
    }
  }

}

module.exports = LocaleTimeString;
