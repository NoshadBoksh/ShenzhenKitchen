/*
=============================================================================
FOOTER COMPONENT - SHENZHEN KITCHEN
=============================================================================
Restaurant: Shenzhen Kitchen
Location: Chingford, London
Social Media:
- Instagram: https://www.instagram.com/shenzhenkitchenuk
- TikTok: https://www.tiktok.com/@shenzhenkitchenuk
=============================================================================
*/

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Restaurant Name & Certification */}
          <div>
            <h3 className="text-2xl font-light tracking-widest text-red-500 mb-4">SHENZHEN KITCHEN</h3>
            <div className="inline-block border-2 border-emerald-500 bg-emerald-500/10 px-3 py-1 mb-4">
              <span className="text-emerald-400 text-xs tracking-widest font-light">100% HALAL CERTIFIED</span>
            </div>
            <p className="text-white/60 font-light leading-relaxed mb-4">
              Chingford's first halal Chinese restaurant, combining tradition with delightful flavours
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="https://www.instagram.com/shenzhenkitchenuk"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-red-500 p-2 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white/60 hover:text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.949 0-3.204.013-3.663.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@shenzhenkitchenuk"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-red-500 p-2 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-white/60 hover:text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest mb-6 font-medium text-white">NAVIGATION</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/60 hover:text-red-500 transition-colors font-light text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/60 hover:text-red-500 transition-colors font-light text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-red-500 transition-colors font-light text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-red-500 transition-colors font-light text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest mb-6 font-medium text-white">CONTACT</h4>
            <div className="space-y-2 text-white/60 font-light text-sm">
              <p>65 Old Church Road</p>
              <p>Chingford Mount</p>
              <p>London E4 6ST</p>
              <p className="pt-2">
                <a href="tel:02080363692" className="hover:text-red-500 transition-colors">
                  020 8036 3692
                </a>
              </p>
              <p>
                <a href="mailto:contact@shenzhenkitchen.uk" className="hover:text-red-500 transition-colors">
                  contact@shenzhenkitchen.uk
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-white/40 font-light">© 2025 Shenzhen Kitchen. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 hover:text-red-500 transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-red-500 transition-colors font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
