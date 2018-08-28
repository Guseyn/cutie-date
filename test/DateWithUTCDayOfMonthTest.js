'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
