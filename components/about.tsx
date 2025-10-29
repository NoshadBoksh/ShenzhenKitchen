"use client"

/*
=============================================================================
ABOUT US / OUR STORY SECTION - SHENZHEN KITCHEN
=============================================================================
Story: Shenzhen Kitchen introduces the first halal Chinese dining experience 
to Chingford, London, combining tradition with delightful flavours.
=============================================================================
*/

export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-white text-gray-900 py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              {/* ========== SECTION LABEL ========== */}
              <span className="text-red-600 text-xs sm:text-sm tracking-widest font-medium uppercase">OUR STORY</span>

              {/* ========== MAIN HEADING ========== */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6 sm:mb-8 leading-tight text-gray-900">
                Chingford's First
                <br />
                <span className="text-red-600">Halal Chinese</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg font-light leading-relaxed">
              {/* ========== SHENZHEN KITCHEN STORY ========== */}
              <p>
                Shenzhen Kitchen introduces the first halal Chinese dining experience to Chingford, London, combining
                tradition with delightful flavours.
              </p>

              <p>
                We are dedicated to delivering authentic Chinese cuisine in a friendly and inviting atmosphere. At
                Shenzhen Kitchen, we strive to share the tastes of Chinese cuisine with the Chingford community, and our
                journey started with a vision of creating a space where guests can truly appreciate the artistry of
                Chinese cooking.
              </p>

              <p>We remain committed to that mission, bringing you the finest halal Chinese dining experience.</p>
            </div>

            {/* ========== STATISTICS ========== */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8">
              {/* Chingford's First */}
              <div className="border-l-4 border-red-600 pl-4 sm:pl-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl sm:text-5xl font-light text-red-600 mb-2">#1</div>
                <div className="text-xs sm:text-sm tracking-wider text-gray-600 uppercase">In Chingford</div>
              </div>

              {/* Halal Certified */}
              <div className="border-l-4 border-emerald-600 pl-4 sm:pl-6 hover:transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl sm:text-5xl font-light text-emerald-600 mb-2">100%</div>
                <div className="text-xs sm:text-sm tracking-wider text-gray-600 uppercase">Halal Certified</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px]">
            {/* Red gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent" />

            <img
              src="/images/286214_shenzhen kitchen_Food_vegetable_chow_mein.jpg"
              alt="Shenzhen Kitchen authentic cuisine"
              className="w-full h-full object-cover shadow-2xl hover:shadow-red-500/20 transition-shadow duration-500"
            />

            {/* Certification badge - Green for halal */}
            <div className="absolute bottom-0 right-0 bg-emerald-600 text-white px-6 sm:px-8 py-4 sm:py-6 shadow-lg hover:bg-emerald-700 transition-colors duration-300">
              <div className="text-xl sm:text-2xl font-bold tracking-wider">HALAL</div>
              <div className="text-xs sm:text-sm tracking-widest">CERTIFIED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
