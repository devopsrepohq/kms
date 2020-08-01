#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { KmsStack } from '../lib/kms-stack';

const app = new cdk.App();
new KmsStack(app, 'KmsStack');
