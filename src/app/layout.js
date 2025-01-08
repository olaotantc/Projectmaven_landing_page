import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Define Roboto font configuration
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});

// Define Inter font configuration
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for SEO and social sharing
const siteUrl = "https://projectmaven.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Projectmaven | Accelerate Your Product Development",
  description:
    "Projectmaven empowers teams and businesses to scope and estimate projects accurately with AI-powered tools. Streamline workflows, enhance collaboration, and boost productivity. Whether you are a startup or an enterprise, Projectmaven is designed to make product development faster, smarter, and more efficient with expert guidance and cutting-edge solutions.",
  keywords:
    "Projectmaven, AI-powered tools, product development, project estimation, workflow automation, team collaboration, productivity tools, faster development, expert guidance, startup tools, enterprise solutions",
  openGraph: {
    title: "Projectmaven | Accelerate Your Product Development",
    description:
      "Projectmaven empowers teams and businesses to scope and estimate projects accurately with AI-powered tools. Streamline workflows, enhance collaboration, and boost productivity. Whether you are a startup or an enterprise, Projectmaven is designed to make product development faster, smarter, and more efficient with expert guidance and cutting-edge solutions.",
    url: siteUrl,
    siteName: "Projectmaven",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/projectmaven.png?v=1`,
        width: 1200,
        height: 630,
        alt: "Projectmaven Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projectmaven | Accelerate Your Product Development",
    description:
      "Projectmaven empowers teams and businesses to scope and estimate projects accurately with AI-powered tools. Streamline workflows, enhance collaboration, and boost productivity. Whether you are a startup or an enterprise, Projectmaven is designed to make product development faster, smarter, and more efficient with expert guidance and cutting-edge solutions.",
    images: [`${siteUrl}/projectmaven.png?v=1`],
  },
  other: {
    "og:image": `${siteUrl}/projectmaven.png?v=1`,
    "og:image:secure_url": `${siteUrl}/projectmaven.png?v=1`,
    "og:image:alt": "Projectmaven Preview", // Added alt text for og:image
  },
  icon: `${siteUrl}/projectmaven-tab-icon.png?v=1`, // Added tab icon
  // Favicon added for compatibility with different browsers
  favicon: `${siteUrl}/favicon.ico?v=1`, // Adding favicon link
};

// RootLayout component for wrapping the page structure
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${roboto.variable} ${inter.variable} antialiased font-roboto bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
