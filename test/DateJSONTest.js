'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  DateJSON
} = require('./../index');

new Assertion(
  new IsString( // have no idea why...
    new DateJSON(
      new Date()
    )
  )
).call();
