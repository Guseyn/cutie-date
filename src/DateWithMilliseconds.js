'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is date
class DateWithMilliseconds extends AsyncObject {

  constructor(date, milliseconds) {
    super(date, milliseconds);
  }

  definedSynCall() {
    return (date, milliseconds) => {
      date.setMilliseconds(day);
      return date;
    }
  }

}

module.exports = DateWithMilliseconds;
