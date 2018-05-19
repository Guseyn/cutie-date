'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(1-31)
class DayOfMonth extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getDate();
    }
  }

}

module.exports = DayOfMonth;
