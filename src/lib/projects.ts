export type Project = {
  title: string
  tagline: string
  description: string
  tags: string[]
  badge?: string
  link?: { label: string; href: string }
  year: string
  featured?: boolean
  status?: "active" | "completed"
}

export const PROJECTS: Project[] = [
  // Featured always first
  {
    title: "M4Health",
    tagline: "The first large-scale benchmark for AI-generated health misinformation in short-form video.",
    description:
      "Co-authored and built the data pipeline for M4Health, a 436K-video benchmark spanning TikTok, YouTube Shorts, and Reddit across nutrition, fitness, mental health, and wellness. Designed to stress-test large vision-language models on credibility assessment, AI-generation detection, and theme classification. Ongoing research funded by LMU Undergraduate Research Stipend.",
    tags: ["Python", "Data Pipelines", "Vision-Language Models", "Research", "NLP"],
    badge: "Submitted · ICWSM 2026",
    link: { label: "Paper (coming soon)", href: "#" },
    year: "2025",
    featured: true,
    status: "active",
  },

  // Sorted by year descending
  {
    title: "CodeFades",
    tagline: "A real-time 1v1 competitive coding platform where two players race to solve the same problem.",
    description:
      "Leading frontend and backend development on CodeFades, a competitive programming platform where players queue, get matched by Elo rating, and race to solve the same coding challenge in real time. Features a live in-browser code editor, Docker-sandboxed code execution, WebSocket-powered match sync, and a curriculum page. Built with Next.js, WebSockets, and Docker as a 3-person senior capstone.",
    tags: ["Next.js", "WebSockets", "Docker", "Full-Stack", "Real-Time"],
    badge: "Senior Capstone II",
    year: "2026",
    status: "active",
  },
  {
    title: "NeuroConnect",
    tagline: "A full-stack mental health support app with journaling, habit tracking, and survey-based resource matching.",
    description:
      "Contributed across both React frontend and Node.js/Supabase backend as part of a 4-person senior capstone team. NeuroConnect provides users with journaling tools, habit formation, and a survey-driven system to match them with verified mental health resources. Delivered with a complete software development lifecycle including SRS, SDD, and user manual documentation.",
    tags: ["React", "Node.js", "Supabase", "Full-Stack"],
    badge: "Senior Capstone I",
    year: "2025",
    status: "completed",
  },
  {
    title: "Logos",
    tagline: "A statically-typed programming language built to encode and reason about mathematical theorems.",
    description:
      "Collaborated with three classmates to design and build Logos from scratch, a statically-typed, expression-oriented language for representing logical and mathematical statements. Features include sum and product types, lazy evaluation, user-defined classes and interfaces, and a package system for common math definitions like real numbers and constants.",
    tags: ["JavaScript", "Compilers", "Language Design", "Type Systems"],
    link: { label: "View on GitHub", href: "https://github.com/rTarazi1105/Logos" },
    year: "2025",
    status: "completed",
  },
  {
    title: "JesuitApp",
    tagline: "A mobile community app for the Jesuit House at LMU, still in daily use.",
    description:
      "Built the frontend for a mobile app serving the Jesuit House community at LMU, partnering with Isaiah Pajarillo who handled the backend. Features include absence submissions, guest management, photo uploads, and Mass schedule editing, with an admin panel for community staff. Built with React Native and Expo, with Firebase handling auth, file storage, and real-time data. Demoed to Fr. Eddie Siebert, S.J. and still in use today.",
    tags: ["React Native", "Expo", "Firebase", "Mobile"],
    year: "2024",
    status: "completed",
  },
]
