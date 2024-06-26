import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";

const notoSans = Noto_Sans({
  weight: ["400", "700"], // Specify the font weights you need
  subsets: ["latin"], // Specify the subsets you need
  display: "swap", // Optional: 'swap', 'block', 'fallback', 'optional'
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
