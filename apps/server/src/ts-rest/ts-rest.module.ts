import { Module } from "@nestjs/common";

import { TsRestController } from "./controllers/ts-rest/ts-rest.controller";
import { TsRestService } from "./services/ts-rest/ts-rest.service";

@Module({
  controllers: [TsRestController],
  providers: [TsRestService],
})
export class TsRestModule {}
