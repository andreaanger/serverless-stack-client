const dev = {
  STRIPE_KEY: "pk_test_Tt0HxUoTrPxH47IlVvAFMMZa00Y47f3IVp",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1l0qd0f3rcfdn"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.andreatests.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ahW6WYV85",
    APP_CLIENT_ID: "34ng7o80t7dh82mochft9gcu4g",
    IDENTITY_POOL_ID: "us-east-1:3dc5cacb-7771-4d8a-b32e-56d38d22ae14"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_Tt0HxUoTrPxH47IlVvAFMMZa00Y47f3IVp",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1uk2p7c08so7j"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.andreatests.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_hFzCHNi1x",
    APP_CLIENT_ID: "2s2v2gqvgpcf5le6j9rhmsvc8j",
    IDENTITY_POOL_ID: "us-east-1:a0998aa3-0195-4432-ab78-3f05dba89685"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};