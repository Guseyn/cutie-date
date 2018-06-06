'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsString
} = require('@guseyn/cutie-is');
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
