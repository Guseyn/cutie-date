'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithHours
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithHours(
      new Date(), 3
    )
  )
).call();
