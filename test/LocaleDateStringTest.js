'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
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
