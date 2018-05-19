'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(0 - 999)
class UTCMilliseconds extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getUTCMilliseconds();
    }
  }

}

module.exports = UTCMilliseconds;
