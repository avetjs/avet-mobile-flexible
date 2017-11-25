exports.mobileFlexible = {
  baseDpr: 2, // base device pixel ratio (default: 2)
  remUnit: 75, // rem unit value (default: 75)
  remPrecision: 6, // rem value precision (default: 6)
  hairlineClass: 'hairlines', // class name of 1px border (default: 'hairlines')
  autoRem: true, // whether to transform to rem unit (default: false)
  pageCenter: true,
};

exports.styledJsx = {
  postcss: {
    plugins: {
      'postcss-adaptive': config => {
        const {
          baseDpr,
          remUnit,
          remPrecision,
          hairlineClass,
          autoRem,
        } = config.mobileFlexible;

        return require('postcss-adaptive')({
          baseDpr,
          remUnit,
          remPrecision,
          hairlineClass,
          autoRem,
        });
      },
    },
  },
};
