import { MapPin, Phone, Clock, Mail } from "lucide-react"

/*
=============================================================================
CONTACT / VISIT US SECTION - SHENZHEN KITCHEN
=============================================================================
Address: 65 Old Church Road, Chingford Mount, London E4 6ST
Phone: 020 8036 3692
Email: contact@shenzhenkitchen.uk
Hours: 12:00pm – 11:00pm (Open Every Day except some public/other holidays)
Instagram: https://www.instagram.com/shenzhenkitchenuk
TikTok: https://www.tiktok.com/@shenzhenkitchenuk
Google Maps: Embedded interactive map
=============================================================================
*/

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white text-gray-900 py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-red-600 text-xs sm:text-sm tracking-widest font-medium uppercase">LOCATION</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-4 sm:mb-6 px-4">
            Visit Us
            <br />
            <span className="text-red-600">In Chingford</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-12">
            {/* ADDRESS */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="bg-red-50 p-3 sm:p-4 border-2 border-red-600 hover:bg-red-100 transition-colors duration-300">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium tracking-wider mb-2 sm:mb-3 text-gray-900">ADDRESS</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-base">
                  65 Old Church Road
                  <br />
                  Chingford Mount
                  <br />
                  London E4 6ST
                </p>
                <a
                  href="https://www.google.com/maps/place/Shenzhen+Kitchen/@51.6190775,-0.0170084,17z/data=!3m1!4b1!4m6!3m5!1s0x48761f32dc4efc61:0xb2f987683cf02b5f!8m2!3d51.6190775!4d-0.0170084!16s%2Fg%2F11xcwt6r37?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="bg-emerald-50 p-3 sm:p-4 border-2 border-emerald-600 hover:bg-emerald-100 transition-colors duration-300">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium tracking-wider mb-2 sm:mb-3 text-gray-900">PHONE</h3>
                <a
                  href="tel:02080363692"
                  className="text-gray-600 hover:text-red-600 transition-colors font-light text-base sm:text-lg"
                >
                  020 8036 3692
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="bg-red-50 p-3 sm:p-4 border-2 border-red-600 hover:bg-red-100 transition-colors duration-300">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium tracking-wider mb-2 sm:mb-3 text-gray-900">EMAIL</h3>
                <a
                  href="mailto:contact@shenzhenkitchen.uk"
                  className="text-gray-600 hover:text-red-600 transition-colors font-light text-base sm:text-lg break-all"
                >
                  contact@shenzhenkitchen.uk
                </a>
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="bg-emerald-50 p-3 sm:p-4 border-2 border-emerald-600 hover:bg-emerald-100 transition-colors duration-300">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-medium tracking-wider mb-2 sm:mb-3 text-gray-900">
                  OPENING HOURS
                </h3>
                <div className="text-gray-600 font-light space-y-2 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span className="font-medium">Open Every Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12:00 PM – 11:00 PM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 italic pt-2">*Except some public and other holidays</p>
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="pt-6 sm:pt-8 border-t border-gray-200">
              <h3 className="text-lg sm:text-xl font-medium tracking-wider mb-4 text-gray-900">FOLLOW US</h3>
              <div className="flex space-x-3 sm:space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/shenzhenkitchenuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 hover:border-red-600 hover:bg-red-50 p-2 sm:p-3 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.949 0-3.204.013-3.663.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@shenzhenkitchenuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 hover:border-red-600 hover:bg-red-50 p-2 sm:p-3 transition-all duration-300"
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-full min-h-[400px]">
            <div className="absolute inset-0 border-2 border-gray-200 shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.5837088347694!2d-0.019177523394545!3d51.61907750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f32dc4efc61%3A0xb2f987683cf02b5f!2sShenzhen%20Kitchen!5e0!3m2!1sen!2suk!4v1738441234567!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shenzhen Kitchen Location"
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
