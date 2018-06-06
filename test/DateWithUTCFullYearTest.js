'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCFullYear
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCFullYear(
      new Date(), 1994
    )
  )
).call();
