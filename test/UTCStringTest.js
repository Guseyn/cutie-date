'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  UTCString
} = require('./../index');

new Assertion(
  new IsString(
    new UTCString(
      new Date()
    )
  )
).call();
