'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Seconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new Seconds(
      new Date()
    )
  )
).call();
