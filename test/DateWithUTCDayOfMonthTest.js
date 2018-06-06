'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCDayOfMonth
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCDayOfMonth(
      new Date(), 19
    )
  )
).call();
