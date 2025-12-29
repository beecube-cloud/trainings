"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useScrollParallax } from "@/hooks/useScrollParallax";
import type {
  HeroSectionProps,
  ParallaxImage,
  HeroButtonProps,
} from "@/lib/types";

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
      {/* Parallax Background Images */}
      {parallaxImages && (
        <div className="absolute inset-0 pointer-events-none">
          {parallaxImages.map((img, index) => (
            <ParallaxImageElement key={index} image={img} scrollY={scrollY} />
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 text-center">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {brandLabel && (
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 border border-white/20 flex flex-wrap">
                <div className="w-1.5 h-1.5 bg-red-500" />
                <div className="w-1.5 h-1.5 bg-blue-500" />
                <div className="w-1.5 h-1.5 bg-blue-500" />
                <div className="w-1.5 h-1.5 bg-red-500" />
              </div>
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

function ParallaxImageElement({
  image,
  scrollY,
}: {
  image: ParallaxImage;
  scrollY: number;
}) {
  const positions = {
    "top-left": "top-1/2 -translate-y-1/2 -left-12 md:-left-8 lg:left-0",
    "top-right": "top-[15%] -right-12 md:-right-8 lg:right-0",
    "bottom-left": "bottom-[10%] left-4 md:left-8 lg:left-12",
    "bottom-right": "bottom-[-5%] right-6 md:right-10 lg:right-16",
  };

  const sizes = {
    "top-left": "w-40 h-56 md:w-56 md:h-[380px] lg:w-[280px] lg:h-[440px]",
    "top-right": "w-48 h-32 md:w-64 md:h-48 lg:w-[340px] lg:h-[230px]",
    "bottom-left": "w-52 h-32 md:w-[280px] md:h-40 lg:w-[380px] lg:h-[480px]",
    "bottom-right": "w-44 h-56 md:w-56 md:h-[340px] lg:w-[280px] lg:h-[420px]",
  };

  const speed = image.speed || 0.1;
  const isBottom = image.position.includes("bottom");
  const transform = isBottom
    ? `translateY(${scrollY * -speed}px)`
    : `translateY(${scrollY * speed}px)`;

  return (
    <div
      className={`absolute transition-transform duration-100 ease-out z-0 ${
        positions[image.position]
      } ${sizes[image.position]}`}
      style={{ transform }}
    >
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
        <Image
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
            isBottom ? "opacity-90" : "opacity-95"
          }`}
        />
      </div>
    </div>
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

