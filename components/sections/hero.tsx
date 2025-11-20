'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useScrollParallax } from '@/hooks/useScrollParallax';
import { HeroSectionProps, ParallaxImage, HeroButtonProps } from '@/lib/types';
import { divisionButtons, mainButtons, parallaxImages } from '@/lib/consts';


export function HeroSection({
  variant = 'single-image',
  brandLabel,
  brandIcon,
  heading,
  description,
  buttons,
  backgroundColor = '#0A1236',
  backgroundImage,
  backgroundVideo,
  parallaxImages,
  textAlign = 'center',
  overlay = true,
  overlayOpacity = 50,
  minHeight = 'min-h-screen',
  className = '',
  customContent,
}: HeroSectionProps) {
  const scrollY = useScrollParallax();

  const textAlignClass = textAlign === 'center' ? 'text-center' : 'text-left';
  const justifyClass = textAlign === 'center' ? 'justify-center' : 'justify-start';

  return (
    <section
      className={`relative ${minHeight} overflow-hidden flex items-center ${className}`}
      style={{ backgroundColor }}
    >

      {variant === 'parallax' && parallaxImages && (
        <div className="absolute inset-0 pointer-events-none">
          {parallaxImages.map((img, index) => (
            <ParallaxImageElement
              key={index}
              image={img}
              scrollY={scrollY}
            />
          ))}
        </div>
      )}


      {variant === 'single-image' && backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {variant === 'video' && backgroundVideo && (
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}


      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}


      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${textAlignClass}`}>
        <div className={`flex flex-col items-${textAlign === 'center' ? 'center' : 'start'} max-w-5xl ${textAlign === 'center' ? 'mx-auto' : ''}`}>

          {brandLabel && (
            <div className={`flex items-center gap-2 mb-8 ${textAlign === 'center' ? 'justify-center' : ''}`}>
              {brandIcon && (
                <Image src={brandIcon} alt="Brand icon" width={14} height={14} />
              )}
              <span className="text-white text-sm font-medium tracking-wide">
                {brandLabel}
              </span>
            </div>
          )}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {heading}
          </h1>

          <p className={`text-lg md:text-xl text-gray-300 mb-10 leading-relaxed ${textAlign === 'center' ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
            {description}
          </p>

          {buttons && buttons.length > 0 && (
            <div className={`flex flex-col sm:flex-row items-center gap-4 ${justifyClass}`}>
              {buttons.map((button, index) => (
                <HeroButton key={index} {...button} />
              ))}
            </div>
          )}

          {customContent && (
            <div className="mt-8">
              {customContent}
            </div>
          )}
        </div>
      </div>

      {variant === 'parallax' && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-current pointer-events-none"
          style={{ color: backgroundColor }}
        />
      )}
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
    'top-left': 'top-32 left-[-30]',
    'top-right': 'top-24 right-[-30]',
    'bottom-left': 'bottom-0 left-40',
    'bottom-right': 'bottom-[-30] right-36',
  };

  const defaultSizes = {
    'top-left': 'w-72 h-80',
    'top-right': 'w-80 h-64',
    'bottom-left': 'w-1/3 h-72',
    'bottom-right': 'w-80 h-96',
  };

  const speed = image.speed || 0.2;
  const isBottom = image.position.includes('bottom');
  const transform = isBottom
    ? `translateY(${scrollY * -speed}px)`
    : `translateY(${scrollY * speed}px)`;

  return (
    <div
      className={`absolute ${positions[image.position]} ${image.width || defaultSizes[image.position]}`}
      style={{ transform }}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function HeroButton({ text, href, variant = 'primary' }: HeroButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Button
      asChild
      size="lg"
      className={
        isPrimary
          ? 'bg-[#E53935] hover:bg-[#C62828] text-white rounded-full px-8 py-6 text-base font-semibold min-w-[200px]'
          : 'border-2 border-white/30 bg-transparent text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold min-w-[200px]'
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
      brandLabel="Esthoj Construction & Facility Management"
      brandIcon="/assets/hero/dot.svg"
      heading="Shaping Infrastructure. Strengthening Communities."
      description="Engineering Construction & Facility Management has translated client visions into durable, sustainable infrastructure, from commercial and residential developments to roads, energy and facility services."
      buttons={divisionButtons}
      backgroundColor="#1A1F4E"
      backgroundImage="/assets/hero/herobg.svg"
      textAlign="center"
      overlay={true}
      overlayOpacity={60}
    />
  );
}

