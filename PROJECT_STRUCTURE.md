# Project Structure Documentation

## Overview

This portfolio is built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. It follows modern React and Next.js best practices with a component-based architecture.

## Directory Structure

```
ai-portfolio/
├── app/                    # Next.js App Router
├── components/             # React components
├── public/                 # Static assets
├── node_modules/           # Dependencies (auto-generated)
├── .next/                  # Build output (auto-generated)
└── configuration files
```

---

## 📁 `/app` Directory

Next.js App Router directory - handles routing, layouts, and pages.

### `layout.tsx`
- **Purpose**: Root layout for entire application
- **Features**:
  - Loads custom fonts (Inter, JetBrains Mono)
  - Sets HTML metadata (title, description, keywords)
  - Defines SEO properties
  - Wraps all pages
- **Modify when**: Changing site-wide metadata, adding fonts, global providers

### `page.tsx`
- **Purpose**: Homepage (main landing page)
- **Features**:
  - Imports all section components
  - Composes the full single-page layout
  - Includes scroll progress indicator
- **Modify when**: Reordering sections, adding/removing sections

### `globals.css`
- **Purpose**: Global CSS styles
- **Features**:
  - Tailwind directives
  - Custom utility classes (.glass-effect, .gradient-border)
  - Base styles (body background, scroll behavior)
- **Modify when**: Adding global styles, custom animations

---

## 🧩 `/components` Directory

Reusable React components for each section of the portfolio.

### Component Architecture

Each component follows this pattern:
1. **'use client'** directive (for Framer Motion)
2. **Framer Motion hooks** (useInView, useRef)
3. **Data arrays** (for rendering lists)
4. **Motion components** (for animations)
5. **Responsive design** (mobile-first approach)

---

### `Navbar.tsx`
- **Purpose**: Top navigation bar
- **Features**:
  - Fixed position with scroll effects
  - Active section highlighting
  - Smooth scroll navigation
  - Glass morphism effect
  - Mobile responsive
- **Props**: None
- **State**:
  - `scrolled`: tracks if user has scrolled
  - `activeSection`: tracks current section
- **Modify when**: Adding/removing nav items, changing styling

### `Hero.tsx`
- **Purpose**: First section (above the fold)
- **Features**:
  - Animated particle network (canvas)
  - Name and title display
  - Introduction text
  - CTA buttons (View Projects, Download Resume)
  - Animated orbital rings
- **Key Elements**:
  - Canvas animation using useEffect
  - Gradient backgrounds
  - Framer Motion text animations
- **Modify when**: Changing intro text, updating name/title

### `About.tsx`
- **Purpose**: About me section
- **Features**:
  - Professional biography
  - Statistics cards (projects, technologies, etc.)
  - Two-column layout (text + stats)
  - Entrance animations
- **Data**: Stats array (customizable)
- **Modify when**: Updating bio, changing statistics

### `Experience.tsx`
- **Purpose**: Work experience timeline
- **Features**:
  - Vertical timeline design
  - Experience cards with highlights
  - Animated entrance
  - Responsive timeline
- **Data**: `experiences` array
- **Modify when**: Adding new experience, updating highlights

### `Projects.tsx`
- **Purpose**: Showcase featured projects
- **Features**:
  - Detailed project cards
  - Tech stack tags
  - Architecture description
  - Challenges & solutions
  - GitHub + Demo links
  - Project images placeholder
- **Data**: `projects` array (3 projects)
- **Modify when**: 
  - Adding new projects
  - Updating descriptions
  - Changing GitHub/demo links
  - Adding project images

### `Skills.tsx`
- **Purpose**: Display technical skills
- **Features**:
  - Categorized skill cards
  - Icon representation
  - Animated skill items
  - Proficiency indicators
- **Data**: `skillCategories` array
- **Categories**:
  - Languages
  - AI & Machine Learning
  - LLM Engineering
  - Backend Development
  - Development Tools
- **Modify when**: Adding skills, reorganizing categories

### `Certifications.tsx`
- **Purpose**: Display certifications
- **Features**:
  - Premium certification cards
  - Date badges
  - Skills tags
  - Grid layout
- **Data**: `certifications` array
- **Modify when**: Adding new certifications

### `Achievements.tsx`
- **Purpose**: Highlight achievements
- **Features**:
  - Achievement cards with icons
  - Featured badge for key achievements
  - Three-column grid
- **Data**: `achievements` array
- **Modify when**: Adding new achievements

### `Contact.tsx`
- **Purpose**: Contact information & form
- **Features**:
  - Contact information cards
  - Contact form (frontend only)
  - Resume download button
  - Two-column layout
- **Data**: `contactInfo` array
- **State**: `formData` for form handling
- **Modify when**:
  - Updating contact info
  - Implementing form backend
  - Adding form validation

### `Footer.tsx`
- **Purpose**: Bottom footer
- **Features**:
  - Social media links
  - Copyright notice
  - Tech stack mention
- **Data**: `socialLinks` array
- **Modify when**: Updating social links

### `ScrollProgress.tsx`
- **Purpose**: Page scroll indicator
- **Features**:
  - Fixed top bar
  - Animated based on scroll position
  - Gradient styling
- **Uses**: Framer Motion's `useScroll` hook
- **Modify when**: Changing color/style

---

## 🎨 `/public` Directory

Static assets served directly by Next.js.

### Structure
```
public/
├── projects/           # Project screenshots
│   ├── legal-ai.jpg   # Add your image
│   ├── havenpath.jpg  # Add your image
│   └── f1-agent.jpg   # Add your image
├── resume.pdf         # Add your resume
└── *.svg              # Default Next.js icons
```

### Image Guidelines
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 1200x800px (3:2 ratio)
- **File size**: < 500KB
- **Naming**: Use lowercase, hyphens for spaces

---

## ⚙️ Configuration Files

### `tailwind.config.ts`
- **Purpose**: Tailwind CSS configuration
- **Customizations**:
  - Custom color palette (primary, dark)
  - Custom fonts (Inter, JetBrains Mono)
  - Custom animations (fade-in, slide-up, float, glow)
  - Extended theme properties
- **Modify when**: Changing design system colors/fonts

### `tsconfig.json`
- **Purpose**: TypeScript configuration
- **Key settings**: Path aliases (@/), strict mode
- **Modify**: Rarely (unless changing TS settings)

### `next.config.ts`
- **Purpose**: Next.js configuration
- **Current**: Default settings
- **Modify when**: Adding image domains, environment variables

### `package.json`
- **Purpose**: Dependencies and scripts
- **Scripts**:
  - `dev`: Development server
  - `build`: Production build
  - `start`: Production server
  - `lint`: ESLint
- **Modify when**: Adding new dependencies

### `.gitignore`
- **Purpose**: Files to exclude from Git
- **Includes**: node_modules, .next, .env files
- **Modify**: Rarely

---

## 🔄 Data Flow

1. **User visits site** → `app/layout.tsx` loads
2. **Layout renders** → `app/page.tsx` loads
3. **Page renders** → All components mount
4. **Scroll occurs** → Navbar updates, sections animate in
5. **User interaction** → Buttons navigate, forms submit

---

## 🎭 Animation System

### Framer Motion Patterns

**1. Fade In**
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

**2. Slide Up**
```tsx
initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
```

**3. Staggered Children**
```tsx
delay: index * 0.1  // Each item animates slightly later
```

### Animation Triggers
- **On Mount**: Hero section
- **On Scroll (useInView)**: All other sections
- **On Hover**: Buttons, cards
- **On Scroll Progress**: ScrollProgress component

---

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0078e6 to #4da9ff)
- **Dark**: Deep blue/black (#000000 to #1a1d2e)
- **Text**: White/Gray shades

### Typography
- **Headings**: Inter (sans-serif)
- **Body**: Inter
- **Code**: JetBrains Mono (monospace)

### Spacing
- Sections: py-20 lg:py-32 (80px to 128px)
- Container: max-w-7xl mx-auto px-4

### Effects
- **Glass**: rgba background + backdrop blur
- **Gradients**: Linear gradients for emphasis
- **Shadows**: Subtle glows on hover

---

## 🚀 Performance Considerations

1. **Code Splitting**: Automatic with Next.js
2. **Image Optimization**: Use Next.js Image component (optional)
3. **Lazy Loading**: Animations trigger on scroll
4. **Bundle Size**: Monitored in build output
5. **SSG**: Static generation for fast loads

---

## 🛠️ Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Edit components
3. **Hot reload**: Changes reflect instantly
4. **Test**: Check browser
5. **Build**: `npm run build` before deploy
6. **Deploy**: Push to GitHub → Auto-deploy

---

## 📚 Learning Resources

- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/docs
- **React**: https://react.dev

---

## 🔍 Common File Locations

| What | Where |
|------|-------|
| Change site title | `app/layout.tsx` |
| Update contact info | `components/Contact.tsx`, `components/Footer.tsx` |
| Add projects | `components/Projects.tsx` data array |
| Modify colors | `tailwind.config.ts` |
| Add global CSS | `app/globals.css` |
| Project images | `public/projects/` |
| Resume PDF | `public/resume.pdf` |

---

This structure is designed for easy customization while maintaining clean, production-ready code. Each component is self-contained and can be modified independently.
