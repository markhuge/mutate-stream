# mutate-stream 

>Object mutation pipelines for flow control

I think object mode streams are really handy for async flow control:

```js
var stream = require('mutate-stream');

validate(req.body)
  .pipe(sanitize())
  .pipe(whatever())
  .pipe(dbWrite)
```

This module is a simple wrapper to eliminate boilerplate in a lot of my applications.



## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install mutate-stream --save
```

## Usage

`stream(<transform function>, [ optional flush function ]);`

Pass in a transform function and an optional flush function. mutate-stream returns a
a function that can take an optional data object parameter (to start your pipeline).
This function in turn returns a stream.

Example:


```js
var stream = require('mutate-stream');

function foo (obj, encoding, cb) { /* some transform */ }
function bar (obj, encoding, cb) { /* some transform */ }

var fooStream = stream(foo),
    barStream = stream(bar);

fooStream({some: 'optional data'})
  .pipe(barStream());

```

## Tests

```sh
npm install
npm test
```
```

> mutate-stream@0.0.0 test /Users/mark/projects/mutate-stream
> node test/mutate-stream.js
TAP version 13
# wraps transform function
ok 1 should be equivalent
1..1
# tests 1
# pass  1
# ok

```

## Dependencies

- [through2](https://github.com/rvagg/through2): A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

## Dev Dependencies

- [stream-output](https://github.com/markhuge/stream-output): Get the result of a streams transform pipeline for your tests
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers


## License

MIT
