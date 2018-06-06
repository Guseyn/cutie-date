'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  DayOfMonth
} = require('./../index');

new Assertion(
  new IsNumber(
    new DayOfMonth(
      new Date()
    )
  )
).call();
