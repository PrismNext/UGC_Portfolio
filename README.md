# Geet | Faceless UGC Creator Portfolio

A modern portfolio website designed specifically for **faceless UGC creators** to pitch brands and marketing agencies.

## ✨ Features

- **Editorial Aesthetic**: Warm ivory (`#FAF8F5`), beige, taupe, dark charcoal, and editorial typography (Cormorant Garamond + Plus Jakarta Sans).
- **Faceless Visual Direction**: Curated lifestyle imagery (hands holding products, unboxing, flatlays, studio tripod setups) with zero face portraits.
- **Hero Section**: Large editorial headline, pulsing availability badge (`AVAILABLE FOR COLLABORATIONS`), and 3-card vertical 9:16 floating collage.
- **Interactive 9:16 Video Player Modal**: Clicking any card opens a 9:16 mobile review player featuring play/pause, restart, sound toggle, 3-second hook breakdown, and campaign deliverables.
- **Category Filter**: Filter work by Skincare, Beauty, Fashion, Lifestyle, Food, and Tech / Apps.
- **What I Create (Services)**: 6 service cards with hover animations.
- **Why Work With Me**: Asymmetric layout with large numbers and creator value propositions.
- **Process & Content Structure**: 4-step workflow and `HOOK → STORY → PRODUCT → CTA` formula breakdown.
- **Contact & Proposal Section**: 1-click email/Instagram copy buttons, and an interactive collaboration proposal form with celebration feedback.
- **Deploy-Ready**: Fully configured for Vercel, Netlify, or any static host.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (Vercel ready)
npm run build
```

---

## 📁 How to Update Videos & Content

All content is centralized in **`src/data/portfolioData.js`**. You do not need to hunt through components.

### 1. Adding or Editing a Video Project
Open `src/data/portfolioData.js` and edit the `projects` array:

```javascript
{
  id: "my-new-project",
  title: "Everyday Skincare Routine",
  category: "Skincare",
  brand: "Brand Name",
  thumbnail: "/media/my_thumbnail.jpg", // Place in public/media/
  video: "/media/my_video.mp4",         // Or external CDN/Vimeo/Cloudinary URL
  duration: "0:24",
  hook: "“The exact hook used to stop the scroll...”",
  format: "9:16 Vertical 4K",
  style: "GRWM / Problem-Solution",
  results: "4.2x ROAS",
  deliverables: "1x Hook Variation, 9:16 Raw + Cutdowns"
}
```

### 2. Updating Contact Information
Open `src/data/portfolioData.js` and change `creatorConfig`:

```javascript
export const creatorConfig = {
  name: "Geet",
  role: "Faceless UGC Creator",
  emailPlaceholder: "yourname@gmail.com",
  instagramPlaceholder: "@yourhandle",
  instagramUrl: "https://instagram.com/yourhandle",
  // ...
};
```

### 3. Adding Your Own Media Files
Put your 9:16 videos and images directly into the `public/media/` folder. They will automatically be accessible at `/media/filename.ext`.
