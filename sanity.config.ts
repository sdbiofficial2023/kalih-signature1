"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from "@/lib/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "kalih-signature",
  title: "Kalih Signature",
  basePath: "/studio",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
