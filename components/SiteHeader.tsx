"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto w-full max-w-2xl px-6 pt-10">
      <Link href="/" className="text-base font-medium">
        {site.name}
      </Link>
      <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {site.nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "underline underline-offset-4"
                  : "text-zinc-500 hover:text-foreground"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
