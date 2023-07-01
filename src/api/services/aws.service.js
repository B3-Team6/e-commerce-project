import * as AWS from "aws-sdk"

const REGION = process.env.NEXT_PUBLIC_REGION
const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
const BUCKET_NAME = process.env.NEXT_PUBLIC_BUCKET_NAME

export class AwsService {
  constructor() {
    this.s3 = new AWS.S3({
      region: REGION,
      credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
      },
    })
  }

  async uploadFile({ content, name, type }) {
    const params = {
      Bucket: BUCKET_NAME,
      Key: name,
      Body: content,
      ContentType: type,
    }

    await this.s3
      .upload(params, (err, data) => {
        if (err) {
          return "Error uploading file:", err
        } else {
          return `File uploaded successfully. ${data.Location}`
        }
      })
      .promise()

    return {
      url: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${name}`,
    }
  }

  async getFileStream({ fileKey }) {
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileKey,
    }

    try {
      const data = await this.s3.getObject(params).promise()

      return {
        file: data.Body,
        url: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileKey}`,
      }
    } catch (error) {
      return "Error retrieving file:", error
    }
  }
}
