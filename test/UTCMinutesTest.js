'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCMinutes
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCMinutes(
      new Date()
    )
  )
).call();
