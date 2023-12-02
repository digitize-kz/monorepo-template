import { initQueryClient } from "@ts-rest/react-query";
import type { InitClientReturn } from "@ts-rest/react-query";

import { contract } from "@taskbounty-app/api";

export const client: InitClientReturn<
  typeof contract,
  { baseUrl: string; baseHeaders: Record<string, string> }
> = initQueryClient(contract, {
  baseUrl: "http://localhost:3003",
  // TODO: add headers from clerk?
  baseHeaders: {},
  //   api?: () => ... // <- Optional Custom API Fetcher (see below)
});
