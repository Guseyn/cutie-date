'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
