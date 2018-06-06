'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
const {
  Date,
  LocaleDateString
} = require('./../index');

new Assertion(
  new IsString(
    new LocaleDateString(
      new Date(), 'en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    )
  )
).call();
