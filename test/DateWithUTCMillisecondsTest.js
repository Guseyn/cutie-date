'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCMilliseconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCMilliseconds(
      new Date(), 11
    )
  )
).call();
