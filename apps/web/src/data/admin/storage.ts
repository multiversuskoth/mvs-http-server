import { parse } from "node:path";
import { env } from "@mvsi/env";
import {
  type AdapterConfig,
  Provider,
  Storage,
} from "@tweedegolf/storage-abstraction";
export interface AdapterConfigAmazonS3 extends AdapterConfig {
  region?: string;
  endpoint?: string;
  credentials?: {
    accessKeyId?: string;
    secretAccessKey?: string;
  };
  provider: string;
  forcePathStyle: boolean;
}

export const storageClient = new Storage({
  region: env.STORAGE_REGION,
  endpoint: env.STORAGE_ENDPOINT,
  credentials: {
    accessKeyId: env.STORAGE_ACCESS_KEY,
    secretAccessKey: env.STORAGE_SECRET_KEY,
  },
  provider: Provider.S3,
  bucketName: env.STORAGE_BUCKET_NAME,
  forcePathStyle: true,
} as AdapterConfigAmazonS3);

export async function getFileUploadUrl(fileName: string, maxSize = 200) {
  const file = parse(fileName);
  const uniqueKey = `${file.name}-${Date.now()}${file.ext}`;
  const result = await storageClient.getPresignedUploadURL(
    env.STORAGE_BUCKET_NAME!,
    uniqueKey,
    {
      conditions: [
        ["content-length-range", 1, maxSize * 1024 * 1024],
        { "x-amz-server-side-encryption": "AES256" },
      ],
      fields: {
        "x-amz-server-side-encryption": "AES256",
      },
      expiresIn: 1200,
    },
  );
  return result;
}
