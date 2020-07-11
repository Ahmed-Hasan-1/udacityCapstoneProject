# Udacity capstone project - cloud developer nanodegree
##Overview
The purpose of the cloud developer capstone project is to give you a chance to combine what you've learned throughout the program. This project will be an important part of your portfolio that will help you achieve your Cloud-related career goals.

In this project, you will build a cloud-based application, and follow the principles of either the Microservices course (course 3) or the Serverless course (course 4). This will help you demonstrate to potential employers and colleagues that you can independently create and deploy applications using these principles.

## Installation
```bash
cd service
npm install
sls deploy -v
cd ../client
npm install
```

#### Running steps for the application
 
```bash
cd client
npm start
```

#### Build steps over AWS amplify 

```
npm install -g @aws-amplify/cli
amplify configure
```
For more information about the detailed building procedure followed backed up by videos and interactive tutorials follow the CI/CD pipeline creation steps mentioned in the following AWS tool documentation  
https://docs.amplify.aws/cli/start/install


#### Main building blocks 

AWS Lambdas (serverless architecture)
- Cognito (handles authentication)
- ReactJS
- WebApp Client
- AWS Amplify Client Framework
- Auth0
- Optimisations
- 3rd party OAuth integration
- Global Secondary Indexes on DynamoDB
- DynamoDB (nosql database)
- S3 Bucket (images storage)
- Individual packaging of Lambdas
- Serverless Framework


- Github url : https://github.com/Ahmed-Hasan-1/udacityCapstoneProject.git


