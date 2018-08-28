'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTCMinutes
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCMinutes(
      new Date()
    )
  )
).call();
