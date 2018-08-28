'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithMinutes
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithMinutes(
      new Date(), 12
    )
  )
).call();
