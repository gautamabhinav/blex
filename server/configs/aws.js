// server/configs/aws.js
import { config, S3, SES, DynamoDB } from "aws-sdk";
require("dotenv").config();

// Configure AWS
config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "us-east-1",
});

// Export AWS services you need
const s3 = new S3();
const ses = new SES();
const dynamoDB = new DynamoDB.DocumentClient();

export default {
  AWS,
  s3,
  ses,
  dynamoDB,
};
