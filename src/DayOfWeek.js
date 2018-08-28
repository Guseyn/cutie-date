'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(0-6)
class DayOfWeek extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getDay();
    }
  }

}

module.exports = DayOfWeek;
