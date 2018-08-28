'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
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
