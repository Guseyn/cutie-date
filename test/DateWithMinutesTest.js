'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithMinutes
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithMinutes(
      new Date(), 12
    )
  )
).call();
