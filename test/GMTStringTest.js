'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  GMTString
} = require('./../index');

new Assertion(
  new IsString(
    new GMTString(
      new Date()
    )
  )
).call();
