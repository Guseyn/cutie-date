'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(0-6)
class UTCDayOfWeek extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getUTCDay();
    }
  }

}

module.exports = UTCDayOfWeek;
