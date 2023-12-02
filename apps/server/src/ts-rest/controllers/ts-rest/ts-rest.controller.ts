import { TsRestService } from "@/ts-rest/services/ts-rest/ts-rest.service";
import { Controller } from "@nestjs/common";
import { TsRestHandler } from "@ts-rest/nest";

import { contract } from "@taskbounty-app/api";

@Controller("notes")
export class TsRestController {
  constructor(private readonly service: TsRestService) {}

  @TsRestHandler(contract.getPosts)
  async getPosts() {
    const allPosts = await this.service.getAll();
    return { posts: allPosts };
  }
}
