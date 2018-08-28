'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
