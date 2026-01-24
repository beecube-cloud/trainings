import { HeroButton, ParallaxImage } from "./types";

export const parallaxImages: ParallaxImage[] = [
    {
      src: '/assets/hero/image1.svg',
      alt: 'Construction workers',
      position: 'top-left',
      width: 'w-72',
      height: 'h-80',
      speed: 0.15,
    },
    {
      src: '/assets/hero/image2.svg',
      alt: 'Business meeting',
      position: 'top-right',
      width: 'w-80',
      height: 'h-64',
      speed: 0.25,
    },
    {
      src: '/assets/hero/image3.svg',
      alt: 'Office workspace',
      position: 'bottom-left',
      width: 'w-1/3',
      height: 'h-72',
      speed: 0.2,
    },
    {
      src: '/assets/hero/image4.svg',
      alt: 'Engineering work',
      position: 'bottom-right',
      width: 'w-80',
      height: 'h-96',
      speed: 0.3,
    },
  ];
  
  export const mainButtons: HeroButton[] = [
    {
      text: 'Explore Courses',
      href: '/courses',
      variant: 'primary',
    },
    {
      text: 'About Us',
      href: '/about-us',
      variant: 'secondary',
    },
  ];

  export const divisionButtons: HeroButton[] = [
    {
      text: 'View Courses',
      href: '/courses',
      variant: 'primary',
    },
    {
      text: 'Download Brochure',
      href: '/brochure',
      variant: 'secondary',
    },
  ];