'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCMinutes
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCMinutes(
      new Date(), 12
    )
  )
).call();
