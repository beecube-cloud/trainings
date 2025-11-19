"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  date: string;
  image: string;
}

interface ProjectsSectionProps {
  title?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
  projects?: Project[];
  maxItems?: number;
  className?: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title = "Our Projects",
  showButton = true,
  buttonText = "See all Projects",
  buttonHref = "/projects",
  projects,
  maxItems,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const defaultProjects: Project[] = [
    {
      title: "Park Villas Development, Maitama, Abuja",
      date: "13th April, 2025",
      image: "/images/project-1.png?w=600&h=400&fit=crop",
    },
    {
      title: "Upcoming Project at Central Business District, Abuja",
      date: "13th April, 2025",
      image: "/images/project-2.png?w=600&h=400&fit=crop",
    },
    {
      title: "Aust Estate Galadimawa, Abuja",
      date: "13th April, 2025",
      image: "/images/project-3.png?w=600&h=400&fit=crop",
    },
    {
      title: "Private Mansion, Anambra State",
      date: "13th April, 2025",
      image: "/images/project-4.png?w=600&h=400&fit=crop",
    },
  ];

  const displayProjects = projects || defaultProjects;
  const finalProjects = maxItems
    ? displayProjects.slice(0, maxItems)
    : displayProjects;

  useEffect(() => {
    // Set initial mobile state
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    checkMobile();
    
    // Add resize listener
    const handleResize = () => checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate items with stagger effect
          finalProjects.forEach((_, index) => {
            const delay = isMobile ? index * 100 : index * 150;
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, delay);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [finalProjects.length, isMobile]);

  return (
    <div
      ref={sectionRef}
      className={`w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 mb-8 sm:mb-12 lg:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl text-primary transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            {title}
          </h2>
          {showButton && (
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-8"
              }`}
            >
              <Link
                href={buttonHref}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary rounded-full text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base whitespace-nowrap hover:scale-105"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {finalProjects.map((project, index) => {
            const isItemVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                  isItemVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * (isMobile ? 100 : 150)}ms`,
                }}
              >
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden mb-3 sm:mb-4 aspect-4/3 shadow-lg group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-900 leading-tight group-hover:text-red-600 transition-colors duration-300 flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap order-first sm:order-last">
                    {project.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
export type { Project, ProjectsSectionProps };
