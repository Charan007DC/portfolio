'use client';

import AnimatedBackground from '@/components/AnimatedBackground';
import PersonalNavbar from '@/components/PersonalNavbar';
import PersonalHero from '@/components/PersonalHero';
import PersonalAbout from '@/components/PersonalAbout';
import WhatIBuild from '@/components/WhatIBuild';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificatesSection from '@/components/CertificatesSection';
import SimpleContact from '@/components/SimpleContact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen noise">
      <AnimatedBackground />
      <PersonalNavbar />
      <PersonalHero />
      <PersonalAbout />
      <WhatIBuild />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <SimpleContact />
      <Footer />
    </main>
  );
}
