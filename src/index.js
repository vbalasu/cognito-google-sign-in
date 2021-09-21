function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var id_token = googleUser.getAuthResponse().id_token;
  console.log('id_token: ' + id_token);
  window.id_token = id_token;
  afterSignIn();
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}
async function afterSignIn() {
  const {CognitoIdentityClient} = require("@aws-sdk/client-cognito-identity");
  const {fromCognitoIdentityPool} = require("@aws-sdk/credential-provider-cognito-identity");
  const REGION = 'us-east-1';
  var credentials = new fromCognitoIdentityPool({
    client: new CognitoIdentityClient({region:REGION}),
    identityPoolId: 'us-east-1:bca7d5a3-1886-4529-975a-eba315dd5793', logins: {'accounts.google.com': window.id_token}});
  window.credentials = await credentials();

  const { S3Client, GetObjectCommand, HeadObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
  s3 = new S3Client({region: REGION, credentials: credentials});
  var bucket_name = 'profile.cloudmatica.com';
  var key = 'cognito/profile/' + window.credentials.identityId + '/member-since.txt';
  var input = {Bucket: bucket_name, Key: key};
  const headCommand = new HeadObjectCommand(input);
  try {
    response = await s3.send(headCommand);
    const command = new GetObjectCommand(input);
    response = await s3.send(command);
    data = await response.Body.getReader().read();
    stringdata = new TextDecoder().decode(data.value);
    console.log(stringdata);
  }
  catch (err) {
    console.log('key does not exist');
    if(err.$metadata.httpStatusCode == 403) {
      input.Body = new Date().toISOString();
      const putCommand = new PutObjectCommand(input);
      try {
        response = await s3.send(putCommand);
        console.log(input);
      }
      catch (err) {
        console.log(err);
      }
    }
  }
}

async function main() {
  // https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-browser-credentials-cognito.html
  window.onSignIn = onSignIn;
  window.signOut = signOut;
}
main();