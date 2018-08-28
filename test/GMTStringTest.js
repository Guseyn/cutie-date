'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
