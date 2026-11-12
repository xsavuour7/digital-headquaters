export type WorkItem = {
  title: string;
  summary: string;
  href?: string;
};

export type WorkGroup = {
  title: string;
  items: WorkItem[];
};

export const workGroups: WorkGroup[] = [
  {
    title: "Agency",
    items: [
      {
        title: "Role(s): Founding partners.",
        summary:
          "If you are an agentic individual, who likes agentic processes, and wants to apply your skills in rigorous environments, join us. We are building the future of finance. I dislike the word finance, so I will use money. We aim to create a new paradigm for how money is circulated through the world. If you are highly ambitious; Have experience in high agency environments; and possess distinct skills, such as academic talent and pedigree, we would love to have you in the team. You will lead, deliver and manage the greatest of challenges.                     A 'founding partner' is a term which I think eradicates the bureaucractic terms which are currently used.",
      },
    ],
  },
  {
    title: "Other products",
    items: [
      {
        title: "Replace with a product",
        summary: "Replace this with what the product does and your role in it.",
      },
    ],
  },
  {
    title: "Experiments",
    items: [
      {
        title: "The ",
        summary: "Replace this with what you tried and what you learned.",
      },
    ],
  },
  {
    title: "Technical projects",
    items: [
      {
        title: "Replace with a project",
        summary: "Replace this with the problem, the approach, and the result.",
      },
    ],
  },
];
