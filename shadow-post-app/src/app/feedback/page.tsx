"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function FeedbackPage() {
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim()) {
      toast.error("Please enter a message")
      return
    }

    setIsLoading(true)

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() }),
      })

      if (response.ok) {
        toast.success("Thank you for your feedback!")
        setMessage("")
        // Optionally redirect back to home or previous page
        router.push('/')
      } else {
        const errorData = await response.json()
        toast.error(errorData.message || "Failed to send feedback")
      }
    } catch (error) {
      console.error('Feedback submission error:', error)
      toast.error("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header with breadcrumb */}
      <header className="border-b border-[#e2e8f0] py-6">
        <nav className="text-[18px] pl-8 pr-0">
          <span className="text-[#9ca3af] font-medium">ShadowPost</span>
          <span className="mx-2 text-[#9ca3af]">/</span>
          <span className="text-black font-medium">Leave Feedback</span>
        </nav>
      </header>

      {/* Back Button */}
      <div className="px-8 pt-6">
        <Link href="/" className="inline-flex items-center text-[#000000] hover:text-[#515151] transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="font-inter font-medium text-center mb-16" style={{ fontSize: "64px" }}>
            Leave Feedback
          </h1>

          <div className="w-[530px]">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="message" className="block text-base font-medium text-[#000000]">
                    Your message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="block w-full rounded-lg border border-[#cbd5e1] px-4 py-3 text-gray-500 shadow-sm focus:border-[#000000] focus:ring-[#000000] placeholder:text-[#94a3b8] h-[80px] resize-none"
                      placeholder="Type your message here"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-lg bg-[#000000] px-4 py-3 text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#000000] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 