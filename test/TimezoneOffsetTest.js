'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  TimezoneOffset
} = require('./../index');

new Assertion(
  new IsNumber(
    new TimezoneOffset(
      new Date()
    )
  )
).call();
