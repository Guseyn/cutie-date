'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
