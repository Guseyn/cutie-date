'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(0 - 59)
class Minutes extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getMinutes();
    }
  }

}

module.exports = Minutes;
