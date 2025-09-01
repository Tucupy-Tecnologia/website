import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const uploadthingRouter = {
  cvUploader: f([
    "image",
    "application/pdf",
    "pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.apple.pages",
  ]).onUploadComplete(async ({ metadata, file }) => {
    return { file_url: file.url };
  }),
} satisfies FileRouter;

export type UploadthingRouter = typeof uploadthingRouter;
