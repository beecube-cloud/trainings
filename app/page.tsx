import AboutSection from "@/components/sections/about-us";
import ContactSection from "@/components/sections/contact-us";
import HeroParallax from "@/components/sections/hero";
import ProjectsSection from "@/components/sections/project";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <HeroParallax />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
