'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithUTCHours
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCHours(
      new Date(), 3
    )
  )
).call();
