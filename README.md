# postcss-adaptive-extra
A [postcss](https://www.npmjs.com/package/postcss) plugin that calculates and generates adaptive css code, such as `rem` and `0.5px borders for retina devices`.

Depend on [postcss-adaptive](https://github.com/songsiqi/postcss-adaptive) add add  extra options based on path.
## Usage

more to see [postcss-adaptive](https://github.com/songsiqi/postcss-adaptive).

### API

`adaptive-extra(config)`

Config: 

* `remUnit`: number, rem unit value (default: 75)
* `baseDpr`: number, base device pixel ratio (default: 2)
* `remPrecision`: number, rem value precision (default: 6)
* `hairlineClass`: string, class name of 1px border (default 'hairlines')
* `autoRem`: boolean, whether to transform to rem unit (default: false)
* `extra`:object, setting extra rules based on path

#### Node

```shell
npm install postcss-adaptive-extra
```

#### Webpack

```javascript
var adaptive = require('postcss-adaptive-extra');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function () {
    return [
      adaptive({
        remUnit: 75,
        autoRem:true,
        extra:{
          path:'node_modules\\antd-mobile',
          remUnit: 37.5
        }
      })
    ];
  }
}
```

## Changelog

### 1.0.0

* First release.

## License

MIT
