# KMS

Use this CDK stack to create an encryption key for the RDS database.

# What is it?

Create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications.

# Features

- [x] Deploy an encryption key for the RDS database.

# Prerequisites

You will need the following before utilize this CDK stack:

- [AWS CLI](https://cdkworkshop.com/15-prerequisites/100-awscli.html)
- [AWS Account and User](https://cdkworkshop.com/15-prerequisites/200-account.html)
- [Node.js](https://cdkworkshop.com/15-prerequisites/300-nodejs.html)
- [IDE for your programming language](https://cdkworkshop.com/15-prerequisites/400-ide.html)
- [AWS CDK Tookit](https://cdkworkshop.com/15-prerequisites/500-toolkit.html)
- [AWS Toolkit VSCode Extension](https://github.com/devopsrepohq/aws-toolkit)

# Stack Explain

## cdk.json

Define project-name and env context variables in cdk.json

```
{
  "context": {
    "project-name": "container",
    "env": "dev",
    "profile": "devopsrepo"
  }
}
```

## lib/kms-stack.ts

Create encryption key for RDS database

```
const kmsRds = new kms.Key(this, 'KmsRds', {
  alias: 'alias/rds-key',
  description: 'encryption key for RDS',
  enableKeyRotation: true,
  removalPolicy: cdk.RemovalPolicy.DESTROY
});
```

- alias - Define alias name for this encryption key.
- description - Define description for this encryption key.
- enableKeyRotation - Allow AWS KMS rotates the key.
- removalPolicy - Destroy this key when destroying this stack.

Deploy the stack to your aws account.

```
cdk deploy
or
cdk deploy --profile your_profile_name
```

# Use cases

Create and manage cryptographic keys such as rds encryption key for easy integration to a wide range of AWS services.

# Useful commands

## NPM commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests

## Toolkit commands

 * `cdk list (ls)`            Lists the stacks in the app
 * `cdk synthesize (synth)`   Synthesizes and prints the CloudFormation template for the specified stack(s)
 * `cdk bootstrap`            Deploys the CDK Toolkit stack, required to deploy stacks containing assets
 * `cdk deploy`               Deploys the specified stack(s)
 * `cdk deploy '*'`           Deploys all stacks at once
 * `cdk destroy`              Destroys the specified stack(s)
 * `cdk destroy '*'`          Destroys all stacks at once
 * `cdk diff`                 Compares the specified stack with the deployed stack or a local CloudFormation template
 * `cdk metadata`             Displays metadata about the specified stack
 * `cdk init`                 Creates a new CDK project in the current directory from a specified template
 * `cdk context`              Manages cached context values
 * `cdk docs (doc)`           Opens the CDK API reference in your browser
 * `cdk doctor`               Checks your CDK project for potential problems

 # Pricing

As this cdk stack will using AWS Key Management Service, please refer the following link for pricing

- [AWS Key Management Service pricing](https://aws.amazon.com/kms/pricing/)