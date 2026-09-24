import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing",
};

export default function WritingPage() {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tight">Writing</h1>
      <ul className="mt-12 space-y-10">
        {articles.map((article) => (
          <li key={article.slug}>
            <p className="text-sm text-zinc-500">{article.date}</p>
            <h2 className="mt-2 text-lg font-medium">
              <Link
                href={`/writing/${article.slug}`}
                className="underline underline-offset-4"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-2 text-lg leading-8">{article.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
