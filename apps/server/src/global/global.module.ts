import { Global, Module } from "@nestjs/common";

import { DB, DbProvider } from "./providers/db/db";

@Global()
@Module({
  providers: [DbProvider],
  exports: [DB],
})
export class GlobalModule {}
