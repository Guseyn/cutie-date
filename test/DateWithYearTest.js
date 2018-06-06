'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithYear
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithYear(
      new Date(), 94
    )
  )
).call();
