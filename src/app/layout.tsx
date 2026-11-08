import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-seven-bice-56.vercel.app"),
  title: `${site.name} — ${site.role}`,
  description: site.promise,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.promise,
    url: "https://portfolio-seven-bice-56.vercel.app",
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/assets/cloud-retail-ui.jpg",
        width: 1920,
        height: 1080,
        alt: `${site.name} — Engineering Systems Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.promise,
    images: ["/assets/cloud-retail-ui.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
