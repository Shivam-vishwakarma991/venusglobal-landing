import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venus Global Trading Ltd. — Consumer Electronics Distributor | Hong Kong",
  description:
    "Venus Global is a Hong Kong-registered B2B consumer electronics distributor. Serving resellers and distributors across Asia, Middle East & Americas. Get distributor pricing on 30+ top brands.",
  keywords:
    "consumer electronics distributor, Hong Kong electronics wholesale, B2B electronics supplier, Apple reseller, Samsung distributor, electronics sourcing Asia",
  openGraph: {
    title: "Venus Global Trading — Your Trusted Electronics Sourcing Partner",
    description:
      "15+ years of global electronics distribution. 30+ premium brands. Serving 50+ countries. Competitive distributor pricing for resellers & B2B buyers.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_128x128.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
