'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithUTCSeconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCSeconds(
      new Date(), 17
    )
  )
).call();
