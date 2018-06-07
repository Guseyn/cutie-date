'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  Time
} = require('./../index');

new Assertion(
  new IsNumber(
    new Time(
      new Date()
    )
  )
).call();
