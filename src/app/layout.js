import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
});

export const metadata = {
  title: "Pricemaven | Accelerate Your Product Development",
  description: "Scope and estimate your projects accurately, streamline your workflow, and speed up your product development with AI-powered tools. Build faster with expert guidance.",
  keywords: "AI-powered product development, project estimation, product ideation, cost estimation, project scoping, product documentation, project management tools",
  author: "Pricemaven",
  openGraph: {
    title: "Pricemaven | Accelerate Your Product Development",
    description: "Streamline your product development with AI-powered tools for project estimation, scoping, and documentation.",
    url: "https://www.pricemaven.com",
    type: "website",
    image: "/path/to/your-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
    title: "Pricemaven | Accelerate Your Product Development",
    description: "AI-powered product development tools to streamline project estimation, scoping, and documentation.",
    image: "/path/to/your-image.jpg",
  },
  favicon: "/favicon.ico",
  canonical: "https://www.pricemaven.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased font-roboto bg-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
