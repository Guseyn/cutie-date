'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCMonth
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCMonth(
      new Date()
    )
  )
).call();
