import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { now } from "@/content/now";

export const metadata: Metadata = {
  title: "Now",
};

export default function NowPage() {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tight">Now</h1>
      <p className="mt-4 text-sm text-zinc-500">Updated {now.updated}</p>
      <Section title="Building">
        {now.building.map((item) => (
          <div key={item.title}>
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="mt-2">{item.detail}</p>
          </div>
        ))}
      </Section>
      <Section title="Learning">
        {now.learning.map((item) => (
          <div key={item.title}>
            <h3 className="text-base font-medium">{item.title}</h3>
            <p className="mt-2">{item.detail}</p>
          </div>
        ))}
      </Section>
    </>
  );
}
