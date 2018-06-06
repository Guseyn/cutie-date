'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Hours
} = require('./../index');

new Assertion(
  new IsNumber(
    new Hours(
      new Date()
    )
  )
).call();
