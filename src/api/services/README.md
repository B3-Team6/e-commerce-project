## API SETUP DOCUMENTATION

## Aws

## connexion keys

NEXT_PUBLIC_REGION=eu-west-3
NEXT_PUBLIC_ACCESS_KEY_ID=AKIAUTTAKBTZYEYHCMEU
NEXT_PUBLIC_SECRET_ACCESS_KEY=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
NEXT_PUBLIC_BUCKET_NAME=bucketairneis

**Description:**
The `AwsService.js` file contains the implementation of the `AwsService` class. This class provides methods for interacting with the AWS S3 service. It allows uploading files to S3 and retrieving file streams from S3.

**Dependencies:**

- `aws-sdk` library

**Usage:**
The `AwsService` class provides the following methods:

### `uploadFile({ content, name, type })`

This method is used to upload a file to the AWS S3 bucket. It takes the following parameters:

- `content`: The content of the file to be uploaded.
- `name`: The name of the file.
- `type`: The content type of the file.

The method constructs the necessary parameters for the S3 upload operation and performs the upload using the configured AWS S3 client. If the upload is successful, it returns the URL of the uploaded file. If an error occurs during the upload, it returns an error message.

### `getFileStream({ fileKey })`

This method is used to retrieve a file stream from the AWS S3 bucket. It takes the following parameter:

- `fileKey`: The key of the file in the S3 bucket.

The method constructs the necessary parameters for retrieving the file from S3 and performs the retrieval using the configured AWS S3 client. If the retrieval is successful, it returns an object containing the file stream and the URL of the file. If an error occurs during the retrieval, it returns an error message.
