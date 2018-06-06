'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  ISOString
} = require('./../index');

new Assertion(
  new IsString(
    new ISOString(
      new Date()
    )
  )
).call();
