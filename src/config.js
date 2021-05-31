const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-darryl",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ze12e49mq0.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_nCzScS6x2",
      APP_CLIENT_ID: "72tjus15gcgg81ign84kndevmk",
      IDENTITY_POOL_ID: "us-east-1:2229a9c0-de71-4e86-801c-5131e4065a8d",
    },
  };
  
  export default config;