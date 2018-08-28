'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  Year
} = require('./../index');

new Assertion(
  new IsNumber(
    new Year(
      new Date()
    )
  )
).call();
