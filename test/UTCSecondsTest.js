'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCSeconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCSeconds(
      new Date()
    )
  )
).call();
