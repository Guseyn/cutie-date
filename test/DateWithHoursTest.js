'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithHours
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithHours(
      new Date(), 3
    )
  )
).call();
