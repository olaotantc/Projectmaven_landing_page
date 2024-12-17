import Image from "next/image"; // Importing Next.js Image component for optimized images
import Link from 'next/link'; // Importing Next.js Link component for navigation

export default function Header() {
    return (
        <header className="p-4 container mx-auto flex items-center justify-between">
            {/* Logo Image */}
            <div className="w-[150px] h-[40px] relative">
                <Image 
                    src={"/projectmaven-logo-ai-product-development.svg"} // Logo image source
                    fill="true" // Ensures the image fills the container
                    className="object-contain" // Keeps the image aspect ratio intact
                    alt="Projectmaven logo - AI-powered product development tools for accurate project estimation, scoping, and documentation" // Alt text for accessibility
                />
            </div>

            {/* Twitter Redirect */}
            <Link href={""}> {/* Provide the Twitter link here */}
                <Image 
                    src={"/twitter.svg"} // Twitter icon image source
                    width={30} // Set width for the Twitter icon
                    height={30} // Set height for the Twitter icon
                    className="object-contain" // Ensures the icon's aspect ratio is maintained
                    alt="Twitter icon - Follow us on Twitter" // Alt text for accessibility
                />
            </Link>
        </header>
    )
}
