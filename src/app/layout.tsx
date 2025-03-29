"use client";

import { Figtree } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/store";
import { DashboardWrapper } from "@/components";

import "./globals.css";

const figtreeSans = Figtree({
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtreeSans.variable}>
        <Provider store={store}>
          <DashboardWrapper>{children}</DashboardWrapper>
        </Provider>
      </body>
    </html>
  );
}
