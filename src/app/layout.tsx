import type { Metadata } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AuthProviderWrapper } from "@/components/auth-provider-wrapper";

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "量佳膜官方电子质保",
  description: "量佳膜 | 汽车太阳膜、漆面保护膜、改色膜与电子质保系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSans.variable} ${inter.variable} bg-[#03070f] text-white antialiased`}
      >
        <AuthProviderWrapper>
          <SiteHeader />
          <main className="bg-[#03070f]">{children}</main>
          <SiteFooter />
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
