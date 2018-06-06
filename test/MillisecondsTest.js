'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Milliseconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new Milliseconds(
      new Date()
    )
  )
).call();
