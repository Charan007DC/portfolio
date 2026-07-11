# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Essential Customizations

### Update Your Information (5 minutes)

1. **Contact Details** - `components/Contact.tsx`
   - Replace email, LinkedIn, GitHub URLs
   - Update location

2. **Footer Links** - `components/Footer.tsx`
   - Update social media URLs

3. **Resume** 
   - Add `resume.pdf` to `public/` folder
   - Update links in `Hero.tsx` and `Contact.tsx`

### Add Project Images (10 minutes)

Add these images to `public/projects/`:
- `legal-ai.jpg` (1200x800px)
- `havenpath.jpg` (1200x800px)
- `f1-agent.jpg` (1200x800px)

Update GitHub/demo links in `components/Projects.tsx`

---

## 🛠️ Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📁 File Structure

```
ai-portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page (imports all sections)
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section with animation
│   ├── About.tsx        # About me
│   ├── Experience.tsx   # Timeline
│   ├── Projects.tsx     # Featured projects
│   ├── Skills.tsx       # Skills cards
│   ├── Certifications.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx
├── public/
│   ├── projects/        # Project screenshots
│   └── resume.pdf       # Your resume (add this)
└── tailwind.config.ts   # Design system config
```

---

## 🎨 Customization Priority

### Must Do (Before deployment)
1. ✅ Update all contact information
2. ✅ Add project images
3. ✅ Add resume PDF
4. ✅ Test all links

### Nice to Have
- Adjust color scheme in `tailwind.config.ts`
- Modify animation timings
- Update project descriptions
- Add more projects
- Integrate contact form backend

---

## 🚢 Deploy (Choose One)

### Vercel (Easiest)
1. Push to GitHub
2. Connect at [vercel.com](https://vercel.com)
3. Deploy (1 click)

### Other Options
- Netlify
- AWS Amplify
- Railway
- Custom server

See `DEPLOYMENT.md` for detailed instructions.

---

## 🐛 Common Issues

**Port 3000 already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

**Build fails:**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Images not loading:**
- Check file names (case-sensitive)
- Verify images are in `public/` folder
- Paths should start with `/` (e.g., `/projects/image.jpg`)

---

## 📚 Documentation

- [README.md](./README.md) - Overview and features
- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - Detailed customization
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 💡 Tips

- Use Chrome DevTools to inspect animations
- Test on mobile devices (or use DevTools device emulation)
- Run Lighthouse audit before deploying
- Optimize images before adding (< 500KB each)
- Keep git commits organized

---

## ✨ Features

- ✅ Dark futuristic theme
- ✅ Smooth animations (Framer Motion)
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Fast performance
- ✅ Accessible
- ✅ Production ready

---

Need help? Check the other documentation files or create an issue on GitHub.

Happy coding! 🎉
