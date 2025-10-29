"use client"

import { ChevronDown } from "lucide-react"

/*
=============================================================================
HERO SECTION (HOMEPAGE BANNER) - FULLY CUSTOMIZABLE
=============================================================================

HOW TO CUSTOMIZE THIS HERO SECTION:

1. BACKGROUND IMAGE (Line 68):
   - YOUR IMAGE: 2,500 x 1,667 pixels
   - Save your hero image as: /public/images/hero-background.jpg
   - The path is already set to: '/images/hero-background.jpg'
   - Just place your image in /public/images/ folder

2. CERTIFICATION BADGE (Lines 80-84):
   - Change "100% HALAL CERTIFIED" to your certification text
   - Change "emerald" to another color (red, blue, green, etc.)
   - To remove badge, delete the entire div block (Lines 78-86)

3. MAIN HEADLINE (Lines 90-93):
   - Line 90: Change "AUTHENTIC" to your first line
   - Line 92: Change "HALAL CHINESE" to your second line (highlighted in red)
   - Keep text in UPPERCASE for impact

4. SUBHEADLINE (Lines 97-101):
   - Line 97: Change main tagline
   - Line 100: Change secondary tagline
   - Keep text concise and compelling

5. BUTTONS (Lines 106-125):
   - First button: Opens menu PDF (Line 109)
   - Second button: Opens allergen list PDF (Line 118)
   - Change button text on Lines 113 and 122
   - Change PDF paths: '/menu.pdf' and '/allergen-list.pdf'

6. COLORS:
   - Primary accent: "red-500", "red-600", "red-700"
   - Secondary accent: "emerald-500" (green for halal)
   - To change colors, replace "red" or "emerald" with: blue, purple, orange, etc.

7. BACKGROUND OVERLAY (Lines 71-73):
   - Controls darkness of image overlay
   - "from-black/80" = 80% black overlay
   - Increase number for darker, decrease for lighter

8. SCROLL INDICATOR (Lines 129-135):
   - Bouncing arrow at bottom of screen
   - To remove, delete the entire button block
   - Change "hover:text-red-500" to match your color scheme

=============================================================================
*/

// SMOOTH SCROLL HELPER FUNCTION
function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Hero() {
  // Scroll to next section (About)
  const scrollToNext = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* ========================================
          BACKGROUND IMAGE - CUSTOMIZE HERE
          ======================================== */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // CUSTOMIZE: Place your hero image at /public/images/hero-background.jpg
            backgroundImage: `url('/images/Testshenzhen kitchen_Hero.jpg')`, 
            backgroundPosition: "center top",
          }}
        />

        {/* DARK OVERLAY: Makes text readable over image */}
        {/* CUSTOMIZE: Adjust opacity by changing /80 to /60 (lighter) or /90 (darker) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />

        {/* RED GRADIENT: Adds warmth to the image */}
        {/* CUSTOMIZE: Change "red-900" to your brand color */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-transparent" />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* ========================================
            CERTIFICATION BADGE - CUSTOMIZE HERE
            ======================================== */}
        <div className="mb-6">
          <div className="inline-block border-2 border-emerald-500 px-3 sm:px-4 py-2 mb-6 sm:mb-8 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors duration-300">
            {/* CUSTOMIZE: Change badge text and color */}
            {/* CUSTOMIZE COLOR: Change "emerald" to red, blue, purple, etc. */}
            <span className="text-emerald-400 text-xs sm:text-sm tracking-widest font-medium">
              100% HALAL CERTIFIED
            </span>
          </div>
        </div>

        {/* ========================================
            MAIN HEADLINE - CUSTOMIZE HERE
            ======================================== */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-6 sm:mb-8 tracking-wide leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
          {/* CUSTOMIZE: Change first line of headline */}
          AUTHENTIC
          <br />
          {/* CUSTOMIZE: Change second line (appears in red) */}
          <span className="text-red-500">HALAL CHINESE</span>
        </h1>

        {/* ========================================
            SUBHEADLINE - CUSTOMIZE HERE
            ======================================== */}
        {/* CUSTOMIZE: Main tagline */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3 sm:mb-4 max-w-2xl mx-auto font-normal tracking-wide leading-relaxed">
          Chingford's First Halal Chinese Restaurant
        </p>
        {/* CUSTOMIZE: Secondary tagline */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto font-normal">
          Where tradition meets delightful flavours
        </p>

        {/* ========================================
            CALL-TO-ACTION BUTTONS - CUSTOMIZE HERE
            ======================================== */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          {/* PRIMARY BUTTON: Opens Menu PDF */}
          <a
            // CUSTOMIZE: Change PDF path to your menu file
            href="/menu/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            // CUSTOMIZE COLORS: Change "bg-red-600" and "hover:bg-red-700"
            className="w-full sm:w-auto group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm tracking-widest font-medium transition-all duration-300 shadow-lg hover:shadow-red-500/50"
          >
            {/* CUSTOMIZE: Change button text */}
            EXPLORE MENU
          </a>

          {/* SECONDARY BUTTON: Opens Allergen List PDF */}
          <a
            // CUSTOMIZE: Change PDF path to your allergen list file
            href="/menu/allergen-list.pdf"
            target="_blank"
            rel="noopener noreferrer"
            // CUSTOMIZE COLORS: Change border and hover colors
            className="w-full sm:w-auto group relative overflow-hidden bg-transparent border-2 border-white hover:border-red-500 hover:bg-red-500 text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm tracking-widest font-medium transition-all duration-300"
          >
            {/* CUSTOMIZE: Change button text */}
            ALLERGEN LIST
          </a>
        </div>
      </div>

      {/* ========================================
          SCROLL INDICATOR (Bouncing Arrow)
          ======================================== */}
      <button
        onClick={scrollToNext}
        // CUSTOMIZE: Change "hover:text-red-500" to your color
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-red-500 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}
