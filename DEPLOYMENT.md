# Deployment Guide

## Prerequisites

Before deploying, make sure:
- [ ] All personal information is updated
- [ ] Project images are added to `public/projects/`
- [ ] Resume PDF is added to `public/`
- [ ] GitHub, LinkedIn, and email links are correct
- [ ] Build completes successfully: `npm run build`

## Deployment Options

### 1. Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and offers the best experience:

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel auto-detects Next.js settings
7. Click "Deploy"

**Automatic Deployments:**
- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments
- Zero configuration needed

**Custom Domain:**
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### 2. Netlify

**Steps:**
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)
6. Click "Deploy site"

**Note:** Netlify requires the `@netlify/plugin-nextjs` plugin for full Next.js support.

### 3. GitHub Pages (Static Export)

Next.js App Router doesn't support static export by default. Skip this option.

### 4. Custom VPS/Server

**Requirements:**
- Node.js 18+
- PM2 or similar process manager

**Steps:**

1. Build the project:
```bash
npm run build
```

2. Transfer files to server (include these):
   - `.next` folder
   - `public` folder
   - `package.json`
   - `package-lock.json`
   - `next.config.ts`

3. Install dependencies on server:
```bash
npm ci --production
```

4. Start with PM2:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

5. Configure Nginx reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. AWS Amplify

1. Push code to GitHub
2. Go to AWS Amplify Console
3. Click "New app" → "Host web app"
4. Connect your repository
5. Build settings are auto-detected
6. Click "Save and deploy"

### 6. Railway

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway auto-detects Next.js
6. Deploy

## Environment Variables

If you add any environment variables (API keys, etc.), configure them in your deployment platform:

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Environment Variables

**Example .env.local (for local development only):**
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
```

## Post-Deployment Checklist

After deployment:
- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Click all CTA buttons
- [ ] Test contact form (if implemented)
- [ ] Verify resume downloads
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify all external links (GitHub, LinkedIn)
- [ ] Check page load speed
- [ ] Test on slow 3G network

## Performance Monitoring

### Google PageSpeed Insights
Check your site performance:
https://pagespeed.web.dev/

### Lighthouse (Chrome DevTools)
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit

### Goals:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Make sure all dependencies are installed

### Images Not Loading
- Verify images are in `public/` directory
- Check image paths (should start with `/`)
- Verify file names match exactly (case-sensitive)

### Slow Loading
- Optimize images (use WebP, compress)
- Enable Vercel's Image Optimization
- Check bundle size: `npm run build` shows sizes

### 404 Errors
- Verify all href links are correct
- Check for typos in routes
- Ensure files exist in public directory

## Updating Your Site

After initial deployment:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Commit: `git add . && git commit -m "Update"`
5. Push: `git push origin main`

Your site auto-deploys on Vercel/Netlify.

## Custom Domain Setup

### Vercel
1. Purchase domain (Namecheap, GoDaddy, Google Domains)
2. In Vercel: Settings → Domains → Add
3. Follow DNS instructions
4. Wait for SSL certificate (automatic)

### Common DNS Records
- Type: A, Name: @, Value: (Vercel IP)
- Type: CNAME, Name: www, Value: cname.vercel-dns.com

## Analytics Integration

### Google Analytics
1. Get GA4 measurement ID
2. Add to environment variables
3. Create `app/analytics.tsx`:

```typescript
import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

4. Import in `layout.tsx`

---

Questions? Check Next.js deployment docs: https://nextjs.org/docs/deployment
