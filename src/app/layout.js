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
export const metadata = {
  title: "Projectmaven | Accelerate Your Product Development", // Title of the webpage
  description:
    "Scope and estimate your projects accurately, streamline your workflow, and speed up your product development with AI-powered tools. Build faster with expert guidance.", // Description for SEO
  keywords:
    "AI-powered product development, project estimation, product ideation, cost estimation, project scoping, product documentation, project management tools", // Keywords for search engines
  author: "Projectmaven", // Author of the page
  openGraph: {
    // OpenGraph metadata for social media sharing (Facebook, LinkedIn, etc.)
    title: "Projectmaven | Accelerate Your Product Development", // OpenGraph title
    description:
      "Streamline your product development with AI-powered tools for project estimation, scoping, and documentation.", // OpenGraph description
    url: "https://www.projectmaven.com", // Website URL for OpenGraph
    type: "website", // Type of content being shared
    image: "/path/to/your-image.jpg", // OpenGraph image (replace with actual image path)
  },
  twitter: {
    // Twitter Card metadata for sharing on Twitter
    card: "summary_large_image", // Type of Twitter Card (summary with a large image)
    creator: "@yourhandle", // Twitter handle of the creator
    title: "Projectmaven | Accelerate Your Product Development", // Twitter card title
    description:
      "AI-powered product development tools to streamline project estimation, scoping, and documentation.", // Twitter card description
    image: "/path/to/your-image.jpg", // Image to display on Twitter (replace with actual image path)
  },
  favicon: "/favicon.ico", // Favicon for the website
  canonical: "https://www.projectmaven.com", // Canonical URL to avoid duplicate content issues
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
