'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
