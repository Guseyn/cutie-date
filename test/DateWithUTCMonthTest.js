'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
