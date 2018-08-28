'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  FullYear
} = require('./../index');

new Assertion(
  new IsNumber(
    new FullYear(
      new Date()
    )
  )
).call();
