'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
