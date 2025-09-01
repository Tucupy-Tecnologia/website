import { uploadthingRouter } from "@/lib/uploadthing-router";
import { createRouteHandler } from "uploadthing/next";

export const { GET, POST } = createRouteHandler({
  router: uploadthingRouter,
});
