# cutie-date

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for work with </b>Date</b> object in JavaScript. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-date/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/date');
```
For more information about parameters in the async objects visit [MDN docs for Date global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `Date` | `new Date(...params)` | `...params` | `date` |
| `DateAsString` | `date.toString` | `date` | `string` |
| `DateJSON` | `date.toJSON` | `date` | `json` |
| `DateString` | `date.toDateString` | `date` | `string` |
| `DateValue` | `date.valueOf` | `date` | `primitive value` |
| `DateWithDayOfMonth` | `date.setDate` | `date, day` | `date` |
| `DateWithFullYear` | `date.setFullYear` | `date, year` | `date` |
| `DateWithHours` | `date.setHours` | `date, hours` | `date` |
| `DateWithMilliseconds` | `date.setMilliseconds` | `date, milliseconds` | `date` |
| `DateWithMinutes` | `date.setMinutes` | `date, minutes` | `date` |
| `DateWithMonth` | `date.setMonth` | `date, month` | `date` |
| `DateWithSeconds` | `date.setSeconds` | `date, seconds` | `date` |
| `DateWithTime` | `date.setTime` | `date, time` | `date` |
| `DateWithUTCDayOfMonth` | `date.setUTCDate` | `date, day` | `date` |
| `DateWithUTCFullYear` | `date.setUTCFullYear` | `date, year` | `date` |
| `DateWithUTCHours` | `date.setUTCHours` | `date, hours` | `date` |
| `DateWithUTCMilliseconds` | `date.setUTCMilliseconds` | `date, milliseconds` | `date` |
| `DateWithUTCMinutes` | `date.setUTCMinutes` | `date, minutes` | `date` |
| `DateWithUTCMonth` | `date.setUTCMonth` | `date, month` | `date` |
| `DateWithUTCSeconds` | `date.setUTCSeconds` | `date, seconds` | `date` |
| `DateWithUTCTime` | `date.setUTCTime` | `date, time` | `date` |
| `DateWithYear` | `date.setYear` | `date, year` | `date` |
| `DayOfMonth` | `date.getDate` | `date` | `number` |
| `DayOfWeek` | `date.getDay` | `date` | `number` |
| `FullYear` | `date.getFullYear` | `date` | `number` |
| `GMTString` | `date.toGMTString` | `date` | `string` |
| `Hours` | `date.getHours` | `date` | `number` |
| `ISOString` | `date.toISOString` | `date` | `string` |
| `LocaleDateString` | `date.toLocaleDateString` | `date, ...args` | `string` |
| `LocaleTimeString` | `date.toLocaleTimeString` | `date, ...args` | `string` |
| `Milliseconds` | `date.getMilliseconds` | `date` | `number` |
| `Minutes` | `date.getMinutes` | `date` | `number` |
| `Month` | `date.getMonth` | `date` | `number` |
| `Now` | `Date.now` |  | `date` |
| `ParsedDate` | `Date.parse` | `date` | `number(ms)` |
| `Seconds` | `date.getSeconds` | `date` | `number` |
| `Time` | `date.getTime` | `date` | `number(ms)` |
| `TimeString` | `date.toTimeString` | `date` | `string` |
| `TimezoneOffset` | `date.getTimezoneOffset` | `date` | `number` |
| `UTC` | `Date.UTC` | `...params` | `number(ms)` |
| `UTCDayOfMonth` | `date.getUTCDate` | `date` | `number` |
| `UTCDayOfWeek` | `date.getUTCDay` | `date` | `number` |
| `UTCFullYear` | `date.getUTCFullYear` | `date` | `number` |
| `UTCHours` | `date.getUTCHours` | `date` | `number` |
| `UTCMilliseconds` | `date.getUTCMilliseconds` | `date` | `number` |
| `UTCMinutes` | `date.getUTCMinutes` | `date` | `number` |
| `UTCMonth` | `date.getUTCMonth` | `date` | `number` |
| `UTCSeconds` | `date.getUTCSeconds` | `date` | `number` |
| `UTCString` | `date.toUTCString` | `date` | `string` |
| `Year` | `date.getYear` | `date` | `number` |

[npm-image]: https://img.shields.io/npm/v/@cuties/date.svg
[npm-url]: https://npmjs.org/package/@cuties/date

