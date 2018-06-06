'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithMonth
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithMonth(
      new Date(), 3
    )
  )
).call();
