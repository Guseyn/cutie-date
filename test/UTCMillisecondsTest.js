'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTCMilliseconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTCMilliseconds(
      new Date()
    )
  )
).call();
