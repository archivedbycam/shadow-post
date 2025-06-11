import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <header className="w-full bg-[#ffffff] border-b border-[#dedede]">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center z-10">
          <Link href="/" className="text-[#000000] text-xl font-semibold">
            ShadowPost
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            href="/"
            className="px-4 py-2 text-[#000000] bg-[#dedede] rounded-full text-sm font-medium transition-colors hover:bg-[#cacaca]"
          >
            Home
          </Link>
          <Link
            href="/resources"
            className="px-4 py-2 text-[#515151] rounded-full text-sm font-medium transition-colors hover:bg-[#dedede]"
          >
            Resources
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2 text-[#515151] rounded-full text-sm font-medium transition-colors hover:bg-[#dedede]"
          >
            Pricing
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3 z-10">
          <Link href="/signin">
            <Button variant="ghost" className="text-[#000000] hover:bg-[#dedede] font-medium cursor-pointer">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#000000] text-[#ffffff] hover:opacity-80 rounded-full px-6 font-medium cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
