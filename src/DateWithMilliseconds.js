'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithMilliseconds extends AsyncObject {

  constructor(date, milliseconds) {
    super(date, milliseconds);
  }

  definedSyncCall() {
    return (date, milliseconds) => {
      date.setMilliseconds(milliseconds);
      return date;
    }
  }

}

module.exports = DateWithMilliseconds;
