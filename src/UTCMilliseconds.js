'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(0 - 999)
class UTCMilliseconds extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getUTCMilliseconds();
    }
  }

}

module.exports = UTCMilliseconds;
