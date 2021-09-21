function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var id_token = googleUser.getAuthResponse().id_token;
  console.log('id_token: ' + id_token);
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

async function main() {
  // https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/loading-browser-credentials-cognito.html
  window.onSignIn = onSignIn;
  window.signOut = signOut;
  let { DynamoDBClient, ListTablesCommand } = require('@aws-sdk/client-dynamodb');
  const {CognitoIdentityClient} = require("@aws-sdk/client-cognito-identity");
  const {fromCognitoIdentityPool} = require("@aws-sdk/credential-provider-cognito-identity");
  const REGION = 'us-east-1';
  const credentials = fromCognitoIdentityPool({
    client: new CognitoIdentityClient({region:REGION}),
    identityPoolId: 'us-east-1:bca7d5a3-1886-4529-975a-eba315dd5793'});
  const dynamodb = new DynamoDBClient({region: REGION, credentials: credentials});
  let params = {};
  const command = new ListTablesCommand(params);
  let data = await dynamodb.send(command);
  console.log(data.TableNames);
}
main();