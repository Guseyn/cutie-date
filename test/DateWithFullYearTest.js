'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
