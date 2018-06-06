'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithFullYear
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithFullYear(
      new Date(), 1994
    )
  )
).call();
