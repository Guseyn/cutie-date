'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  Month
} = require('./../index');

new Assertion(
  new IsNumber(
    new Month(
      new Date()
    )
  )
).call();
