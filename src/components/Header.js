import Image from "next/image"; // Importing Image component
import Link from 'next/link'; // Importing Link component

export default function Header() {
    return (
        <header className="p-4 container mx-auto flex items-center justify-between">
            
            {/* Logo Image */}
            <div className="w-[150px] h-[40px] relative">
                <Image 
                    src={"/projectmaven-logo-ai-product-development.svg"}
                    fill="true"
                    className="object-contain"
                    alt="Projectmaven logo"
                />
            </div>

            {/* Twitter Redirect */}
            <Link href={""}> {/* Add the actual Twitter link */}
                <Image 
                    src={"/twitter.svg"}
                    width={30}
                    height={30}
                    className="object-contain"
                    alt="Twitter icon"
                />
            </Link>
        </header>
    )
}
