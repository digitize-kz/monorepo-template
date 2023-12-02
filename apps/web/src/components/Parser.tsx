"use client";

import type { FC } from "react";
import { client } from "src/utils/ts-rest.client";

export const Parser: FC = () => {
  const { data } = client.getPosts.useQuery(["posts"]);
  return <>{JSON.stringify(data)}</>;
};
