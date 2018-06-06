'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithDayOfMonth
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithDayOfMonth(
      new Date(), 19
    )
  )
).call();
