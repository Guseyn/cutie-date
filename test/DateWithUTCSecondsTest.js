'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithUTCSeconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithUTCSeconds(
      new Date(), 17
    )
  )
).call();
