'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
