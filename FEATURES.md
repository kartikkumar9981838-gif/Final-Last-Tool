# XMLorph Features & Pricing

## What is XMLorph?

XMLorph is an AI-powered theme converter that transforms any HTML/CSS/XML/JSON theme into valid, production-ready Blogger XML format in seconds.

## Key Features

### Real-Time Conversion
- AI-powered Gemini 2.0 Flash model for instant conversion
- Converts HTML, CSS, XML, JSON, and ZIP files
- Maximum file size: 2MB
- Preserves all visual design, colors, fonts, and layouts

### Production-Ready Output
- Generates valid Blogger v2 XML
- Includes all required sections (header, main, sidebar, footer)
- Includes required widgets (Header, Blog, Attribution)
- Mobile responsive
- Compatible with Blogger Theme Editor

### Smooth Experience
- Clean, modern UI with no emojis - only SVG icons
- Drag-and-drop file upload
- Real-time conversion feedback
- One-click download and copy to clipboard
- Error-free conversions

## Pricing Plans

### Free Plan - $0 Forever
- **10 conversions lifetime limit**
- All format support (HTML, CSS, XML, JSON, ZIP)
- Blogger v2 compatible
- Standard conversion speed
- Community support
- No credit card required

**Perfect for:** Testing, small projects, occasional conversions

### Pro Plan - $10 One-Time
- **Unlimited conversions forever**
- Priority processing
- Faster deep conversion (3x speed)
- All format support
- Priority email support
- One-time payment - no recurring charges

**Perfect for:** Agencies, theme developers, frequent users

## How It Works

### Step 1: Upload Theme
Drop your HTML/CSS/XML/JSON file or ZIP archive (max 2MB). The system analyzes your theme structure.

### Step 2: AI Conversion
Google Gemini 2.0 Flash AI maps and converts your theme into clean, valid Blogger XML with all required elements.

### Step 3: Download XML
Get your polished XML file ready to upload directly to Blogger's Theme Editor.

## Conversion Tracking

### Free Plan Users
- Conversion counter stored in browser localStorage
- 10 lifetime conversions
- Warning appears when 3 or fewer conversions remain
- Error shown when limit is reached

### Pro Plan Users
- Unlimited conversions
- No tracking or limits
- Priority processing queue
- 3x faster conversion

## Technical Details

### Supported Input Formats
- **.HTML** - HyperText Markup Language
- **.CSS** - Cascading Style Sheets
- **.XML** - eXtensible Markup Language
- **.JSON** - JavaScript Object Notation
- **.ZIP** - Compressed archives with multiple files

### Blogger XML v2 Output
- Valid Blogger v2 XML template
- Proper namespace declarations
- Required sections with correct attributes
- CDATA-wrapped CSS
- Mobile responsive
- Upload-ready (no additional edits needed)

### AI Model
- **Model:** Google Gemini 2.0 Flash
- **Temperature:** 0.1 (deterministic output)
- **Max tokens:** 8192
- **Processing time:** 2-5 seconds (standard), <2 seconds (pro)

## Quota Management

Quotas are tracked per browser using localStorage:

```javascript
{
  conversions: 0,      // Number of conversions used
  isPro: false,        // Pro plan status
  lastReset: 1234567890
}
```

Users can upgrade from Free to Pro anytime.

## Security & Privacy

- Files processed in memory, never stored
- HTTPS encryption for all transfers
- No data collection or analytics
- No cookies or tracking
- 100% file deletion after conversion

## Environment Setup

Required environment variable:
```
GEMINI_API_KEY=your_gemini_api_key_here
```

Get free key from: https://aistudio.google.com

## Deployment

Fully compatible with Vercel free tier:
- No special configuration needed
- Serverless API route
- Automatic scaling
- $0 monthly cost

Deploy to Vercel: `vercel deploy`
