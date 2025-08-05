import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderClient } from "@/components/header-client";
import { ThemeProvider } from "@/components/theme-provider";
import { LocalizationProvider } from "@/components/localization-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jesús Valencia - Project Manager",
  description: "Landing page personal y portafolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocalizationProvider>
            <HeaderClient />
            {children}
          </LocalizationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}