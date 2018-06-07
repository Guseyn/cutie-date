
'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  ParsedDate
} = require('./../index');

new Assertion(
  new IsNumber(
    new ParsedDate(
      '2018-03-12'
    )
  )
).call();
