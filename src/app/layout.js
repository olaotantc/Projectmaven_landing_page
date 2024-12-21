import { Roboto, Inter } from "next/font/google"; // Importing Google Fonts for Roboto and Inter
import "./globals.css"; // Importing global CSS for styling
import Header from "@/components/Header"; // Importing the Header component
import Footer from "@/components/Footer"; // Importing the Footer component

// Defining Roboto font with specific weights and subsets
const roboto = Roboto({
  subsets: ["latin"], // Only using Latin subset
  variable: "--font-roboto", // CSS variable for font
  weight: ["400", "500", "700", "900"], // Available font weights for Roboto
});

// Defining Inter font with specific weights and subsets
const inter = Inter({
  subsets: ["latin"], // Only using Latin subset
  variable: "--font-inter", // CSS variable for font
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Available font weights for Inter
});

// Metadata for the page to enhance SEO and social sharing

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
    url: siteUrl, // Absolute URL for the site
    siteName: "Projectmaven",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/projectmaven.png?v=1`, // Absolute URL with cache-busting parameter
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
    images: [`${siteUrl}/projectmaven.png?v=1`], // Absolute URL with cache-busting parameter
  },
  other: {
    "og:image": `${siteUrl}/projectmaven.png?v=1`, // Absolute URL
    "og:image:secure_url": `${siteUrl}/projectmaven.png?v=1`, // Secure URL
  },
};

// RootLayout component to wrap the entire page
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      {/* Set language to English and make the html full height */}
      <body
        className={`${roboto.variable} ${inter.variable}  antialiased font-roboto bg-white`}
      >
          {/* Apply fonts and styles globally */}
          <Header /> {/* Header component at the top of the page */}
          {children} {/* The main content passed as children to the layout */}
          <Footer /> {/* Footer component at the bottom of the page */}
      </body>
    </html>
  );
}
