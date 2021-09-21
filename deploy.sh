export AWS_PROFILE=vbalasu_admin
aws s3 cp --acl public-read dist/index.html s3://profile.cloudmatica.com/index.html
aws s3 cp --acl public-read dist/bundle.js s3://profile.cloudmatica.com/bundle.js
aws cloudfront create-invalidation --distribution-id E13JVZRHUQ53AU --paths "/index.html" "/bundle.js"
