export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "a-view-on-the-future",
    title: "A view on the future",
    date: "2026-01-01",
    excerpt:
      "Replace this excerpt with the argument of the piece.",
    body: [
      "Replace this with the opening of the article.",
      "Replace this with the view you want a reader to leave with.",
    ],
  },
  {
    slug: "a-short-note",
    title: "A short note",
    date: "2026-02-01",
    excerpt: "Replace this excerpt with what the note is about.",
    body: [
      "Replace this with the note itself.",
      "Replace this with a closing line.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
