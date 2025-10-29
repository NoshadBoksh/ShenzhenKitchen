"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

/*
=============================================================================
NAVIGATION BAR COMPONENT - FULLY CUSTOMIZABLE
=============================================================================

HOW TO CUSTOMIZE THIS NAVIGATION BAR:

1. RESTAURANT NAME (Line 50):
   - Change "SHENZHEN KITCHEN" to your restaurant name
   - Keep it in UPPERCASE for consistency
   - Example: "YOUR RESTAURANT NAME"

2. NAVIGATION MENU ITEMS (Lines 60-90):
   - Currently: HOME | ABOUT | MENU | CONTACT
   - To add a new menu item, copy one of the button blocks
   - To remove a menu item, delete the entire button block
   - To reorder, cut and paste the button blocks

3. COLORS:
   - Primary color (red): Change "red-500", "red-600" to your color
   - Hover effects: Change "hover:text-red-500" to your color
   - Available colors: blue, green, purple, orange, yellow, pink, etc.
   - Example: "text-blue-500" or "hover:text-green-600"

4. BACKGROUND:
   - Scrolled background: "bg-black/95" (Line 44)
   - Initial background: "bg-black/80" (Line 44)
   - Change "black" to any color or use "white" for light theme

5. MOBILE MENU:
   - Mobile menu appears on screens smaller than 1024px (lg breakpoint)
   - Mobile menu items are in Lines 100-130
   - Keep mobile and desktop menus synchronized

6. SCROLL BEHAVIOR:
   - Navigation becomes more opaque when scrolling (Line 44)
   - Adjust scroll trigger at Line 26: "window.scrollY > 50"
   - Increase number for later trigger, decrease for earlier

=============================================================================
*/

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // SCROLL DETECTION: Detects when user scrolls down the page
  useEffect(() => {
    const handleScroll = () => {
      // CUSTOMIZE: Change "50" to adjust when navbar style changes
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // SMOOTH SCROLL FUNCTION: Scrolls to section when menu item is clicked
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Close mobile menu after clicking
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        // CUSTOMIZE BACKGROUND: Change colors here for scrolled/unscrolled states
        isScrolled ? "bg-black/95 backdrop-blur-md py-4" : "bg-black/80 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* ========================================
              RESTAURANT LOGO/NAME - CUSTOMIZE HERE
              ======================================== */}
          <button
            onClick={() => scrollToSection("hero")}
            // CUSTOMIZE: Change restaurant name below
            // CUSTOMIZE COLORS: Change "text-white" and "hover:text-red-500"
            className="text-xl md:text-2xl font-light tracking-widest text-white hover:text-red-500 transition-colors duration-300"
          >
            SHENZHEN KITCHEN
          </button>

          {/* ========================================
              DESKTOP NAVIGATION MENU - CUSTOMIZE HERE
              ======================================== */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* HOME BUTTON - Links to hero section */}
            <button
              onClick={() => scrollToSection("hero")}
              // CUSTOMIZE TEXT: Change "HOME" to your preferred text
              // CUSTOMIZE COLORS: Change "text-white/80" and "hover:text-red-500"
              className="text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors duration-300"
            >
              HOME
            </button>

            {/* ABOUT BUTTON - Links to about section */}
            <button
              onClick={() => scrollToSection("about")}
              // CUSTOMIZE TEXT: Change "ABOUT" to your preferred text
              className="text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors duration-300"
            >
              ABOUT
            </button>

            {/* MENU BUTTON - Links to gallery/menu section */}
            <button
              onClick={() => scrollToSection("gallery")}
              // CUSTOMIZE TEXT: Change "MENU" to your preferred text
              className="text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors duration-300"
            >
              DISHES
            </button>

            {/* CONTACT BUTTON - Links to contact section */}
            <button
              onClick={() => scrollToSection("contact")}
              // CUSTOMIZE TEXT: Change "CONTACT" to your preferred text
              className="text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors duration-300"
            >
              CONTACT
            </button>

            {/* TO ADD MORE MENU ITEMS: Copy one of the button blocks above and paste here
                Example:
                <button
                  onClick={() => scrollToSection("your-section-id")}
                  className="text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors duration-300"
                >
                  YOUR TEXT
                </button>
            */}
          </div>

          {/* MOBILE MENU TOGGLE BUTTON (Hamburger icon) */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ========================================
            MOBILE NAVIGATION MENU - CUSTOMIZE HERE
            ======================================== */}
        {isOpen && (
          <div className="lg:hidden mt-6 bg-black/95 backdrop-blur-md p-6 rounded-lg">
            <div className="space-y-4">
              {/* MOBILE HOME BUTTON */}
              <button
                onClick={() => scrollToSection("hero")}
                // CUSTOMIZE: Keep mobile menu items synchronized with desktop menu
                className="block w-full text-left text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors py-2"
              >
                HOME
              </button>

              {/* MOBILE ABOUT BUTTON */}
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors py-2"
              >
                ABOUT
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors py-2"
              >
                DISHES
              </button>

              {/* MOBILE CONTACT BUTTON */}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-sm tracking-wider text-white/80 hover:text-red-500 transition-colors py-2"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
