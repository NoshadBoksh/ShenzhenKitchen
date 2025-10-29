"use client"

/*
=============================================================================
CALL TO ACTION SECTION - FULLY CUSTOMIZABLE
=============================================================================

HOW TO CUSTOMIZE THIS CTA SECTION:

1. MAIN HEADLINE (Lines 42-45):
   - Line 42: Change "Satisfy Your Cravings"
   - Line 44: Change "with Us" (appears in red)
   - Keep impactful and action-oriented

2. DESCRIPTION TEXT (Lines 48-51):
   - Change the paragraph to describe your offering
   - Keep it concise (1-2 sentences)

3. ORDER NOW BUTTON (Lines 56-62):
   - Line 57: Change phone number "tel:02080363692"
   - Line 61: Change button text "ORDER NOW"
   - This button calls your restaurant

4. VIEW MENU BUTTON (Lines 66-74):
   - Line 67: Change PDF path "/menu.pdf"
   - Line 72: Change button text "VIEW MENU"
   - Opens menu in new tab

5. DIVIDER TEXT (Line 85):
   - Change "Dining Options" to your preferred text
   - Or remove entire divider section (Lines 78-90)

6. SECOND HEADLINE (Lines 95-98):
   - Line 95: Change "Convenient"
   - Line 97: Change "Dining Options" (appears in red)

7. DINING OPTIONS CARDS (Lines 107-175):
   - Three cards: Dine-In, Takeaway, Delivery
   - To customize each card:
     * Change icon (SVG path)
     * Change title (e.g., "DINE-IN")
     * Change description text
   - To add more cards, copy one card block
   - To remove a card, delete the entire div block

8. PHONE NUMBER LINK (Lines 180-186):
   - Line 181: Change phone number
   - Line 185: Change display text

9. COLORS:
   - Primary: "red-500", "red-600", "red-700"
   - Secondary: "emerald-500"
   - Background: "black", "gray-900"
   - Change any color by replacing the color name

10. BACKGROUND DECORATIONS (Lines 191-192):
    - Subtle glowing circles in background
    - To remove, delete both div elements
    - To change colors, modify "bg-red-500/5" and "bg-emerald-500/5"

=============================================================================
*/

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================
            MAIN CTA - CUSTOMIZE HERE
            ======================================== */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          {/* MAIN HEADLINE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 leading-tight">
            {/* CUSTOMIZE: First line of headline */}
            Satisfy Your Cravings
            <br />
            {/* CUSTOMIZE: Second line (appears in red) */}
            <span className="text-red-500">with Us</span>
          </h2>

          {/* DESCRIPTION PARAGRAPH */}
          {/* CUSTOMIZE: Change description text */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
            Our menu boasts a rich selection of authentic Chinese dishes, carefully prepared to bring you the true
            flavours of China.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            {/* ORDER NOW BUTTON (Calls phone number) */}
            <a
              // CUSTOMIZE: Change to your phone number
               href="https://deliveroo.co.uk/menu/london/chingford/shenzhen-kitchen?srsltid=AfmBOoqReBL6ET8HLgwy5EuOD79GVbz6cBy6O2IDRYv2YRxpaNz_GkLv"
               target="_blank"
               rel="noopener noreferrer"
              // CUSTOMIZE COLORS: Change "bg-red-600" and "hover:bg-red-700"
              className="w-full sm:w-auto group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base tracking-widest transition-all duration-300 shadow-xl hover:shadow-red-500/50 font-medium"
            >
              {/* CUSTOMIZE: Change button text */}
              ORDER NOW
            </a>

            {/* VIEW MENU BUTTON (Opens PDF) */}
            <a
              // CUSTOMIZE: Change to your menu PDF path
              href="/menu/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // CUSTOMIZE COLORS: Change border and hover colors
              className="w-full sm:w-auto group relative overflow-hidden bg-transparent border-2 border-white hover:border-red-500 hover:bg-red-500 text-white px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base tracking-widest transition-all duration-300 font-medium"
            >
              {/* CUSTOMIZE: Change button text */}
              VIEW MENU
            </a>
          </div>
        </div>

        {/* ========================================
            DIVIDER LINE - CUSTOMIZE HERE
            ======================================== */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            {/* CUSTOMIZE: Change divider text and color */}
            <span className="bg-gray-900 px-6 text-emerald-500 text-xs sm:text-sm tracking-widest uppercase">
              Dining Options
            </span>
          </div>
        </div>

        {/* ========================================
            DINING OPTIONS SECTION - CUSTOMIZE HERE
            ======================================== */}
        <div className="text-center">
          {/* SECTION HEADLINE */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-tight">
            {/* CUSTOMIZE: First line */}
            Convenient
            <br />
            {/* CUSTOMIZE: Second line (appears in red) */}
            <span className="text-red-500">Dining Options</span>
          </h3>

          {/* DESCRIPTION */}
          {/* CUSTOMIZE: Change description text */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-light max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed px-4">
            Enjoy the convenience of both dine-in and takeaway/delivery services, bringing the taste of Shenzhen Kitchen
            to your doorstep.
          </p>

          {/* ========================================
              DINING OPTIONS CARDS - CUSTOMIZE HERE
              ======================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* CARD 1: DINE-IN */}
            <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 p-6 sm:p-8 transition-all duration-300">
              {/* ICON: House/Home icon */}
              <div className="mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              {/* CUSTOMIZE: Card title */}
              <h4 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 tracking-wider">DINE-IN</h4>
              {/* CUSTOMIZE: Card description */}
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Experience authentic flavours in our welcoming restaurant atmosphere
              </p>
            </div>

            {/* CARD 2: TAKEAWAY */}
            <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 p-6 sm:p-8 transition-all duration-300">
              {/* ICON: Shopping bag icon */}
              <div className="mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              {/* CUSTOMIZE: Card title */}
              <h4 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 tracking-wider">TAKEAWAY</h4>
              {/* CUSTOMIZE: Card description */}
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Order ahead and pick up your favourite dishes ready to enjoy
              </p>
            </div>

            {/* CARD 3: DELIVERY */}
            <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/50 p-6 sm:p-8 transition-all duration-300">
              {/* ICON: Delivery truck icon */}
              <div className="mb-4 sm:mb-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              {/* CUSTOMIZE: Card title */}
              <h4 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 tracking-wider">DELIVERY</h4>
              {/* CUSTOMIZE: Card description */}
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Hot, fresh meals delivered straight to your door
              </p>
            </div>
          </div>

          {/* ========================================
              CONTACT CTA - CUSTOMIZE HERE
              ======================================== */}
          <div className="mt-10 sm:mt-12">
            <a
              // CUSTOMIZE: Change phone number
              href="tel:02080363692"
              // CUSTOMIZE COLORS: Change "text-red-500" and "border-red-500"
              className="inline-block text-red-500 hover:text-red-400 text-sm sm:text-base tracking-widest font-medium transition-colors border-b-2 border-red-500 hover:border-red-400 pb-1"
            >
              {/* CUSTOMIZE: Change phone number display text */}
              CALL 020 8036 3692 TO ORDER
            </a>
          </div>
        </div>
      </div>

      {/* DECORATIVE BACKGROUND ELEMENTS: Subtle glowing circles */}
      {/* CUSTOMIZE: Change colors or remove these elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}
