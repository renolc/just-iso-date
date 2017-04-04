# just-iso-date

## Note: this package is a modified version of [`just-date` by `ismyrnow`](https://github.com/ismyrnow/just-date)

Simple static functions used to convert between ISO strings and JS date objects. Conversions disregard timestamp, so we are dealing with just the dates.

### Installation

```
npm i just-iso-date -S
```

### Usage

```js
const isoDate = require('just-iso-date')

// creates date object with local timezone
var date = isoDate.toDate('1988-02-13')

// creates string in format YYYY-MM-DD
var string = isoDate.toString(date)
```