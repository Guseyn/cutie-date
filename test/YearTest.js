'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Year
} = require('./../index');

new Assertion(
  new IsNumber(
    new Year(
      new Date()
    )
  )
).call();
