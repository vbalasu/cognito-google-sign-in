# cognito-google-sign-in

Use this boilerplate to quickly get up and running with Google Sign In plus Cognito access to AWS services

* Webpack configuration and dev server
* Use Google Sign In to login a user
* Tie the Google user to a Cognito identity pool
* IAM roles for Cognito Unauthenticated and Authenticated users
* Use AWS Javascript SDK v3 to access S3
* Example uses profile.cloudmatica.com as the S3 bucket, which is set up with CORS and a Cloudfront distribution
* Deployment script to publish outputs to [https://profile.cloudmatica.com](https://profile.cloudmatica.com)