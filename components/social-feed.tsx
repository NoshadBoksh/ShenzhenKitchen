"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

/*
=============================================================================
SOCIAL MEDIA FEED SECTION - SHENZHEN KITCHEN
=============================================================================
Automatically fetches TikTok post thumbnails and titles using TikTok's oEmbed API
Displays posts in a scrollable carousel with navigation arrows
=============================================================================
*/

const tiktokURLs = [
  "https://www.tiktok.com/@shenzhenkitchenuk/video/7524772425238711574",
  "https://www.tiktok.com/@shenzhenkitchenuk/photo/7509575054129106198",
  "https://www.tiktok.com/@shenzhenkitchenuk/video/7515123275542891778",
  "https://www.tiktok.com/@shenzhenkitchenuk/photo/7549228356877749526",
  "https://www.tiktok.com/@shenzhenkitchenuk/video/7548144792262200598",
  "https://www.tiktok.com/@shenzhenkitchenuk/video/7545563209235844374",
]

export default function SocialFeed() {
  const [socialPosts, setSocialPosts] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fetch TikTok post info dynamically
  useEffect(() => {
    async function fetchTikTokData() {
      const results = await Promise.all(
        tiktokURLs.map(async (url) => {
          try {
            const res = await fetch(`https://www.tiktok.com/oembed?url=${url}`)
            const data = await res.json()
            return {
              url,
              title: data.title || "TikTok Post",
              thumbnail: data.thumbnail_url,
              type: data.type || "video",
            }
          } catch (err) {
            console.error("Error fetching TikTok post:", err)
            return null
          }
        })
      )
      setSocialPosts(results.filter(Boolean))
    }

    fetchTikTokData()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % socialPosts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + socialPosts.length) % socialPosts.length)
  }

  // Show 1 post on mobile, 3 on desktop
  const getVisiblePosts = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [socialPosts[currentIndex]]
    }
    const posts = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % socialPosts.length
      posts.push(socialPosts[index])
    }
    return posts
  }

  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== SECTION HEADER ========== */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-emerald-500 text-xs sm:text-sm tracking-widest font-light uppercase">
            Follow Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-4 sm:mb-6 px-4">
            From Our
            <br />
            <span className="text-red-500">Kitchen to Your Feed</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed px-4">
            See our latest creations and behind-the-scenes moments on TikTok
          </p>

          {/* TikTok Follow Button */}
          <a
            href="https://www.tiktok.com/@shenzhenkitchenuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 sm:mt-8 border-2 border-red-500 hover:bg-red-500 text-white px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
            <span className="hidden sm:inline">FOLLOW @SHENZHENKITCHENUK</span>
            <span className="sm:hidden">FOLLOW US</span>
          </a>
        </div>

        {/* ========== CAROUSEL ========== */}
        <div className="relative px-8 sm:px-12">
          {socialPosts.length === 0 ? (
            <p className="text-center text-white/50">Loading TikTok posts...</p>
          ) : (
            <>
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 lg:p-4 transition-all duration-300 shadow-xl hover:shadow-red-500/50"
                aria-label="Previous posts"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 hover:bg-red-700 text-white p-2 sm:p-3 lg:p-4 transition-all duration-300 shadow-xl hover:shadow-red-500/50"
                aria-label="Next posts"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {getVisiblePosts().map((post, idx) => (
                  <a
                    key={`${post.id}-${idx}`}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group rounded-3xl overflow-hidden shadow-lg border border-white/10 hover:border-red-500/50 transition-all duration-500 aspect-[3/4] block"
                  >
                    <img
                      src={post.thumbnail || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                      <div className="flex justify-end">
                        <span className="bg-red-600/90 text-white text-xs tracking-wider px-2 sm:px-3 py-1 uppercase rounded">
                          {post.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-2 sm:mb-3 tracking-wide line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/80 line-clamp-3 mb-2">
                        {post.description || "Watch our latest creation on TikTok!"}
                      </p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-red-500 group-hover:text-red-400 transition-colors">
                        <span className="tracking-widest">WATCH ON TIKTOK</span>
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </a>

                ))}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8 sm:mt-12">
                {socialPosts.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-red-500 w-8" : "bg-white/30 hover:bg-white/50 w-2"
                      }`}
                    aria-label={`Go to post ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
