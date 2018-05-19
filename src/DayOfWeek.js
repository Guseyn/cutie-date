'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(0-6)
class DayOfWeek extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getDay();
    }
  }

}

module.exports = DayOfWeek;