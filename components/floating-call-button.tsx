"use client"

import { Phone } from "lucide-react"
import { useState, useEffect } from "react"

/*
=============================================================================
FLOATING CALL BUTTON - SHENZHEN KITCHEN
=============================================================================
Phone: 020 8036 3692
Appears on mobile when scrolling down
=============================================================================
*/

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 md:hidden transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <a
        href="tel:02080363692"
        className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center justify-center"
        aria-label="Call Shenzhen Kitchen"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
