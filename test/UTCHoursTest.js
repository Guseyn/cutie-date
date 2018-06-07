'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCHours
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCHours(
      new Date()
    )
  )
).call();
