var stream = require('../'),
    test   = require('tape'),
    end    = require('stream-output/obj');

test('wraps transform function', function (t) {
  var testcase = function (obj) {
    t.plan(1);
    t.deepEqual({ new: true, old: 'new value'}, obj);
  };

  var data = { old: 'originla value' };

  stream(fixture)(data).pipe(end(testcase));
});

function fixture (obj, encoding, cb) {
  obj.new = true;
  obj.old = 'new value';
  this.push(obj);
}
