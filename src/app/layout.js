export const runtime = "edge";

export const viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";

const defaultFont = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Felicia's Homepage",
  description: "Portfolio for Felicia's works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light:bg-white dark:bg-black">
      <body className={defaultFont.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
