var thru = require('through2').obj;

module.exports = function stream (transform, flush) {
  flush = flush || function (cb) { cb(); };
  
  return function (obj) {
    var stream = thru(transform, flush);
    if (obj) stream.write(obj);
    return stream;
  };
};
