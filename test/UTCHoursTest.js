'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTCHours
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCHours(
      new Date()
    )
  )
).call();
