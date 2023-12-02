import { registerAs } from "@nestjs/config";

import { env } from "@taskbounty-app/env";

export const DbConfig = registerAs("db", () => ({
  url: env.DATABASE_URL,
}));
