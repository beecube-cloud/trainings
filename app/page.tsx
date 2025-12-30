import AboutSection from "@/components/sections/about-us";
import ContactSection from "@/components/sections/contact-us";
import { Course } from "@/components/sections/course";
import { HeroSingleImageExample } from "@/components/sections/hero";
import { HeroSection } from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/project";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Course />
      <ContactSection />
    </>
  );
}
