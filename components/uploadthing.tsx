import { UploadthingRouter } from "@/lib/uploadthing-router";
import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers,
} from "@uploadthing/react";

export const UploadButton = generateUploadButton<UploadthingRouter>();
export const UploadDropzone = generateUploadDropzone<UploadthingRouter>();
export const { useUploadThing } = generateReactHelpers<UploadthingRouter>();
