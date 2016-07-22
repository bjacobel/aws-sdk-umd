var AWS = require('aws-sdk');

// Because we build with Webpack, the AWS SDK wants to use its browser_parser, which depends on window.DOMParser
// Export the node_parser, so people can override this behavior if their env doesn't have a native DOMParser (like React Native)
AWS.NodeParser = require('aws-sdk/lib/xml/node_parser');

module.exports = AWS;
