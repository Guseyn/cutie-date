'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithSeconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithSeconds(
      new Date(), 17
    )
  )
).call();
