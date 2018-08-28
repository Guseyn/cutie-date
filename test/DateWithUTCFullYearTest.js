'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
