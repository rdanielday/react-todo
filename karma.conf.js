const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    // Cloud9 specific code:
<<<<<<< HEAD
    // hostname: process.env.IP,
    // port: process.env.PORT,
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/js/foundation.min.js',
      'app/tests/**/*.test.jsx',
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
=======
	    hostname: process.env.IP,
	    port: process.env.PORT,
		browsers: ['PhantomJS'],
		singleRun: true,
		frameworks: ['mocha'],
		files: [
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/foundation-sites/dist/js/foundation.min.js',
			'app/tests/**/*.test.jsx',
		],
		preprocessors: {
			'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
>>>>>>> 540f988e0991097319788c53295f999f20319fef
};
