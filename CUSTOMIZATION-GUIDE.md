# 🎨 Website Customization Guide

This guide will help you customize your restaurant website **without coding knowledge**.

---

## 📋 Table of Contents

1. [Changing Text Content](#changing-text-content)
2. [Changing Colors](#changing-colors)
3. [Changing Images](#changing-images)
4. [Changing Contact Information](#changing-contact-information)
5. [Adding/Removing Menu Items](#addingremoving-menu-items)
6. [Common Issues & Solutions](#common-issues--solutions)

---

## 📝 Changing Text Content

### Restaurant Name
**Location:** `components/navbar.tsx`
- **Line 36:** Find `GOLDEN DRAGON` and replace with your restaurant name
- **Also change in:** `components/footer.tsx` (line 16)

### Main Headline (Hero Section)
**Location:** `components/hero.tsx`
- **Line 35-38:** Change `AUTHENTIC` and `HALAL CHINESE` to your headline
- **Line 41:** Change the description text

### About Us Story
**Location:** `components/about.tsx`
- **Lines 28-42:** Replace the three paragraphs with your restaurant's story
- Keep paragraphs short (2-4 sentences each)

### Menu Item Names & Descriptions
**Location:** `components/gallery.tsx`
- **Lines 6-33:** Each dish has `name`, `description`, and `price`
- Change the text between the quotation marks

---

## 🎨 Changing Colors

### Understanding the Color System

The website uses **Tailwind CSS** color classes. Colors look like this:
- `text-amber-500` = amber/gold text
- `bg-amber-600` = amber/gold background
- `border-amber-500` = amber/gold border

### Available Colors

Replace `amber` with any of these:
- `red` - Red
- `emerald` - Green  
- `blue` - Blue
- `purple` - Purple
- `pink` - Pink
- `orange` - Orange
- `yellow` - Yellow
- `gray` - Gray

The number (500, 600, etc.) controls darkness:
- 400 = lighter
- 500 = medium
- 600 = darker
- 700 = very dark

### Where to Change Colors

1. **Main Accent Color (currently gold/amber)**
   - Search for `amber` in all files
   - Replace with your chosen color
   - Example: `text-amber-500` → `text-emerald-500`

2. **Button Colors**
   - `components/hero.tsx` (lines 46-56)
   - `components/navbar.tsx` (line 71)
   - Change `bg-amber-600` to your color

3. **Background Colors**
   - Currently black (`bg-black`)
   - Change to: `bg-gray-900` (dark gray), `bg-zinc-900` (charcoal), etc.

---

## 🖼️ Changing Images

### Step 1: Prepare Your Images

**Image Requirements:**
- **Format:** JPG or PNG
- **Hero background:** 1920x1080 pixels minimum
- **Dish photos:** 600x800 pixels minimum  
- **About section photo:** 600x700 pixels minimum

**Image Tips:**
- Use high-quality, well-lit photos
- Keep file sizes under 500KB (compress if needed)
- Use descriptive names: `peking-duck.jpg`, not `IMG_1234.jpg`

### Step 2: Upload Images

1. Open your project folder
2. Go to `/public` folder
3. Create a folder called `images` if it doesn't exist
4. Put your images inside `/public/images/`

### Step 3: Update Image Paths

**Hero Background Image:**
- **File:** `components/hero.tsx`
- **Line 23:** Change to: `url('/images/hero-background.jpg')`

**About Us Image:**
- **File:** `components/about.tsx`  
- **Line 60:** Change to: `src="/images/chef-photo.jpg"`

**Dish Images:**
- **File:** `components/gallery.tsx`
- **Lines 11, 16, 21, 26:** Change each to: `image: "/images/your-dish.jpg"`

---

## 📞 Changing Contact Information

### Phone Number

**Update in THREE places:**

1. **Navbar** (`components/navbar.tsx` line 71)
   \`\`\`
   href="tel:+1234567890"
   \`\`\`

2. **Contact Section** (`components/contact.tsx` line 44)
   \`\`\`
   href="tel:+1234567890"
   +1 (123) 456-7890
   \`\`\`

3. **Floating Button** (`components/floating-call-button.tsx` line 32)
   \`\`\`
   href="tel:+1234567890"
   \`\`\`

**Phone Number Format:**
- Use: `tel:+1234567890` (country code + number, no spaces)
- Display version can have formatting: `+1 (123) 456-7890`

### Address

**Location:** `components/contact.tsx` (lines 33-37)

Replace:
\`\`\`
123 Dragon Street
Chinatown, NY 10013
United States
\`\`\`

With your actual address.

### Email Address

**Location:** `components/footer.tsx` (line 63)

Change:
\`\`\`html
<a href="mailto:info@goldendragon.com">
  info@goldendragon.com
</a>
\`\`\`

### Opening Hours

**Location:** `components/contact.tsx` (lines 55-67)

Change the days and times to match your schedule:
\`\`\`html
<div className="flex justify-between">
  <span>Monday - Thursday</span>
  <span>11:00 AM - 9:00 PM</span>
</div>
\`\`\`

---

## 🍽️ Adding/Removing Menu Items

### To Add a New Dish

**Location:** `components/gallery.tsx` (after line 33)

1. Copy this template:
\`\`\`javascript
{
  id: 5,  // Increase number by 1
  name: "Your Dish Name",
  description: "Brief description of the dish",
  image: "/images/your-dish-photo.jpg",
  price: "35",  // Just the number
},
\`\`\`

2. Paste it after the last dish
3. Update all the information
4. Make sure to add a comma after the previous dish

### To Remove a Dish

1. Find the dish in `components/gallery.tsx`
2. Delete everything from `{` to `},`
3. Make sure the remaining dishes still have commas between them

### Changing Prices

Just change the number between the quotes:
\`\`\`javascript
price: "35",  // Change the number
\`\`\`

---

## 🔗 Changing Social Media Links

**Location:** `components/contact.tsx` (lines 75-93)

### Instagram
\`\`\`html
<a href="#">  {/* Change # to: https://instagram.com/yourrestaurant */}
\`\`\`

### TikTok
\`\`\`html
<a href="#">  {/* Change # to: https://tiktok.com/@yourrestaurant */}
\`\`\`

### To Add Facebook/Twitter
Copy an existing social media link block and change:
1. The `href` URL
2. The SVG icon (search "Facebook SVG icon" online)

---

## ⚠️ Common Issues & Solutions

### Issue: My changes don't appear

**Solution:**
1. Save the file (Ctrl+S or Cmd+S)
2. Refresh your browser (Ctrl+R or Cmd+R)
3. If using a development server, restart it

### Issue: Website looks broken after my changes

**Solution:**
1. Check if you accidentally deleted a `"` or `'` quote
2. Make sure all `{` have matching `}`
3. Check if you removed a comma by mistake
4. Undo your last change (Ctrl+Z) and try again

### Issue: Images not showing

**Solutions:**
1. Check image is in `/public/images/` folder
2. Check file name matches exactly (case-sensitive!)
3. Check image path starts with `/images/` not just `images/`
4. Try a different image to test

### Issue: Phone number not clickable on mobile

**Solution:**
- Make sure you're using format: `tel:+1234567890`
- No spaces in the tel: link
- Include country code (+1 for US)

### Issue: Colors not changing

**Solution:**
1. Make sure you changed both `text-` and `bg-` colors
2. Clear browser cache
3. Check spelling of color name
4. Try a different color to test

---

## 📞 Need Help?

If you're stuck:

1. **Check the comments** in the code - they explain what each part does
2. **Search online:** "How to change [thing] in React"
3. **Ask for help:** Share your specific error message
4. **Hire a developer** for complex customizations

---

## ✅ Testing Checklist

Before launching your website, test:

- [ ] All images load properly
- [ ] Phone numbers are clickable and dial correctly
- [ ] All text is your actual content (no "Golden Dragon" references)
- [ ] Opening hours are correct
- [ ] Address is correct
- [ ] Email links work
- [ ] Social media links go to your pages
- [ ] Menu prices are correct
- [ ] Website works on mobile phone
- [ ] Website works on tablet
- [ ] Website works on desktop

---

## 🎯 Quick Reference

| What to Change | File | Approximate Line |
|---------------|------|------------------|
| Restaurant name | navbar.tsx | 36 |
| Hero headline | hero.tsx | 35-38 |
| Hero image | hero.tsx | 23 |
| About story | about.tsx | 28-42 |
| About image | about.tsx | 60 |
| Menu items | gallery.tsx | 6-33 |
| Phone number | navbar.tsx, contact.tsx, floating-call-button.tsx | Various |
| Address | contact.tsx | 33-37 |
| Opening hours | contact.tsx | 55-67 |
| Social media | contact.tsx | 75-93 |
| Main colors | Search "amber" in all files | Throughout |

---

**Remember:** Always keep a backup before making changes!

**Pro Tip:** Make one small change at a time and test it before moving on.
