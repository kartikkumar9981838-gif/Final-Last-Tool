# XMLorph - Blogger XML Converter

**Drop Any Theme. Get Blogger XML.**

Convert any HTML theme to clean, valid Blogger XML in seconds using AI-powered conversion powered by Google Gemini 2.0 Flash.

## Features

✨ **AI-Powered Conversion** - Smart AI understands your theme structure and converts it with maximum accuracy
🎯 **Blogger v2 Compatible** - Generates clean, valid Blogger v2 XML that works perfectly every time
📁 **All Formats Supported** - HTML, CSS, XML, JSON & more. We support all popular web formats
⚡ **Instant Download** - Convert and download your XML file in seconds. No waiting, no queues
🎁 **100% Free** - All core features are completely free. No hidden charges, ever
💎 **Preserves Your Design** - Your theme's layout, styles, and structure are preserved perfectly

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js + React Three Fiber
- **AI**: Google Gemini 2.0 Flash API
- **Language**: TypeScript
- **Deployment**: Vercel (free tier)

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- Google Gemini API key (free from https://aistudio.google.com)

### Installation

```bash
# Clone and install
git clone <repo-url>
cd xmlorph
pnpm install

# Copy environment template
cp .env.example .env.local

# Add your Gemini API key
# Edit .env.local and add: GEMINI_API_KEY=your_key_here

# Start dev server
pnpm dev
```

Visit `http://localhost:3000` to see the application.

## Environment Variables

**Required:**
- `GEMINI_API_KEY` - Your Google Gemini API key for theme conversion

See `.env.example` for detailed setup instructions.

## Building for Production

```bash
# Build the project
pnpm build

# Start production server
pnpm start
```

## Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "Add New" → "Project"
   - Select your GitHub repository

3. **Configure Environment Variables**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key

4. **Deploy**
   - Click "Deploy"
   - Done! Your app is live on Vercel's free tier

## API Endpoint

### POST /api/convert

Converts an uploaded theme file to Blogger XML using Gemini AI.

**Request:**
```json
{
  "fileContent": "string (HTML/CSS/XML file content)",
  "fileName": "string (original filename)"
}
```

**Response (Success):**
```json
{
  "xml": "string (valid Blogger v2 XML)"
}
```

**Response (Error):**
```json
{
  "error": "string (error message)"
}
```

**Constraints:**
- Max file size: 2MB
- Supported formats: .html, .css, .xml, .json, .zip, .rw
- All processing happens in real-time, files are not stored

## Design

- **Color Palette**: Pure black (#000000) background with violet (#7c3aed) and cyan (#06b6d4) accents
- **Typography**: Inter font exclusively
- **UI Pattern**: Glassmorphism dark cards with subtle borders
- **3D Element**: Interactive Three.js geometry in hero section
- **Animations**: Smooth fade-in and floating effects

## File Structure

```
xmlorph/
├── app/
│   ├── api/convert/route.ts      # Gemini API integration
│   ├── globals.css                # Design tokens & animations
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── components/
│   ├── navbar.tsx                 # Navigation bar
│   ├── footer.tsx                 # Footer
│   └── sections/
│       ├── hero.tsx               # Hero with 3D canvas & upload
│       ├── how-it-works.tsx       # Process steps
│       ├── features.tsx           # Feature cards
│       ├── supported-formats.tsx  # Format showcase
│       ├── pricing.tsx            # Pricing plans
│       ├── faq.tsx                # FAQ accordion
│       └── cta-banner.tsx         # Call-to-action
└── public/                         # Static assets
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (responsive design)

## Performance

- Optimized for Core Web Vitals
- Static page generation where possible
- Image optimization with Next.js
- CSS with Tailwind for minimal overhead
- Three.js with efficient LOD for 3D scene

## Security

- API keys secured via environment variables
- No file storage on server (in-memory processing)
- Files deleted immediately after conversion
- No tracking or analytics
- HTTPS only on production

## License

Created for XMLorph. All rights reserved.

## Support

For issues and feature requests, please contact the XMLorph team.

---

**Made with ♥ by XMLorph Team**

Powered by Google Gemini 2.0 Flash
