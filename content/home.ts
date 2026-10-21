export type HomeSection = {
  title: string;
  body: string;
  href: string;
  linkLabel: string;
};

export const homeSections: HomeSection[] = [
  {
    title: "Who I am",
    body: "Hello. My name is Hayden Opolot and I am from London. I am a founder and aim to be a conoisseur of the great voyage of life. I am highly execution-oriented and prefer to be up than sat. I quite like the intersection of building and strategic thinking.",
    href: "/about",
    linkLabel: "About",
  },
  {
    title: "What I build",
    body: "I kind of build whatever I think. This also means whatever i dream. I like building things that are tangible, such as companies; which are usually related to things I dream about, usually for a beneficial purpose. I love a great thesis, and the experiments to test and validate, and the exploration of new domains, harnessing the sofware, building the hardware, speaking to the right people. Anything to test the dream. Replace this with the kinds of products, experiments, and technical work you spend time on.",
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
    body: "My current focus is Arcerius. Building an internal and external model which embodies not only itself its cause, but also the purpose of all around me to create the perfect environment. Creating harmony can facilitate the courageous attitudes to flourish. Currently on my whiteboard I also have my target 'consistency.'",
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
