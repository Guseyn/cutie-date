'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  Seconds
} = require('./../index');

new Assertion(
  new IsNumber(
    new Seconds(
      new Date()
    )
  )
).call();
