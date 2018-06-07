'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
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
