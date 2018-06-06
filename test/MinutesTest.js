'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Minutes
} = require('./../index');

new Assertion(
  new IsNumber(
    new Minutes(
      new Date()
    )
  )
).call();
