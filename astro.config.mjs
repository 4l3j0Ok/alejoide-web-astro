// @ts-check
import { defineConfig, envField } from 'astro/config';

import icon from "astro-icon";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://alejoide.com",
  integrations: [icon(), react()],

  env: {
    schema: {
      SEND_EMAIL_FROM: envField.string({ context: "server", access: "secret" }),
      SEND_EMAIL_TO: envField.string({ context: "server", access: "secret" }),
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      GOOGLE_ANALYTICS_TAG: envField.string({ context: "client", access: "public" }),
    }
  },

  output: "server",

  adapter: node({
    mode: "standalone"
  })
});