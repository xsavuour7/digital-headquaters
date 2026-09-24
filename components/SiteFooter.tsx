import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 py-10 text-sm text-zinc-500">
      <a href={`mailto:${site.contact.email}`} className="hover:text-foreground">
        {site.contact.email}
      </a>
    </footer>
  );
}
