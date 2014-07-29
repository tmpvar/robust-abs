# robust-abs

Math.abs for non-overlapping increasing sequences

# install

`npm install robust-abs`

# use

You'll want to have a non-overlapping increasing sequence that came
from a packages in the [robust family of packages](http://npmsearch.com/?q=keywords:robust).

For this example sake we'll simulate that here by using [`robust-split`](https://github.com/tmpvar/robust-split)
which will convert a JavaScript number into a non-overlapping increasing sequence.  We'll also be using [`robust-estimate-float`](https://github.com/tmpvar/robust-estimate-float)
to provide more human readable results.

```javascript

var split = require('robust-split');
var abs = require('robust-abs');
var estimate = require('robust-estimate-float');

var seq = split(-0.05);
console.log(seq); // [ -1.8626451769865326e-10, -0.049999999813735485 ]

var res = abs(seq);
console.log(res); // [ 1.8626451769865326e-10, 0.049999999813735485 ]

console.log(estimate(res)) // 0.05

```

# license

[MIT](LICENSE.txt)
