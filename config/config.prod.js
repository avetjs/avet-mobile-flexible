'use strict';

exports.build = {
  webpack: {
    resolve: {
      alias: {
        'react': require.resolve('preact-compat/dist/preact-compat'),
        'react-dom': require.resolve('preact-compat/dist/preact-compat')
      }
    }
  }
}
