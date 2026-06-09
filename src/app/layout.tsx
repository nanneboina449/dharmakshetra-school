import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://dharmakshetraschools.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dharmakshetra International School | A Place of Righteousness",
    template: "%s | Dharmakshetra International School",
  },
  description:
    "A leading CBSE school in Machilipatnam, Andhra Pradesh. Dharmakshetra International School blends tradition with innovation — nurturing values, curiosity and confidence from Nursery to Class 7.",
  keywords: [
    "Dharmakshetra International School",
    "CBSE school Machilipatnam",
    "best school Machilipatnam",
    "school admissions Andhra Pradesh",
    "value based education",
    "Nursery to Class 7",
  ],
  authors: [{ name: "Dharmakshetra International School" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Dharmakshetra International School",
    title: "Dharmakshetra International School | A Place of Righteousness",
    description:
      "Building responsible citizens for a better tomorrow. A leading CBSE school in Machilipatnam offering value-based, future-ready education.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharmakshetra International School",
    description:
      "A leading CBSE school in Machilipatnam — value-based, future-ready education from Nursery to Class 7.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
