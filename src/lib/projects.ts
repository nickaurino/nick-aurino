export type Project = {
  title: string
  tagline: string
  description: string
  tags: string[]
  badge?: string
  link?: { label: string; href: string }
  /** Extra links (e.g. paper + DOI) surfaced in the project modal. */
  links?: { label: string; href: string }[]
  year: string
  featured?: boolean
  status?: "active" | "completed"
}

export const PROJECTS: Project[] = [
  // Current work — featured first
  {
    title: "Dabble",
    tagline: "A hobby discovery app that helps you explore new interests, spin for ideas, and track what you're trying.",
    description:
      "Dabble is my main current project, a warm and personal app for people who want to explore new hobbies. It helps you discover interests, spin for fresh ideas when you're not sure what to try, and organize everything by status like \"Want to Try,\" \"Trying It,\" and \"Done It.\" I built it because endless scrolling has made it too easy to avoid ever being bored, and I think boredom actually matters. It's where curiosity starts and where real hobbies come from. Dabble is meant to nudge you off the feed and into trying something for yourself. Built with React Native and Expo on Firebase.",
    tags: ["React Native", "Expo", "Firebase", "TypeScript", "iOS"],
    // App Store status — update the badge/link below once it's live or in review.
    badge: "iOS · App Store soon",
    link: { label: "App Store (coming soon)", href: "#" },
    year: "2026",
    featured: true,
    status: "active",
  },
  {
    title: "M4Health",
    tagline: "The first large-scale benchmark for AI-generated health misinformation in short-form video.",
    description:
      "Co-authored and built the data pipeline for M4Health, a 500K+-video benchmark spanning TikTok, YouTube Shorts, and Reddit across nutrition, fitness, mental health, and wellness. It's designed to stress-test large vision-language models on credibility assessment, AI-generation detection, and theme classification. The paper was published in the MisD workshop at ICWSM 2026, and the project won the Hannon Library Grand Prize for Undergraduate Research at LMU.",
    tags: ["Python", "Data Pipelines", "Vision-Language Models", "Research", "NLP"],
    badge: "Published · MisD @ ICWSM 2026",
    link: { label: "Read the paper", href: "https://workshop-proceedings.icwsm.org/abstract.php?id=2026_43" },
    links: [
      { label: "Read the paper", href: "https://workshop-proceedings.icwsm.org/abstract.php?id=2026_43" },
      { label: "DOI", href: "https://doi.org/10.36190/2026.43" },
    ],
    year: "2025",
    featured: true,
    status: "completed",
  },
  {
    title: "Cadence",
    tagline: "An iOS app that detects your walking or running cadence in real time and matches music to your movement.",
    description:
      "A fitness music app concept for iOS that reads your real-time walking or running cadence and helps line up music to the pace of your stride. The idea: the right song at the right tempo, automatically, so your playlist moves with you instead of against you. Built natively for iOS with React Native and Expo.",
    tags: ["React Native", "Expo", "iOS", "Apple Music"],
    badge: "Current · iOS",
    year: "2026",
    status: "active",
  },

  // Sorted by year descending
  {
    title: "CodeFades",
    tagline: "A real-time 1v1 competitive coding platform where two players race to solve the same problem.",
    description:
      "Led frontend and backend development on CodeFades, a competitive programming platform where players queue, get matched by Elo rating, and race to solve the same coding challenge in real time. Features a live in-browser code editor, Docker-sandboxed code execution, WebSocket-powered match sync, and a curriculum page. Built with Next.js, WebSockets, and Docker as a 3-person senior capstone.",
    tags: ["Next.js", "WebSockets", "Docker", "Full-Stack", "Real-Time"],
    badge: "Senior Capstone II",
    year: "2026",
    status: "completed",
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
    title: "Project Skywalker",
    tagline: "Led avionics for a 2U CubeSat mission carrying an experimental MHD pump payload.",
    description:
      "Led avionics development for a 2U CubeSat mission, implementing onboard data acquisition and telemetry systems to support MHD pump experiments in microgravity. Designed data storage and processing pipelines to analyze pump efficiency, flow rate, and power consumption, evaluating viability as a spacecraft fluid management system. Funded by LMU Undergraduate Research Stipend.",
    tags: ["Python", "Embedded Systems", "Data Pipelines", "Research"],
    badge: "LMU Research",
    year: "2024",
    status: "completed",
  },
  {
    title: "JesuitApp",
    tagline: "An ongoing mobile community app for the Jesuit House at LMU.",
    description:
      "Built the frontend for a mobile app serving the Jesuit House community at LMU, partnering with Isaiah Pajarillo who handled the backend. Features include absence submissions, guest management, photo uploads, and Mass schedule editing, with an admin panel for community staff. Built with React Native and Expo, with Firebase handling auth, file storage, and real-time data. Demoed to Fr. Eddie Siebert, S.J. and actively used by the community today.",
    tags: ["React Native", "Expo", "Firebase", "Mobile"],
    year: "2024",
    status: "completed",
  },
  {
    title: "Hearing Aid & Sound Research",
    tagline: "A two-stage ML pipeline for real-time stress detection using audio and biometric data.",
    description:
      "Built a two-stage ML pipeline to classify audio inputs and predict stress-induced heart rate elevation, integrating real-time model inference with Arduino hardware for biofeedback. Collected and preprocessed biometric and audio datasets, extracting acoustic features to train and evaluate classification and regression models for stress-response prediction. Funded by LMU Undergraduate Research Stipend.",
    tags: ["Python", "Machine Learning", "Arduino", "Signal Processing"],
    badge: "LMU Research",
    year: "2023",
    status: "completed",
  },
]
