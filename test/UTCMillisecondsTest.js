'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCMilliseconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCMilliseconds(
      new Date()
    )
  )
).call();
