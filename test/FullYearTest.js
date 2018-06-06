'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  FullYear
} = require('./../index');

new Assertion(
  new IsNumber(
    new FullYear(
      new Date()
    )
  )
).call();
