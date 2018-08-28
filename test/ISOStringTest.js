'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
