import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="text-3xl font-medium tracking-tight">Contact</h1>
      <p className="mt-6 text-lg leading-8">
        Contact me via any channel you like!
      </p>
      <ul className="mt-8 space-y-3 text-lg">
        {site.contact.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="underline underline-offset-4"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
