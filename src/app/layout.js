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
  title: "Projectmaven | Accelerate Your Product Development",
  description:
    "Scope and estimate your projects accurately, streamline your workflow, and speed up your product development with AI-powered tools. Build faster with expert guidance.",
  metadataBase: new URL("https://projectmaven.vercel.app"),
  openGraph: {
    title: "Projectmaven | Accelerate Your Product Development",
    description:
      "Scope and estimate your projects accurately, streamline your workflow, and speed up your product development with AI-powered tools. Build faster with expert guidance.",
    url: siteUrl,
    siteName: "Projectmaven",
    images: [
      {
        url: `${siteUrl}/projectmaven.png`,
        width: 1200,
        height: 630,
        alt: "Projectmaven",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projectmaven | Accelerate Your Product Development",
    description:
      "Scope and estimate your projects accurately, streamline your workflow, and speed up your product development with AI-powered tools. Build faster with expert guidance.",
    images: [`${siteUrl}/projectmaven.png`],
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
