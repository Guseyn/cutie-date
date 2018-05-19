'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is string
class LocaleFormat extends AsyncObject {

  constructor(date, format) {
    super(date, format);
  }

  definedSyncCall() {
    return (date, format) => {
      return date.toLocaleFormat(format);
    }
  }

}

module.exports = LocaleFormat;
