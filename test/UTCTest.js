'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  UTC
} = require('./../index');

new Assertion(
  new IsNumber(
    new UTC(
      2018, 6, 7, 11, 12, 12
    )
  )
).call();
