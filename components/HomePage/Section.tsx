import { cn } from "@/lib/utils";

export default function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 bg-[linear-gradient(rgba(203,213,225,0.32)_1px,transparent_1px),linear-gradient(90deg,rgba(203,213,225,0.32)_1px,transparent_1px)] bg-[size:42px_42px]",
        className
      )}
    >
      {children}
    </section>
  );
}
