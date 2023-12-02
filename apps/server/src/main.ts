import { NestFactory } from "@nestjs/core";
import { SwaggerModule } from "@nestjs/swagger";
import { generateOpenApi } from "@ts-rest/open-api";

import { contract } from "@taskbounty-app/api";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const document = generateOpenApi(
    contract,
    {
      info: {
        title: "Posts API",
        version: "1.0.0",
      },
    },
    {
      setOperationId: true,
      jsonQuery: true,
    },
  );
  SwaggerModule.setup("docs", app, document);

  //                   ^ Path for swagger
  await app.listen(process.env.NEST_PORT || 4000);
}
bootstrap();
