import { ReactNode } from "react";

export interface HeroButton {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }
  
  export interface ParallaxImage {
    src: string;
    alt: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    width?: string;
    height?: string;
    speed?: number;
  }
  
  export interface HeroSectionProps {

    variant?: 'parallax' | 'single-image' | 'video';
    
    // Content
    brandLabel?: string;
    brandIcon?: string;
    heading: string;
    description: string;
    buttons?: HeroButton[];
    
    // Background options
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    parallaxImages?: ParallaxImage[];
    
    // Styling
    textAlign?: 'left' | 'center';
    overlay?: boolean;
    overlayOpacity?: number;
    minHeight?: string;
    className?: string;
    
    // Custom content
    customContent?: ReactNode;
  }

  export interface HeroButtonProps {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary';
  }
    