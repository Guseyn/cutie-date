'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number(0 - 23)
class Hours extends AsyncObject {

  constructor(date) {
    super(date);
  }

  definedSyncCall() {
    return (date) => {
      return date.getHours();
    }
  }

}

module.exports = Hours;
