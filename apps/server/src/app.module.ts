import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DbConfig } from "./config";
import { GlobalModule } from "./global/global.module";
import { TsRestModule } from "./ts-rest/ts-rest.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DbConfig],
    }),
    TsRestModule,
    GlobalModule,
  ],
})
export class AppModule {}
