'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithUTCMilliseconds extends AsyncObject {

  constructor(date, milliseconds) {
    super(date, milliseconds);
  }

  definedSyncCall() {
    return (date, milliseconds) => {
      date.setUTCMilliseconds(day);
      return date;
    }
  }

}

module.exports = DateWithUTCMilliseconds;
