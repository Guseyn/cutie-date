'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  DateValue
} = require('./../index');

new Assertion(
  new IsNumber(
    new DateValue(
      new Date()
    )
  )
).call();
