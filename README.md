# robust-abs

Math.abs for non-overlapping increasing sequences

# install

`npm install robust-abs`

# use

You'll want to have a non-overlapping increasing sequence that came
from one of the [robust family of packages](http://npmsearch.com/?q=keywords:robust).

For example's sake we'll simulate that here by using [`robust-split`](https://github.com/tmpvar/robust-split)

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
