# cognito-google-sign-in

Use this boilerplate to quickly get up and running with Google Sign In plus Cognito access to AWS services

* Webpack configuration and dev server
* Use Google Sign In to login a user
* Tie the Google user to a Cognito identity pool
* IAM roles for Cognito Unauthenticated and Authenticated users
* Use AWS Javascript SDK v3 to access S3
* Example uses profile.cloudmatica.com as the S3 bucket, which is set up with CORS and a Cloudfront distribution
* Deployment script to publish outputs to [https://profile.cloudmatica.com](https://profile.cloudmatica.com)

---

### Additional Links
[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)

[Troublshooting Webpack Dev Server](https://stackoverflow.com/questions/49857724/webpack-dev-server-cannot-get)

[Configure Google Sign In with Cognito Identity Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/google.html)

[AWS SDK for Javascript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)

[Running AWS SDK in the browser](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html)

[Configuring federated sign in](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html?icmpid=docs_iam_console)

[Configuring CORS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManageCorsUsing.html)

[Converting byte array to string in Javascript](https://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript)

[S3 - how to check if a file exists in a bucket](https://stackoverflow.com/questions/41871948/aws-s3-how-to-check-if-a-file-exists-in-a-bucket-using-bash)

[AWS Cognito: Difference between Cognito ID and sub, what should I use as primary key?](https://stackoverflow.com/questions/42645932/aws-cognito-difference-between-cognito-id-and-sub-what-should-i-use-as-primary)

[Amazon S3: Allows Amazon Cognito users to access objects in their bucket](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_cognito-bucket.html)