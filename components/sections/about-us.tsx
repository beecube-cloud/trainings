"use client"
import React, { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll animation for images
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const container = scrollContainerRef.current;
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const newPosition = prev + 1;
          if (newPosition >= maxScroll) {
            return 0; // Reset to start
          }
          return newPosition;
        }
        return prev;
      });
    }, 30); // Smooth 30fps animation

    return () => clearInterval(interval);
  }, []);

  // Apply scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const images = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=600&fit=crop",
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div ref={sectionRef} className="w-full min-h-screen bg-white px-8 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-5xl text-primary mb-12 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}>
            About Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}>
              <p className="text-gray-600 leading-relaxed">
                Esthoj Engineering Construction & Facility Management Limited
                launched in 2018 as part of Esthoj Multi-Disciplinary Group.
                With over a decade of consulting and international experience,
                we deliver full lifecycle construction services; from concept
                and design through construction, commissioning and ongoing FM.
              </p>
            </div>

            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8'
            }`}>
              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors duration-300">
                  OUR MISSION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To develop, build and service Nigeria's physical
                  infrastructure for living, working and traveling.
                </p>
              </div>

              <div className="group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 group-hover:text-red-600 transition-colors duration-300">
                  VISION
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  To be the leading provider of construction services in
                  Nigeria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Images Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}>
          <div className="relative">
            {/* Gradient overlays for smooth infinite scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10"></div>
            
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-hidden scroll-smooth"
              style={{ scrollBehavior: 'auto' }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="shrink-0 w-64 aspect-3/4 rounded-2xl overflow-hidden group cursor-pointer relative"
                >
                  <img
                    src={image}
                    alt={`About ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
