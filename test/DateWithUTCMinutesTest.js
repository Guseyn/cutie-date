'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithUTCMinutes
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCMinutes(
      new Date(), 12
    )
  )
).call();
