
# S3 Bucket -> Lambda (RSVG Convert SVG to PDF) -> S3 Bucket

## Description

This is a serverless component that takes uploaded SVG files from one S3 Bucket, converts them to PDF and uploads to another S3 Bucket. It contains:

- an Input S3 Bucket that accepts SVG files.

- a Lambda that takes the SVG file from the Input S3 bucket, converts it the file to a PDF and uploads it to the Output bucket

- an Output S3 Bucket that receives PDF files.

## Deployment Parameters

This component has one CloudFormation deployment parameter:

- `ConversionTimeout`, an optional parameter, represents the timeout of the Conversion Lambda function. By default its 60 seconds.

## Latest Release - 1.1.0

- Added InputBucketName and OutputBucketName as parameters

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests