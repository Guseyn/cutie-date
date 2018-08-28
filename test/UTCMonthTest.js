'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTCMonth
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCMonth(
      new Date()
    )
  )
).call();
