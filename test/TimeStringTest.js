'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Date,
  TimeString
} = require('./../index');

new Assertion(
  new IsString(
    new TimeString(
      new Date()
    )
  )
).call();
