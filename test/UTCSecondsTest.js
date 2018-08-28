'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTCSeconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCSeconds(
      new Date()
    )
  )
).call();
