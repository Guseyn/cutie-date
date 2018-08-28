'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
