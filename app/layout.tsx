"use client";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../src/react-query/queryClient";
import "../styles/globals.css";

dayjs.locale("ko");

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
