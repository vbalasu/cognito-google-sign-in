async function main() {
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