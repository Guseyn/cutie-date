
'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  Now
} = require('./../index');

new Assertion(
  new IsNumber(
    new Now()
  )
).call();
