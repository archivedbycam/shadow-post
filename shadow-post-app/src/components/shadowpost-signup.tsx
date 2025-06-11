import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 cursor-pointer" aria-label="Go to home">
            <Image
              src="/images/shadowpost_sphere.png"
              alt="ShadowPost Logo"
              width={42}
              height={42}
              className="w-[42px] h-[42px] rounded-full"
              priority
            />
            <span className="text-lg font-semibold text-[#000000]">ShadowPost</span>
          </Link>
        </div>
        <div className="text-sm text-[#475467]">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#000000] font-medium hover:underline">
            Log in
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[#000000]">Create an account</h1>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-[#344054]">
                Name*
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="h-11 border-[#d0d5dd] bg-white text-[#101828] placeholder:text-[#667085] focus:border-[#000000] focus:ring-[#000000]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#344054]">
                Email*
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-11 border-[#d0d5dd] bg-white text-[#101828] placeholder:text-[#667085] focus:border-[#000000] focus:ring-[#000000]"
              />
            </div>

            <Button type="submit" className="w-full h-11 bg-[#000000] text-white hover:bg-[#101828] font-medium">
              Get started
            </Button>
          </form>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center gap-2 mt-16">
          <div className="w-2 h-2 bg-[#000000] rounded-full"></div>
          <div className="w-2 h-2 bg-[#d0d5dd] rounded-full"></div>
          <div className="w-2 h-2 bg-[#d0d5dd] rounded-full"></div>
        </div>
      </main>
    </div>
  )
}
