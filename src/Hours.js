'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number(0 - 23)
class Hours extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSynCall() {
    return (date) => {
      return date.getHours();
    }
  }

}

module.exports = Hours;
