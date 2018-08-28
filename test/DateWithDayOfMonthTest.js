'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
