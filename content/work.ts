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
    title: "VasenVolt",
    items: [
      {
        title: "VasenVolt",
        summary:
          "Replace this with what VasenVolt is, who it is for, and why you are building it.",
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
    title: "AI experiments",
    items: [
      {
        title: "Replace with an experiment",
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
