export type HomeSection = {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
};

export const homeSections: HomeSection[] = [
  {
    title: "Who I am",
    body: "Replace this with a few sentences on who you are, where you are based, and what you care about.",
    href: "/about",
    linkLabel: "About",
  },
  {
    title: "What I build",
    body: "Replace this with the kinds of products, experiments, and technical work you spend time on.",
    href: "/work",
    linkLabel: "Work",
  },
  {
    title: "Selected work",
    body: "Replace this with one or two pieces of work a visitor should remember, starting with VasenVolt.",
    href: "/work",
    linkLabel: "See the work",
  },
  {
    title: "Current focus",
    body: "Replace this with what you are building and learning right now.",
    href: "/now",
    linkLabel: "Now",
  },
  {
    title: "Selected thinking",
    body: "Replace this with a short view on the future — the idea you most want a visitor to leave with.",
    href: "/writing",
    linkLabel: "Writing",
  },
  {
    title: "Contact",
    body: "Replace this with how you prefer to be reached and what you are open to.",
    href: "/contact",
    linkLabel: "Get in touch",
  },
];
