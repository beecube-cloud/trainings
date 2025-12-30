"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { divisionButtons } from "@/lib/consts";
import { HeroButtonProps } from "@/lib/types";

function HeroButton({ text, href, variant = "primary" }: HeroButtonProps) {
  const isPrimary = variant === "primary";
  const buttonVariant = isPrimary ? "default" : "outline";

  return (
    <Button
      asChild
      size="lg"
      variant={buttonVariant}
      className={
        isPrimary
          ? "bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full px-6 md:px-12 py-6 md:py-8 text-sm md:text-lg font-bold min-w-max md:min-w-[220px] transition-all hover:scale-[1.02]"
          : "border-2 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-6 md:px-12 py-6 md:py-8 text-sm md:text-lg font-bold min-w-max md:min-w-[220px] transition-all hover:scale-[1.02]"
      }
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}

export function HeroSection({ buttons = divisionButtons }) {
  return (
    <section className="relative pt-16 md:pt-32 pb-8 md:pb-16 overflow-visible bg-[#0E0E4B]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Left decorative line SVG */}
      <div className="absolute left-0 top-0 h-full opacity-20 md:opacity-35 hidden md:block">
        <Image
          src="/contact-us-left-line.svg"
          alt="Left decorative line"
          width={100}
          height={800}
          className="h-full w-auto object-cover"
          priority
        />
      </div>

      {/* Right decorative line SVG */}
      <div className="absolute right-0 top-0 h-full opacity-20 md:opacity-35 hidden md:block">
        <Image
          src="/contact-us-right-line.svg"
          alt="Right decorative line"
          width={100}
          height={800}
          className="h-full w-auto object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-6 lg:px-20 max-w-[1440px] mx-auto text-center pt-16">
        <div className="flex flex-col items-center max-w-4xl mx-auto mb-6 md:mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-[64px] text-white mb-4 md:mb-6 leading-[1.1] tracking-tight text-balance ">
            Empowering Professionals,
            <br />& Leaders for Excellence
          </h1>

          <p className="text-xs md:text-base text-white/70 mb-6 md:mb-10 leading-relaxed max-w-xl mx-auto font-medium text-pretty px-2">
            World-class training programs that build capacity, strengthen
            performance, deliver measurable results, and achieve excellence
            across all levels.
          </p>

          {buttons && buttons.length > 0 && (
            <div className="flex flex-row items-center gap-2 md:gap-3 lg:gap-4 justify-center w-full px-2 flex-wrap">
              {buttons.map((button, index) => (
                <HeroButton key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Featured Image - Centered and Overlapping bottom */}
      <div className="relative max-w-6xl mx-auto px-3 md:px-4 translate-y-0 md:translate-y-1/2 -mt-0 md:-mt-52 lg:-mt-80">
        <div className="relative aspect-video md:aspect-[16/9] w-full rounded-xl md:rounded-[1.5rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5">
          <Image
            src="/images/hero.png"
            alt="Professional training environment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
