'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithMilliseconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithMilliseconds(
      new Date(), 11
    )
  )
).call();
