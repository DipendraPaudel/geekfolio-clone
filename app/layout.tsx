import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@portfolio/components/Providers";
import "@fontsource-variable/sora";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeekFolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
