'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCMonth
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCMonth(
      new Date(), 3
    )
  )
).call();
