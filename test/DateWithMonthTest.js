'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithMonth
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithMonth(
      new Date(), 3
    )
  )
).call();
