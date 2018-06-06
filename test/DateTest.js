'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsDate
} = require('@guseyn/cutie-is');
const {
  Date
} = require('./../index');

new Assertion(
  new IsDate(
    new Date()
  )
).call();
