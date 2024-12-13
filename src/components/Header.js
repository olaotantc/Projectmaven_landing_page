import Image from "next/image";
import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4  container mx-auto flex items-center justify-between">
            {/* Logo Image */}
            <div className="w-[146px] h-[39px]    relative">
                <Image src={"/pricemaven-logo-ai-product-development.avif"} fill="true" className="object-contain" alt="Pricemaven logo - AI-powered product development tools for accurate project estimation, scoping, and documentation" />
            </div>
            {/* Twitter Redirect */}
            <Link className="" href={""}>
                <Image src={"/twitter.svg"} width={30} height={30} className="object-contain" alt="Pricemaven logo - AI-powered product development tools for accurate project estimation, scoping, and documentation" />
            </Link>
        </header>
    )
}
