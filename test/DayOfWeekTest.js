'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Date,
  DayOfWeek
} = require('./../index');

new Assertion(
  new IsNumber(
    new DayOfWeek(
      new Date()
    )
  )
).call();
