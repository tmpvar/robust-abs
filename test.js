var test = require('tape');
var num = require('robust-estimate-float');
var split = require('robust-split');
var abs = require('./robust-abs');
var sum = require('robust-sum');

test('non-overlapping sequence', function(t) {
  t.equal(5.6, num(abs(split(-5.6))));

  t.equal(
    5.01234567890123456789,
    num(abs(split(-5.01234567890123456789)))
  );

  t.equal(
    0.30000000000000004,
    num(abs(sum(split(-0.1), split(-0.2))))
  );

  t.end();
});

test('results are applied locally', function(t) {

  var a = split(-.0003);
  var r = abs(a, true);

  t.ok(r === a);
  t.equal(.0003, num(r));

  t.end();
});


