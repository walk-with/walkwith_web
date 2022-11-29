"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { Header } from "../src/components/main/Header";
import { queryClient } from "../src/react-query/queryClient";

interface MainLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: MainLayoutProps): ReactNode {
  return (
    <html lang="en">
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
