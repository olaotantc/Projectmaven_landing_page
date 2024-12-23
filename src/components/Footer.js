"use client";
import Image from "next/image"; // Importing Image component
import Input from "./Input"; // Importing custom Input component
import TextAccent from "./TextAccent"; // Importing TextAccent component for styling
import { socialMedias } from "@/data/footerData"; // Importing social media data
import Link from "next/link"; // Importing Link component for navigation
import { ModalProvider } from "@/context/ModalContext"; // Importing ModalProvider
import Confetti from "./Confetti"; // Importing Confetti component
import EmailModal from "./EmailModal"; // Importing EmailModal component

// Footer component
export default function Footer() {
  return (
    <ModalProvider>
      <Confetti />
      <EmailModal />
      <div className="bg-footer h-full mt-8 px-5 md:px-0">
        <div className="container mx-auto py-24 md:py-auto md:p-24 text-center grid place-items-center">
          
          {/* Logo Section */}
          <div className="w-[129px] h-[39px] relative">
            <Image
              src={"/projectmaven-logo-ai-product-development.svg"}
              fill="true"
              className="object-contain"
              alt="Projectmaven logo"
            />
          </div>

          {/* Subscription Message */}
          <p className="mb-6 mt-4">
            Subscribe to receive updates and be first on our Beta list
          </p>

          {/* Subscription Form */}
          <Input
            btnText={"Subscribe"}
            small={true}
            subText={
              <span className="mt-3 text-center">
                By subscribing, you agree to our Privacy Policy and consent to
                receive <br /> updates from our company.
              </span>
            }
          />

          {/* Social Media Links */}
          <h5 className="font-bold mt-8">Follow Us</h5>
          <div className="flex items-center justify-center gap-3 mt-5">
            {socialMedias.map((item) => (
              <Link key={item.id} href={item.url}>
                {item.icon}
              </Link>
            ))}
          </div>

          {/* Footer Copyright */}
          <p className="mt-12">
            © Copyright 2024, All Rights Reserved by &nbsp;
            <TextAccent>Projectmaven</TextAccent>
          </p>
        </div>
      </div>
    </ModalProvider>
  );
}
