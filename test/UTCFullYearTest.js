'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTCFullYear
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCFullYear(
      new Date()
    )
  )
).call();
