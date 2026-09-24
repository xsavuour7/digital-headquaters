import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tight">About</h1>
      <Section title="Story">
        {about.story.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Section>
      <Section title="Capabilities">
        <ul className="list-disc space-y-2 pl-5">
          {about.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>
      <Section title="Principles">
        {about.principles.map((principle) => (
          <div key={principle.title}>
            <h3 className="text-base font-medium">{principle.title}</h3>
            <p className="mt-2">{principle.body}</p>
          </div>
        ))}
      </Section>
      <Section title="Experience">
        {about.experience.map((item) => (
          <div key={item.title}>
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-zinc-500">{item.period}</p>
            <p className="mt-2">{item.body}</p>
          </div>
        ))}
      </Section>
    </>
  );
}
