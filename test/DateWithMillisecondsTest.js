'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date,
  DateWithMilliseconds
} = require('./../index');

new Assertion(
  new IsDate(
    new DateWithMilliseconds(
      new Date(), 11
    )
  )
).call();
