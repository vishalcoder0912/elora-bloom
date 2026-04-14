# Elora's PMU & Korean Esthetics - Lip Blushing Delhi Website

A premium, conversion-optimized landing page for Elora's PMU & Korean Esthetics, specializing in lip blushing services in Delhi.

## 🌸 Features

- **Premium Korean Aesthetic Design**: Elegant, modern UI with rose/gold color scheme
- **Video Background Hero**: Auto-playing video with scroll-based parallax effects
- **Scroll Animations**: Smooth reveal animations on all sections using Intersection Observer
- **SEO Optimized**: Meta tags optimized for "Lip Blushing in Delhi" keyword
- **Schema Markup**: Local Business and FAQPage schema for better search visibility
- **Conversion Focused**:
  - Sticky mobile CTA bar
  - WhatsApp integration
  - Lead capture form (Name, Phone, City, Date, Message)
  - Multiple CTA buttons throughout the page
- **Responsive Design**: Fully responsive across all devices
- **Fast Loading**: Optimized images and lazy loading

## 📋 Sections

1. **Hero** - Video background with trust badge and primary CTAs
2. **Trust Bar** - Key statistics (200+ clients, 3 years duration, etc.)
3. **Before/After Gallery** - Client transformations
4. **Benefits** - Why choose lip blushing (6 key benefits)
5. **Procedure Steps** - 4-step journey overview
6. **Pricing** - Three packages (Blush Nude ₹12,000, Ombre Blush ₹15,000, Bridal Blush ₹20,000)
7. **Testimonials** - Client reviews with Google verification
8. **FAQ** - Accordion-style frequently asked questions
9. **Lead Form** - Contact form with WhatsApp and Call buttons
10. **Footer** - Contact info and social links

## 🚀 Tech Stack

- **Framework**: TanStack Start (React-based SSR framework)
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages
- **Package Manager**: Bun

## 📦 Installation

```bash
# Install dependencies
bun install

# Start development server (recommended for local testing)
bun run dev

# Build for production
bun run build

# Preview production build (requires Wrangler)
bun run preview
```

**Note:** For local development and testing, use `bun run dev`. The preview command requires Wrangler CLI and is primarily for testing the production build locally.

## 🌐 Deployment (Vercel)

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `bun run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Vercel Configuration

Create `vercel.json` in root:

```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## 🔧 Environment Variables

No environment variables required for basic functionality.

## 📱 WhatsApp Integration

WhatsApp number: +91 98776 95827

The website includes:
- WhatsApp floating button (desktop)
- WhatsApp button in sticky mobile CTA
- WhatsApp link in lead form section
- Pre-filled message: "Hi Elora, I'm interested in Lip Blushing in Delhi. Can I book a consultation?"

## 🎨 Customization

### Colors
Edit `src/styles.css` to customize the color palette:
- `--rose-deep`: Primary rose color
- `--rose-mid`: Medium rose
- `--rose-light`: Light rose
- `--gold`: Accent gold
- `--ink`: Dark text
- `--petal`: Light background

### Content
Edit component files to update:
- Phone number: Search for `919877695827` and replace
- Pricing: Edit `src/components/Pricing.tsx`
- Testimonials: Edit `src/components/Testimonials.tsx`
- FAQ: Edit `src/components/FAQ.tsx`

### Video
Replace the background video:
1. Place your video file in `public/` folder
2. Update `src/components/HeroSection.tsx` line 38:
   ```tsx
   <source src="/your-video.mp4" type="video/mp4" />
   ```

## 📊 SEO

The website is optimized for the keyword "Lip Blushing in Delhi" with:
- Proper H1, H2 hierarchy
- Meta title and description
- Open Graph tags
- Local Business Schema
- FAQPage Schema
- Alt text on images
- Semantic HTML structure

## 📈 Schema Markup

Two schema types are implemented:
1. **BeautySalon** - Local business schema with ratings, address, hours
2. **FAQPage** - FAQ schema for rich snippets in search results

## 🎯 Conversion Optimization

- Multiple CTAs strategically placed
- Urgency elements ("Free consultation", "Response within 2 hours")
- Social proof (testimonials, ratings, client count)
- Trust signals (Korean certified, medical-grade numbing)
- Frictionless form (only required fields: Name, Phone)
- Direct WhatsApp access for instant communication

## 📞 Contact Information

- **Phone**: +91 98776 95827
- **Email**: info@eloraspmu.com
- **Locations**: London • Chandigarh • Delhi • Pune

## 📄 License

© 2024 Eloraspmu, All Rights Reserved.

## 👨‍💻 Development Approach

This website was built with a focus on:
1. **Performance**: Fast loading with optimized assets
2. **Conversion**: Multiple CTAs and frictionless contact options
3. **SEO**: Full optimization for local search
4. **UX**: Smooth animations and intuitive navigation
5. **Mobile-First**: Fully responsive design

## 🚀 Next Steps

1. **Deploy to Vercel**: Follow deployment instructions above
2. **Test on Mobile**: Verify all features work on mobile devices
3. **Update Images**: Replace placeholder images with real before/after photos
4. **Customize Content**: Update pricing, testimonials, and FAQ with real data
5. **Connect Form Backend**: Integrate form submissions to email/CRM
6. **Analytics**: Add Google Analytics or similar tracking
7. **Domain**: Connect custom domain (e.g., lipblushing.eloraspmu.com)

## 📝 Notes

- The video background may not autoplay on some mobile browsers due to OS restrictions
- Form submissions currently show a success message but don't send data (needs backend integration)
- Images are placeholders and should be replaced with actual client photos
- Testimonials are based on real Google reviews but can be updated with more recent ones
