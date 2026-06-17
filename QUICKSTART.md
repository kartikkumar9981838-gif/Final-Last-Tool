# XMLorph - Quick Start Guide

## 5-Minute Setup

### Step 1: Get API Key (2 minutes)
1. Visit https://aistudio.google.com
2. Sign in with Google account
3. Click "Get API Key"
4. Copy your API key

### Step 2: Deploy to Vercel (2 minutes)
1. Push code to GitHub
2. Visit https://vercel.com/new
3. Import your GitHub repository
4. Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your API key from Step 1
5. Click Deploy

### Step 3: Test Conversion (1 minute)
1. Open your Vercel deployment URL
2. Download the sample theme: https://yoururl.com/sample-theme.html
3. Upload the sample to XMLorph
4. Download the generated Blogger XML
5. Test in Blogger Theme Editor

## File Sizes
- Project size: ~2 MB (after dependencies)
- Build output: ~500 KB
- Sample theme: 4.4 KB

## What's Included

### Frontend Components
- Hero section with file upload
- 3-step how-it-works guide
- 6 feature cards
- Supported formats showcase
- Simple dual pricing (Free/Pro)
- FAQ accordion
- Call-to-action banner
- Footer with links

### Backend
- `/api/convert` - Gemini API integration
- Blogger XML v2 generation
- Error handling
- Security validation

### Utilities
- Quota tracking system
- Conversion counter
- localStorage persistence
- Pro upgrade support

## Key Features

### Conversions
- Free: 10 lifetime
- Pro: Unlimited ($10 one-time)

### Formats
- HTML, CSS, XML, JSON, ZIP
- Max 2MB per file

### Output
- Valid Blogger v2 XML
- Mobile responsive
- All required sections
- Upload-ready

## Troubleshooting

### API Key Not Working
- Verify key in Vercel environment variables
- Check key from aistudio.google.com
- Ensure correct spelling

### Conversion Fails
- File size under 2MB?
- Format supported (HTML/CSS/XML/JSON)?
- Gemini API quota available?

### Mobile Layout Issues
- Clear browser cache
- Try different browser
- Check viewport settings

## File Reference

| File | Purpose |
|------|---------|
| `/app/api/convert/route.ts` | Gemini API endpoint |
| `/components/sections/hero.tsx` | Upload interface & quota |
| `/lib/conversion-quota.ts` | Quota tracking |
| `/public/sample-theme.html` | Test theme |

## Important Notes

- Conversions tracked per browser
- localStorage used for quota
- No server-side data storage
- Files deleted after conversion
- 100% privacy maintained

## Support

- GitHub Issues: GitHub repository
- Email: Support via Vercel
- Docs: Read FEATURES.md

## Production Checklist

- [ ] Gemini API key added to Vercel
- [ ] Domain configured (optional)
- [ ] Sample theme tested
- [ ] Free → Pro upgrade works
- [ ] Mobile layout verified
- [ ] Download functionality tested

## Next Steps

1. Deploy to production
2. Share URL with users
3. Monitor API usage
4. Gather user feedback
5. Iterate based on feedback
