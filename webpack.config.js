// If you want a build that only contains certain services, uncomment the next line
// process.env.AWS_SERVICES = 's3,dynamodb';
module.exports = {
  entry: './index.js',
  output: {
    library: 'aws-sdk-umd',
    libraryTarget: 'umd',
    path: 'dist',
    filename: 'aws-sdk-umd.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /aws-sdk/,
        loaders: [
          'transform?aws-sdk/dist-tools/transform'
        ]
      },
      {
        test: /\.json$/, loaders: ['json']
      }
    ]
  }
};
