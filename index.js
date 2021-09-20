let AWS = require('aws-sdk')
AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-1:bca7d5a3-1886-4529-975a-eba315dd5793'});
dynamodb = new AWS.DynamoDB();
