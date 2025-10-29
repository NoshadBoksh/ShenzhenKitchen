import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CTASection from "@/components/cta-section"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import SocialFeed from "@/components/social-feed"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingCallButton from "@/components/floating-call-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <CTASection />
        <About />
        <Gallery />
        <SocialFeed />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  )
}
