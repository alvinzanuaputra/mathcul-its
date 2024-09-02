import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathcul. Game genre battle mobile terbaik!",
  description: "Mathcul. Game genre battle mobile terbaik!",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className} id="__next">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}