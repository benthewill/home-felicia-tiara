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
import ScrollContainer from "@/components/ScrollContainer";

const defaultFont = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Felicia's Homepage",
  description: "Portfolio for Felicia's works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-300 dark:bg-black">
      <body className={`${defaultFont.className}`}>
        <Providers>
          <ScrollContainer>
            <NavBar />
            {children}
          </ScrollContainer>
        </Providers>
      </body>
    </html>
  );
}
