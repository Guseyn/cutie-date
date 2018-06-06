'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  DateString
} = require('./../index');

new Assertion(
  new IsString(
    new DateString(
      new Date()
    )
  )
).call();
