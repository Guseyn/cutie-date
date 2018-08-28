'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithUTCMilliseconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCMilliseconds(
      new Date(), 11
    )
  )
).call();
