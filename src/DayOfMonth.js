'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(1-31)
class DayOfMonth extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getDate();
    }
  }

}

module.exports = DayOfMonth;
