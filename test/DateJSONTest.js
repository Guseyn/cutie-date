'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  IsString
} = require('@cuties/is');
const {
  Date,
  DateJSON
} = require('./../index');

new Assertion(
  new IsString( // have no idea why...
    new DateJSON(
      new Date()
    )
  )
).call();
