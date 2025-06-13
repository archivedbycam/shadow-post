import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header with breadcrumb */}
      <header className="border-b border-[#e2e8f0] py-6">
        <nav className="text-[18px] pl-8 pr-0">
          <span className="text-[#9ca3af] font-medium">ShadowPost</span>
          <span className="mx-2 text-[#9ca3af]">/</span>
          <span className="text-black font-medium">FAQ</span>
        </nav>
      </header>

      {/* Back button section - separate from FAQ */}
      <section className="py-6">
        <div className="leading-7 tracking-normal pl-8">
          <Link href="/" className="inline-flex items-center text-black hover:text-black/70 focus:outline-none">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-6">
        {/* FAQ Title */}
        <h1 className="text-5xl font-medium text-center mb-20">FAQ's</h1>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto px-4">
          <Accordion
            type="single"
            collapsible
            className="w-full [&_[data-state=open]>svg]:rotate-180 [&_button:focus-visible]:ring-offset-0 [&_button:focus-visible]:ring-0 [&_button:focus-visible]:outline-none"
          >
            <AccordionItem value="item-1" className="border-t border-[#e2e8f0] py-4">
              <AccordionTrigger className="text-base font-normal">What is Shadow Post?</AccordionTrigger>
              <AccordionContent>
                <p className="pt-4 pb-2 text-[#0f172a]/80">
                  Shadow Post is a platform that allows you to schedule and automate your social media posts across
                  multiple platforms.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-t border-[#e2e8f0] py-4">
              <AccordionTrigger className="text-base font-normal">How Does it Work?</AccordionTrigger>
              <AccordionContent>
                <p className="pt-4 pb-2 text-[#0f172a]/80">
                  Simply connect your social media accounts, create your content, set a schedule, and Shadow Post will
                  automatically post your content at the specified times.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-t border-[#e2e8f0] py-4">
              <AccordionTrigger className="text-base font-normal">Which platforms do you support?</AccordionTrigger>
              <AccordionContent>
                <p className="pt-4 pb-2 text-[#0f172a]/80">
                  We currently support major social media platforms including Twitter, LinkedIn, Facebook, and Instagram. 
                  More platforms are being added regularly.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-t border-[#e2e8f0] py-4">
              <AccordionTrigger className="text-base font-normal">Is my data secure?</AccordionTrigger>
              <AccordionContent>
                <p className="pt-4 pb-2 text-[#0f172a]/80">
                  Yes, we take data security seriously. All your content and account information is encrypted and stored 
                  securely. We never share your personal data with third parties.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-t border-[#e2e8f0] py-4">
              <AccordionTrigger className="text-base font-normal">Can I cancel my subscription anytime?</AccordionTrigger>
              <AccordionContent>
                <p className="pt-4 pb-2 text-[#0f172a]/80">
                  Absolutely! You can cancel your subscription at any time from your account settings. 
                  There are no cancellation fees or long-term commitments.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
} 