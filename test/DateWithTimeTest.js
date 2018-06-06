 'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date,
  DateWithTime,
  Time
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithTime(
      new Date(), new Time(new Date())
    )
  )
).call();
