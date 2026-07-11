# AI Engineer Portfolio - Dhaksha Charan

A premium, modern portfolio website showcasing AI engineering expertise, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Dark Theme**: Futuristic design inspired by cutting-edge AI platforms
- **Smooth Animations**: Premium animations using Framer Motion
- **Fully Responsive**: Optimized for all devices
- **Performance Optimized**: Fast loading with Next.js 15
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter & JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Contact Details** (`components/Contact.tsx`):
   - Update email, LinkedIn, GitHub links
   - Update location

2. **Social Links** (`components/Footer.tsx`):
   - Update GitHub, LinkedIn, Email URLs

3. **Projects** (`components/Projects.tsx`):
   - Replace placeholder project images
   - Update GitHub and demo links

4. **Resume Link**:
   - Update resume download link in Hero and Contact sections

### Add Project Images

Place your project images in the `public/projects/` directory:
- `legal-ai.jpg`
- `havenpath.jpg`
- `f1-agent.jpg`

### Modify Color Scheme

Edit `tailwind.config.ts` to customize the color palette.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ai-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience timeline
│   ├── Projects.tsx     # Featured projects
│   ├── Skills.tsx       # Skills cards
│   ├── Certifications.tsx
│   ├── Achievements.tsx
│   ├── Contact.tsx      # Contact form and info
│   ├── Footer.tsx       # Footer with social links
│   └── ScrollProgress.tsx
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind configuration
```

## Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Or manually:
1. Push to GitHub
2. Import project in Vercel
3. Deploy

## Performance Tips

- Images should be optimized (use WebP format)
- Keep images under 500KB each
- Use Next.js Image component for automatic optimization

## License

MIT License - feel free to use this template for your portfolio

## Contact

Dhaksha Charan - Applied AI Engineer

---

Built with ❤️ using Next.js and Framer Motion
