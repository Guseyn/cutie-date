'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Month
} = require('./../index');

new Assertion(
  new IsNumber(
    new Month(
      new Date()
    )
  )
).call();
