export const SITE = {
  name: "Nick Aurino",
  title: "Nick Aurino — Software Engineer",
  description:
    "Generalist software engineer. I build things across the stack and share what I learn along the way.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nickaurino.dev",
  github: "https://github.com/nickaurino",
  linkedin: "https://linkedin.com/in/nick-aurino",
  email: "nickaurino@gmail.com",
};

export const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

/**
 * FEATURED_REPOS — repo names (not full URLs) to highlight on the homepage.
 * Update this list to control which projects get featured.
 * These are filtered from your public GitHub repos.
 */
export const FEATURED_REPOS: string[] = [
  // Add your best repo names here, e.g.:
  // "my-cool-project",
  // "another-project",
];
