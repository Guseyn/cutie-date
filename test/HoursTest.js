'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Date,
  Hours
} = require('./../index');

new Assertion(
  new IsNumber(
    new Hours(
      new Date()
    )
  )
).call();
