export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <h2 className="text-sm font-medium tracking-wide text-zinc-500">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-lg leading-8">{children}</div>
    </section>
  );
}
