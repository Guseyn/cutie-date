'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsDate
} = require('@cuties/is');
const {
  Date
} = require('./../index');

new Assertion(
  new IsDate(
    new Date()
  )
).call();
