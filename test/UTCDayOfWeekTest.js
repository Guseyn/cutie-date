'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCDayOfWeek
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCDayOfWeek(
      new Date()
    )
  )
).call();
