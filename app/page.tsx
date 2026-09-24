import Link from "next/link";
import { Section } from "@/components/Section";
import { homeSections } from "@/content/home";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tight">{site.name}</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {site.role}
      </p>
      {homeSections.map((section) => (
        <Section key={section.title} title={section.title}>
          <p>{section.body}</p>
          <p>
            <Link
              href={section.href}
              className="underline underline-offset-4 hover:text-zinc-500"
            >
              {section.linkLabel}
            </Link>
          </p>
        </Section>
      ))}
    </>
  );
}
