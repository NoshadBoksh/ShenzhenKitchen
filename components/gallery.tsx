"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/*
=============================================================================
MENU CAROUSEL - OPTIMIZED FOR YOUR PRODUCT PHOTOGRAPHY
=============================================================================

YOUR MENU IMAGES: 2,500 x 1,875 pixels (4:3 aspect ratio)
Style: White plate on gray concrete background - clean product photography

HOW TO ADD MORE DISHES:

1. Save your dish image: /public/images/chicken-balls.jpg
2. Copy one dish object below (lines 35-41)
3. Paste after the last dish
4. Update: id, name, description, image path, price
5. Add comma after previous dish!

EXAMPLE:
{
  id: 5,
  name: "Sweet and Sour Chicken",
  description: "Crispy chicken in tangy sweet and sour sauce",
  image: "/images/sweet-sour-chicken.jpg",
  price: "12.50",
},

CAROUSEL FEATURES:
- Handles unlimited dishes automatically
- Shows 3 dishes on desktop, 1 on mobile
- Arrow navigation with red buttons
- Dot indicators at bottom
- Smooth slide transitions
- Optimized for 4:3 product photos

COLORS TO CUSTOMIZE:
- Red accents: Search "red-500" or "red-600" and replace
- Green subtitle: Search "emerald-500" and replace
- Background: Currently black "bg-black"

IMAGE STYLING:
- Minimal overlay to show your clean product photography
- Subtle zoom on hover
- Clean borders that complement gray backgrounds

=============================================================================
*/

const dishes = [
  { id: 1, name: "King Prawns With Black Bean Sauce", description: "Juicy king prawns tossed in rich black bean sauce for a classic taste.", image: "/images/286214_shenzhen kitchen_Food_king_prawns_with_black_bean_sauce.jpg", price: "9.50" },
  { id: 2, name: "King Prawns With Onion And Oyster Sauce", description: "Tender king prawns stir-fried with onions in a smooth oyster sauce.", image: "/images/286214_shenzhen kitchen_Food_king_prawns_with_onion_and_oyster_sauce.jpg", price: "9.50" },
  { id: 4, name: "Mix Seafood Chow Mein", description: "A delicious mix of seafood stir-fried with noodles and vegetables.", image: "/images/286214_shenzhen kitchen_Food_mix_seafood_chow_mein.jpg", price: "11.00" },
  { id: 5, name: "Mixed Seafood Fried Rice", description: "Fried rice loaded with prawns, squid, and fish for a hearty meal.", image: "/images/286214_shenzhen kitchen_Food_mixed_seafood_fried_rice.jpg", price: "10.50" },
  { id: 6, name: "Mushroom Fried Rice", description: "Fragrant fried rice with sautéed mushrooms and light soy seasoning.", image: "/images/286214_shenzhen kitchen_Food_mushroom_fried_rice.jpg", price: "8.00" },
  { id: 7, name: "Mushroom Chow Mein", description: "Soft noodles stir-fried with mushrooms and bean sprouts.", image: "/images/286214_shenzhen kitchen_Food_mushroom_chow_mein.jpg", price: "8.00" },
  { id: 8, name: "Mushroom Omelette", description: "Fluffy omelette filled with sautéed mushrooms.", image: "/images/286214_shenzhen kitchen_Food_mushroom_omelette.jpg", price: "7.50" },
  { id: 9, name: "Plain Omelette", description: "A light, golden omelette served fresh and hot.", image: "/images/286214_shenzhen kitchen_Food_plain_omelette.jpg", price: "6.50" },
  { id: 10, name: "Prawn Crackers", description: "Crispy and airy prawn crackers perfect for snacking.", image: "/images/286214_shenzhen kitchen_Food_prawn_crackers.jpg", price: "3.00" },
  { id: 11, name: "Salt And Pepper Chicken Balls", description: "Crispy chicken balls seasoned with salt, pepper, and chili flakes.", image: "/images/286214_shenzhen kitchen_Food_salt_and_pepper_chicken_balls.jpg", price: "8.50" },
  { id: 12, name: "Salt And Pepper Chips", description: "Golden chips tossed with salt, chili, and onions.", image: "/images/286214_shenzhen kitchen_Food_salt_and_pepper_chips.jpg", price: "5.00" },
  { id: 13, name: "Salt And Pepper King Prawn", description: "Crispy king prawns fried with salt, pepper, and fresh chili.", image: "/images/286214_shenzhen kitchen_Food_salt_and_pepper_king_prawn.jpg", price: "9.50" },
  { id: 14, name: "Sausage", description: "Grilled sausage with a smoky, savory flavor.", image: "/images/286214_shenzhen kitchen_Food_sausage.jpg", price: "4.50" },
  { id: 15, name: "Seaweed", description: "Crispy seaweed seasoned with a hint of sweetness.", image: "/images/286214_shenzhen kitchen_Food_seaweed.jpg", price: "4.00" },
  { id: 16, name: "Schenzen Special Omelette", description: "House special omelette with mixed meats and vegetables.", image: "/images/286214_shenzhen kitchen_Food_schenzen_special_omelette.jpg", price: "9.00" },
  { id: 17, name: "Shenzhen Special Curry", description: "A rich and flavorful curry featuring Shenzhen’s special blend of spices.", image: "/images/286214_shenzhen kitchen_Food_shenzhen_special_curry.jpg", price: "10.00" },
  { id: 18, name: "Shenzhen Special Noodles", description: "Signature noodles cooked with mixed meats and vegetables.", image: "/images/286214_shenzhen kitchen_Food_shenzhen_special_noodles.jpg", price: "9.50" },
  { id: 19, name: "Shenzhen Special Omelette", description: "Fluffy omelette with Shenzhen’s special ingredients.", image: "/images/286214_shenzhen kitchen_Food_shenzhen_special_omelette.jpg", price: "9.00" },
  { id: 20, name: "Shenzhen Special Szechuan", description: "Spicy Shenzhen-style Szechuan dish with bold heat.", image: "/images/286214_shenzhen kitchen_Food_shenzhen_special_szechuan.jpg", price: "10.50" },
  { id: 21, name: "Shenzhen Special With Black Bean", description: "Savory Shenzhen-style stir fry in a rich black bean sauce.", image: "/images/286214_shenzhen kitchen_Food_shenzhen_special_with_black_bean.jpg", price: "10.00" },
  { id: 22, name: "Shrimp Chow Mein", description: "Stir-fried noodles with shrimp, bean sprouts, and soy sauce.", image: "/images/286214_shenzhen kitchen_Food_shrimp_chow_mein.jpg", price: "9.00" },
  { id: 23, name: "Shrimp Fried Rice", description: "Classic fried rice tossed with shrimp and spring onions.", image: "/images/286214_shenzhen kitchen_Food_shrimp_fried_rice.jpg", price: "9.00" },
  { id: 24, name: "Singapore Chow Mein", description: "Curry-flavored noodles with prawns, chicken, and vegetables.", image: "/images/286214_shenzhen kitchen_Food_singapore_chow_mein.jpg", price: "9.50" },
  { id: 25, name: "Special Chilli Wings", description: "Crispy chicken wings coated in sweet and spicy chili sauce.", image: "/images/286214_shenzhen kitchen_Food_special_chilli_wings.jpg", price: "8.00" },
  { id: 26, name: "Sweeter And Sour Sauce", description: "Sweet and tangy sauce perfect for dipping.", image: "/images/286214_shenzhen kitchen_Food_sweer_and_sour_sauce.jpg", price: "2.50" },
  { id: 27, name: "Sweet And Sour Ribs", description: "Tender ribs glazed in a rich sweet and sour sauce.", image: "/images/286214_shenzhen kitchen_Food_sweet_and_sour_ribs.jpg", price: "10.00" },
  { id: 28, name: "Sweet Chilli Sauce", description: "Sweet chili dipping sauce with a mild heat.", image: "/images/286214_shenzhen kitchen_Food_sweet_chilli_sauce.jpg", price: "2.50" },
  { id: 29, name: "Szechuan Ribs", description: "Spicy ribs cooked with bold Szechuan spices.", image: "/images/286214_shenzhen kitchen_Food_szechuan_ribs.jpg", price: "10.00" },
  { id: 30, name: "Tofu Chow Mein", description: "Stir-fried noodles with tofu and mixed vegetables.", image: "/images/286214_shenzhen kitchen_Food_tofu_chow_mein.jpg", price: "8.50" },
  { id: 31, name: "Tofu Sweet Sour", description: "Crispy tofu pieces in sweet and sour sauce.", image: "/images/286214_shenzhen kitchen_Food_tofu_sweet__sour.jpg", price: "8.50" },
  { id: 32, name: "Tofu With Black Bean Sauce", description: "Soft tofu cooked with garlic and black bean sauce.", image: "/images/286214_shenzhen kitchen_Food_tofu_with_black_bean_sauce.jpg", price: "8.50" },
  { id: 33, name: "Tom Yum Soup", description: "Hot and sour Thai-style soup with fragrant herbs.", image: "/images/286214_shenzhen kitchen_Food_tom_yum_soup.jpg", price: "7.50" },
  { id: 34, name: "Vegan Plain Chow Mein", description: "Simple vegan noodles with bean sprouts and light soy.", image: "/images/286214_shenzhen kitchen_Food_vegan_plain_chow_mein.jpg", price: "8.00" },
  { id: 35, name: "Vegan Plain Rice", description: "Steamed plain rice perfect for pairing with mains.", image: "/images/286214_shenzhen kitchen_Food_vegan_plain_rice.jpg", price: "3.50" },
  { id: 36, name: "Vegetable Chow Mein", description: "Stir-fried noodles with mixed vegetables and soy sauce.", image: "/images/286214_shenzhen kitchen_Food_vegetable_chow_mein.jpg", price: "8.00" },
  { id: 37, name: "Vegetable Fried Rice", description: "Fried rice with seasonal vegetables and soy flavoring.", image: "/images/286214_shenzhen kitchen_Food_vegetable_fried_rice.jpg", price: "8.00" },
  { id: 38, name: "Vegetarian Soup", description: "A light, clear vegetable soup with fresh greens.", image: "/images/286214_shenzhen kitchen_Food_vegetarian_soup.jpg", price: "6.00" },
  { id: 39, name: "Vegetable Spring Rolls", description: "Crispy spring rolls filled with mixed vegetables.", image: "/images/286214_shenzhen kitchen_Food_vegetable_spring_rolls.jpg", price: "6.50" },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Calculate how many dishes to show
  const dishesPerView = isMobile ? 1 : 3
  const maxIndex = Math.max(0, dishes.length - dishesPerView)

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Get visible dishes based on current index
  const getVisibleDishes = () => {
    const visible = []
    for (let i = 0; i < dishesPerView; i++) {
      const index = (currentIndex + i) % dishes.length
      visible.push(dishes[index])
    }
    return visible
  }

  return (
  <section id="gallery" className="py-12 sm:py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Signature Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative overflow-hidden rounded-3xl bg-gray-900 shadow-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <div className="relative aspect-[5/4] sm:aspect-[4/3] overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center rounded-3xl transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-3xl flex flex-col justify-end p-5 sm:p-6">
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-1 transition-transform duration-300 group-hover:translate-y-[-3px]">
                  {dish.name}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base mb-2 opacity-90">
                  {dish.description}
                </p>
                <p className="text-red-500 text-lg sm:text-xl font-bold">
                  £{dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
