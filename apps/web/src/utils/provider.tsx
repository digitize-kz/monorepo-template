"use client";

import { useState } from "react";
import type { FC, ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  const [client] = useState(new QueryClient());

  return (
    <ClerkProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </ClerkProvider>
  );
};

export default Providers;
