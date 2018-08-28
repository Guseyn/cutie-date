'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
