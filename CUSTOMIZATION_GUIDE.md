# Customization Guide

## Quick Start Checklist

### 1. Personal Information

#### Contact Details
File: `components/Contact.tsx`

Replace placeholders:
```typescript
const contactInfo = [
  { label: 'Email', value: 'YOUR_EMAIL@example.com', link: 'mailto:YOUR_EMAIL@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/YOUR_PROFILE', link: 'https://linkedin.com/in/YOUR_PROFILE' },
  { label: 'GitHub', value: 'github.com/YOUR_USERNAME', link: 'https://github.com/YOUR_USERNAME' },
  { label: 'Location', value: 'YOUR_CITY, YOUR_COUNTRY', link: null },
];
```

#### Footer Social Links
File: `components/Footer.tsx`

Update URLs:
```typescript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_PROFILE' },
  { name: 'Email', url: 'mailto:YOUR_EMAIL@example.com' },
];
```

### 2. Resume Links

Update in two places:

**Hero Section** (`components/Hero.tsx`):
```tsx
<a href="/path-to-your-resume.pdf" download>
  Download Resume
</a>
```

**Contact Section** (`components/Contact.tsx`):
```tsx
<a href="/path-to-your-resume.pdf" download>
  Download Resume
</a>
```

Place your resume PDF in `public/resume.pdf` and link to `/resume.pdf`

### 3. Project Images

Create directory:
```
public/
  └── projects/
      ├── legal-ai.jpg
      ├── havenpath.jpg
      └── f1-agent.jpg
```

Recommended specs:
- Format: JPG or WebP
- Size: 1200x800px
- File size: Under 500KB
- Quality: 80-85%

### 4. Project Links

File: `components/Projects.tsx`

Update for each project:
```typescript
{
  github: 'https://github.com/YOUR_USERNAME/project-repo',
  demo: 'https://your-demo-url.com',
  image: '/projects/your-image.jpg',
}
```

If no demo available, you can:
- Remove the demo button
- Link to a video walkthrough
- Link to detailed README

### 5. GitHub Integration (Optional)

To display GitHub stats, you can add:
1. GitHub contribution graph using GitHub API
2. Pinned repositories
3. Activity stats

Consider using:
- [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)
- GitHub GraphQL API
- Next.js API routes for server-side fetching

### 6. SEO Optimization

File: `app/layout.tsx`

Update metadata:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Applied AI Engineer",
  description: "Your custom description",
  keywords: ["Your", "Keywords"],
  // Add more SEO fields
};
```

### 7. Color Scheme

File: `tailwind.config.ts`

Customize colors:
```typescript
colors: {
  primary: {
    500: '#YOUR_HEX_COLOR',
    // Adjust other shades
  },
}
```

### 8. Analytics (Recommended)

Add Google Analytics or Plausible:

1. Create `app/analytics.tsx`
2. Add tracking code
3. Import in `app/layout.tsx`

### 9. Contact Form Backend

Current form logs to console. To make it functional:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Formspree**
```bash
npm install @formspree/react
```

**Option 3: Custom API Route**
Create `app/api/contact/route.ts`

### 10. Content Updates

Update text content in respective component files:
- `Hero.tsx` - Introduction text
- `About.tsx` - About me description
- `Experience.tsx` - Work experience details
- `Projects.tsx` - Project descriptions

## Testing Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Resume downloads successfully
- [ ] Contact form works (if implemented)
- [ ] Mobile responsive on all screen sizes
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Fast loading time (< 3s)
- [ ] Works in Chrome, Firefox, Safari
- [ ] Accessible (test with screen reader)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Deploy automatically

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Custom Server
```bash
npm run build
npm start
```

## Advanced Customizations

### Add Blog Section
1. Use MDX for markdown content
2. Create `app/blog` directory
3. Add blog post components

### Add Dark/Light Toggle
1. Install `next-themes`
2. Create theme provider
3. Add toggle button in navbar

### Email Notifications
Integrate with:
- SendGrid
- Mailgun
- AWS SES

---

Need help? Check the main README or create an issue.
