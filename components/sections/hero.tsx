"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import type {
  HeroSectionProps,
  HeroButtonProps,
} from "@/lib/types";
import { divisionButtons } from "@/lib/consts";

export function HeroSection({
  brandLabel,
  brandIcon,
  heading,
  description,
  buttons,
  backgroundColor = "#0A1236",
  parallaxImages,
  className = "",
}: HeroSectionProps) {
  const scrollY = useScrollParallax();

  return (
    <section
      className={`relative min-h-screen overflow-hidden flex items-center pt-24 pb-20 ${className}`}
      style={{ backgroundColor }}
    >
      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 text-center">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {brandLabel && (
            <div className="flex items-center gap-2 mb-8">
              {brandIcon && (
                <Image
                  src={brandIcon}
                  alt="Brand Icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              )}
              <span className="text-white/90 text-[13px] font-medium tracking-wide">
                {brandLabel}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] tracking-tight text-balance">
            {heading}
          </h1>

          <p className="text-sm md:text-base text-white/70 mb-10 leading-relaxed max-w-xl mx-auto text-pretty font-medium">
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              {buttons.map((button, index) => (
                <HeroButton key={index} {...button} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A1236] to-transparent z-20 pointer-events-none" />
    </section>
  );
}

function HeroButton({ text, href, variant = "primary" }: HeroButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Button
      asChild
      size="lg"
      className={
        isPrimary
          ? "bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-full px-12 py-8 text-lg font-bold min-w-[220px] transition-all hover:scale-[1.02]"
          : "border-2 border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-12 py-8 text-lg font-bold min-w-[220px] transition-all hover:scale-[1.02]"
      }
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}

export function HeroSingleImageExample() {
  return (
    <HeroSection
      variant="single-image"
      brandLabel="Esthoj Group"
      brandIcon="/assets/hero/dot.svg"
      heading="Empowering Professionals, & Leaders for Excellence."
      description="World-class training programs that build capacity, strengthen performance, deliver measurable results, and achieve excellence across all levels."
      backgroundColor="#0E0E4B"
      buttons={divisionButtons}
      textAlign="center"
      overlay={true}
      overlayOpacity={60}
    />
  );
}
