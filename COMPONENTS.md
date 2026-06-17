# XMLorph Component Guide

## Component Architecture

All components are built with React 19 and TypeScript, using shadcn/ui components and Tailwind CSS v4.

## Component Inventory

### Layout Components

#### `app/layout.tsx`
- **Purpose**: Root layout wrapper
- **Features**: 
  - Font configuration (Inter)
  - Metadata setup
  - Dark theme configuration
- **Children**: All pages and routes

#### `app/page.tsx`
- **Purpose**: Home page entry point
- **Features**:
  - Client-side component mounting
  - Section imports
- **Sections**: All 8 page sections

---

### Navigation Components

#### `components/navbar.tsx`
- **Purpose**: Fixed top navigation bar
- **Props**: None
- **Features**:
  - Logo with gradient icon
  - Navigation links (Features, How It Works, Formats, Pricing, FAQ, Docs)
  - Sign In button (transparent)
  - Get Started CTA button (violet)
  - Mobile hamburger menu
  - Responsive design
- **Styles**: Fixed position, pure black background, subtle border-bottom

---

### Section Components

#### `components/sections/hero.tsx`
- **Purpose**: Hero section with 3D graphics and file upload
- **Features**:
  - Three.js 3D canvas with interactive geometry
  - Floating code snippet cards
  - File upload zone with drag-and-drop
  - Conversion profile selector
  - Feature pills (Auto Mapping, Clean Output, Error Free, SEO Friendly)
  - Trust bar with security features
  - XML preview on conversion
  - Download and copy functionality
- **Styles**: Full viewport height, centered content
- **State**: File selection, loading, XML preview, errors

#### `components/sections/how-it-works.tsx`
- **Purpose**: Three-step process visualization
- **Features**:
  - Step cards (01, 02, 03)
  - Icons for each step
  - Dotted connector lines with animated dots
  - Hover effect animations
- **Steps**:
  1. Upload Theme
  2. AI Conversion
  3. Download XML

#### `components/sections/features.tsx`
- **Purpose**: Feature showcase grid
- **Features**: 6 feature cards in 3x2 grid
  - Brain icon: AI-Powered Conversion
  - Blogger B icon: Blogger v2 Compatible
  - Folder icon: All Formats Supported
  - Zap icon: Instant Download
  - Gift icon: 100% Free
  - Diamond icon: Preserves Your Design
- **Styles**: Icon-text layout with hover effects

#### `components/sections/supported-formats.tsx`
- **Purpose**: Display supported file formats
- **Features**: 4 format cards in horizontal grid
  - .HTML (Orange)
  - .CSS (Cyan)
  - .XML (Violet)
  - .JSON (Green)
- **Styles**: Large format text with descriptions

#### `components/sections/pricing.tsx`
- **Purpose**: Pricing tiers display
- **Features**: 3 pricing cards
  - **Free**: $0/forever
  - **Pro**: $19/month (highlighted with "Most Popular" badge)
  - **Enterprise**: Custom/month
- **Each Card Includes**:
  - Title and subtitle
  - Price display
  - 4 feature checkmarks
  - CTA button
- **Styles**: Pro plan has violet border and glow effect

#### `components/sections/faq.tsx`
- **Purpose**: Frequently Asked Questions accordion
- **Features**:
  - 6 FAQ items
  - Click to expand/collapse
  - Plus/Minus icons
  - Smooth transitions
- **Questions Cover**:
  - XML compatibility
  - Supported formats
  - API access
  - Free conversion limits
  - Data security
  - Large file handling

#### `components/sections/cta-banner.tsx`
- **Purpose**: Call-to-action section with decorative elements
- **Features**:
  - Gradient background (dark purple to dark blue)
  - Wireframe polygon decorations
  - "Convert Now" and "Learn More" buttons
  - Centered text layout

---

### Footer Components

#### `components/footer.tsx`
- **Purpose**: Page footer
- **Features**:
  - **Column 1**: Logo, description, "Powered by Gemini" badge
  - **Column 2**: PRODUCT links
  - **Column 3**: RESOURCES links
  - **Column 4**: COMPANY links
  - **Social Section**: Twitter, YouTube, GitHub, LinkedIn icons
  - **Newsletter**: Email subscription form
  - **Bottom Bar**: Copyright and made-with-love text
- **Styles**: Multi-column grid, responsive on mobile

---

### API Components

#### `app/api/convert/route.ts`
- **Purpose**: Serverless function for theme conversion
- **Method**: POST
- **Input**:
  ```json
  {
    "fileContent": "string",
    "fileName": "string"
  }
  ```
- **Output**:
  ```json
  {
    "xml": "string"
  }
  ```
- **Features**:
  - Gemini 2.0 Flash integration
  - System instruction with strict rules
  - Error handling
  - XML cleanup (removes markdown code fences)
- **Environment**: Requires `GEMINI_API_KEY`

---

## Styling System

### Design Tokens (CSS Variables)

```css
--background: #000000;
--foreground: #ffffff;
--primary: #7c3aed;        /* Violet */
--secondary: #06b6d4;      /* Cyan */
--card: #0a0818;
--muted-foreground: #8b8ba8;
--border: #1a1a2e;
```

### Tailwind Utilities

- **Spacing**: `gap-4`, `p-6`, `my-8`
- **Colors**: `bg-black`, `text-white`, `border-[#1a1a2e]`
- **Typography**: `font-inter`, `text-sm`, `font-600`
- **Effects**: `hover:border-[#7c3aed]`, `transition-colors`

### Custom Classes

- `.float-animation` - Floating animation (4s)
- `.float-animation-delayed` - Floating with 2s delay
- `.fade-in-up` - Fade in and slide up effect
- `.sr-only` - Screen reader only text

---

## Component Communication

### Data Flow

1. **Page.tsx** imports all sections
2. **Each section** is self-contained
3. **Hero section** handles:
   - File upload state
   - API calls to `/api/convert`
   - XML preview and download
4. **Other sections** are static/presentation

### State Management

- Hero section uses React `useState`
- No global state management needed
- Each section manages its own state

---

## Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3 columns, full layouts)

All components use Tailwind's `md:` and `lg:` prefixes.

---

## Performance Optimizations

1. **Code Splitting**: Each section is separate component
2. **Tree Shaking**: Unused code removed in build
3. **Image Optimization**: SVG icons used for navbar/footer
4. **Three.js Optimization**: Efficient geometry and LOD
5. **CSS Minimization**: Tailwind removes unused styles

---

## Accessibility Features

- Semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`)
- ARIA labels on buttons and links
- Color contrast ratios > 4.5:1
- Keyboard navigation support
- Screen reader optimization
- Mobile-friendly touch targets

---

## Testing Components

To test components locally:

```bash
# Run dev server
pnpm dev

# Navigate to http://localhost:3000

# Test sections:
# - Hero: Upload a file, check conversion
# - FAQ: Click items to expand/collapse
# - Pricing: Hover on Pro plan
# - Navigation: Test mobile menu on small viewport
# - Footer: Check social link functionality
```

---

## File Sizes

| Component | Size |
|-----------|------|
| hero.tsx | ~489 lines |
| footer.tsx | ~148 lines |
| pricing.tsx | ~124 lines |
| faq.tsx | ~87 lines |
| features.tsx | ~95 lines |
| how-it-works.tsx | ~99 lines |
| navbar.tsx | ~98 lines |
| supported-formats.tsx | ~67 lines |
| cta-banner.tsx | ~57 lines |
| api/convert/route.ts | ~82 lines |

---

## Dependencies Used in Components

- **React 19** - UI framework
- **Next.js 16** - Framework and routing
- **Three.js** - 3D graphics (hero section)
- **@react-three/fiber** - React wrapper for Three.js
- **@react-three/drei** - Helper library
- **Tailwind CSS v4** - Styling
- **TypeScript** - Type safety

---

## Component Maintenance

### Adding New Sections

1. Create file in `components/sections/new-section.tsx`
2. Import in `app/page.tsx`
3. Add to main component return
4. Follow existing component patterns

### Modifying Styles

1. Edit Tailwind classes in component JSX
2. Or define custom CSS in `app/globals.css`
3. Use design token variables where possible

### Updating API Endpoint

1. Modify `app/api/convert/route.ts`
2. Test with different file formats
3. Check error handling

---

**Components are production-ready and fully functional.** ✅
