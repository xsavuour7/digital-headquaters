import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { workGroups } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tight">Work</h1>
      {workGroups.map((group) => (
        <Section key={group.title} title={group.title}>
          {group.items.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-medium">
                {item.href ? (
                  <a
                    href={item.href}
                    className="underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-2">{item.summary}</p>
            </div>
          ))}
        </Section>
      ))}
    </>
  );
}
