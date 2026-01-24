"use client"
import AboutSection from '@/components/sections/about-us'
import SectionWithLineDecorator from '@/sections/sectionWithLineDecorator'
import React, { useEffect, useRef } from 'react'

function page() {

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
           
          },
          { threshold: 0.1 }
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => observer.disconnect();
      }, []);
  return (
    <SectionWithLineDecorator sectionRef={sectionRef} backgroundColor="white">
    <AboutSection  textheading="text-white" textcontent="text-gray-300" backgroundColor="bg-[#0A1236]/95" />
    </SectionWithLineDecorator>
  )
}

export default page