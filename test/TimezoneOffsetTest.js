'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
