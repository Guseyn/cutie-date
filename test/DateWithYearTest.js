'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithYear
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithYear(
      new Date(), 94
    )
  )
).call();
