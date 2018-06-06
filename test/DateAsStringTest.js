'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  DateAsString
} = require('./../index');

new Assertion(
  new IsString(
    new DateAsString(
      new Date()
    )
  )
).call();
