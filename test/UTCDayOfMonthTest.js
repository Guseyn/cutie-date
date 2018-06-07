'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCDayOfMonth
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCDayOfMonth(
      new Date()
    )
  )
).call();
