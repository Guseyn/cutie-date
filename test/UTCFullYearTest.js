'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCFullYear
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCFullYear(
      new Date()
    )
  )
).call();
