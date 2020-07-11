// apiId can be found after running the service deployments using sls
const apiId = "4ymq1lh86l";
const region = "eu-west-2";
const stage = "dev";
export const apiEndpoint = `https://${apiId}.execute-api.${region}.amazonaws.com/${stage}`;

// Auth0 Configuration
export const authConfig = {
  domain: "dev-p88tp9yz.us.auth0.com", // Auth0 domain
  clientId: "RPGj18D1DMF0PDZKgXNABuHfzNrV7pDc", // Auth0 client id
  callbackUrl: "http://localhost:3000/callback"
};
