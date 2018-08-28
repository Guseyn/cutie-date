 'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
