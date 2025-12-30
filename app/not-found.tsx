import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0A1236] px-6 py-16 text-white">
      <div className="max-w-2xl text-center space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            404
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Page not found
          </h1>
          <p className="mt-3 text-base text-white/70 md:text-lg">
            This page is under construction. Head back to the homepage or
            explore our projects.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="rounded-full bg-[#E53935] px-6 py-6 text-base font-semibold hover:bg-[#d32f2f]"
          >
            <Link href="/">Back to home</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/20 bg-transparent px-6 py-6 text-base font-semibold text-white hover:bg-white/10"
          >
            <Link href="/projects">Explore projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
