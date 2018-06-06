'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCHours
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCHours(
      new Date(), 3
    )
  )
).call();
