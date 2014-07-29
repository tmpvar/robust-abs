module.exports = robustAbs;

var array = Array.isArray;
var abs = Math.abs;

function robustAbs(a) {
  var l = a.length;

  if (a[l-1] < 0) {
    for (var i=0; i<l; i++) {
      a[i] = -a[i];
    }
  }

  return a;
}
