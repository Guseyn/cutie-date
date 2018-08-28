'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Date,
  LocaleTimeString
} = require('./../index');

new Assertion(
  new IsString(
    new LocaleTimeString(
      new Date(), 'en-US', { hour12: false }
    )
  )
).call();
