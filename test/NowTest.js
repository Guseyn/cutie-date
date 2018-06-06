
'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  Now
} = require('./../index');

new Assertion(
  new IsNumber(
    new Now()
  )
).call();
