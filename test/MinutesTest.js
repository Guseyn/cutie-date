'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  Minutes
} = require('./../index');

new Assertion(
  new IsNumber(
    new Minutes(
      new Date()
    )
  )
).call();
