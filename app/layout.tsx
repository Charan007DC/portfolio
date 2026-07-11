import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: "Dhaksha Charan - Applied AI Engineer",
  description: "Portfolio of Dhaksha Charan, Applied AI Engineer specializing in LLMs, RAG, AI Agents, Computer Vision, and end-to-end AI application development.",
  keywords: ["AI Engineer", "LLM", "RAG", "AI Agents", "Computer Vision", "Machine Learning", "Generative AI"],
  authors: [{ name: "Dhaksha Charan" }],
  openGraph: {
    title: "Dhaksha Charan - Applied AI Engineer",
    description: "Portfolio showcasing AI engineering projects and expertise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
