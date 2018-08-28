
'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
