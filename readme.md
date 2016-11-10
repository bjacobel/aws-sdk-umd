## aws-sdk-umd

>## Note:
>The AWS SDK now natively supports being loaded with Webpack. [See this GitHub issue for more details](https://github.com/aws/aws-sdk-js/issues/603). This library is unmaintained, so if you use Webpack yourself I would suggest integrating `aws-sdk@^2.6.0` in your build directly rather than through this library.

Exports the [AWS SDK for Node.js](https://aws.amazon.com/sdk-for-node-js/) as a [UMD module](https://github.com/umdjs/umd). Drops the `fs` dependency so the Node version of the SDK can be used in the browser (or in React Native).

#### Use it
```
npm install --save aws-sdk-umd
```

```
// ES6 modules
import AWS from 'aws-sdk-umd';

// CommonJS modules
var AWS = require('aws-sdk-umd');

// AMD
require(['aws-sdk-umd'], function(AWS) {
```


#### Build it locally
```
npm install
npm run build
```

The library will be built and output in `dist/aws-sdk-umd.js`.

If you want a build that only contains certain services:

```
AWS_SERVICES=s3,dynamodb npm run build
```


#### Thanks
Thanks to [Francois Ward](https://github.com/phoenixmatrix) for getting me started and [Chris Radek](https://github.com/chrisradek) for [this post demoing the Webpack configuration](https://github.com/aws/aws-sdk-js/issues/603#issuecomment-212479600).


#### License
MIT
