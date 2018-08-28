'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
