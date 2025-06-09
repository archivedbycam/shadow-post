import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        {/* Logo/Icon */}
        <div className="mb-4">
          <Image
            src="/images/shadowpost_logo_final.png"
            alt="ShadowPost Logo"
            width={454}
            height={454}
            className="w-[227px] h-[227px] opacity-60"
            priority
          />
        </div>

        {/* Main heading */}
        <h1
          className={`text-[128px] font-medium text-[#000000] mb-6 text-center leading-none ${inter.className}`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          ShadowPost
        </h1>

        {/* Tagline */}
        <p
          className={`text-[32px] font-medium text-[#000000] mb-12 text-center leading-none ${inter.className}`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Schedule It. Save it. See it
        </p>

        {/* Get Started button */}
        <Button className="bg-[#000000] hover:bg-[#121212] text-white px-8 py-3 text-lg rounded-lg mb-16" size="lg">
          Get Started
        </Button>

        {/* Footer links */}
        <div className="flex text-[#8f8b8b]">
          <Link href="#" className="underline hover:text-[#515151] transition-colors mr-2">
            Leave Feedback
          </Link>
          <span> </span>
          <Link href="#" className="underline hover:text-[#515151] transition-colors">
            See FAQ
          </Link>
        </div>
      </div>

      {/* Bottom gray section */}
      <div className="h-64 bg-[#dedede] w-full"></div>
    </div>
  )
}
