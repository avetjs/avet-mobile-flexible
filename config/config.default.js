exports.mobileFlexible = {
  baseDpr: 2, // base device pixel ratio (default: 2)
  remUnit: 75, // rem unit value (default: 75)
  remPrecision: 6, // rem value precision (default: 6)
  hairlineClass: 'hairlines', // class name of 1px border (default: 'hairlines')
  autoRem: true, // whether to transform to rem unit (default: false)
};

exports.styledJsx = {
  postcss: {
    plugins: {
      'postcss-adaptive': config =>
        require('postcss-adaptive')(config.mobileFlexible),
    },
  },
};
