"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Course = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const courses = [
    {
      id: 1,
      title: "Project Management Training",
      description:
        "Our Project Management Training programs equip professionals with the skills needed to plan, coordinate, and deliver successful projects. With a blend of global methodologies and hands-on practice, we help organizations strengthen leadership, enhance decision-making, and drive consistent project success.",
      image: "/images/courses/img-1.png",
      duration: "4 Weeks",
      level: "Beginner",
      type: "Free Course",
    },
    {
      id: 2,
      title: "Self-Development Training",
      description:
        "Our Self-Development Training programs empower individuals and teams to achieve meaningful personal and professional growth. Through practical tools, assessments, and interactive exercises, participants build essential life and career skills that foster long-term success.",
      image: "/images/courses/img-2.png",
      duration: "4 Weeks",
      level: "Beginner",
      type: "Paid Course",
    },
    {
      id: 3,
      title: "Accreditation Training Support",
      description:
        "We offer targeted accreditation support to help universities and polytechnics meet regulatory standards and demonstrate academic excellence. Our structured approach prepares management, faculty, and quality assurance teams for accreditation.",
      image: "/images/courses/img-3.png",
      duration: "4 Weeks",
      level: "Beginner",
      type: "Free Course",
    },
    {
      id: 4,
      title: "Advanced JavaScript",
      description:
        "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
      image:  "/images/courses/img-4.png",
      duration: "6 Weeks",
      level: "Advance",
      type: "By Jennifer Wilson",
    },
  ];


  return (
    <section className="pt-8 md:pt-20 lg:pt-80 pb-32 px-6 lg:px-20 max-w-[1440px] mx-auto bg-[#FDFDFF]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl text-[#0A1236] mb-6 tracking-tight font-bold">
          Our Courses
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
          We offer end-to-end services across construction, engineering and
          facilities management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Course Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Course Details */}
            <div className="p-8 flex flex-col flex-grow">
              {/* Badges and Price Type */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-sm rounded-lg border border-gray-100">
                    {course.duration}
                  </span>
                  <span className="px-4 py-1.5 bg-gray-50 text-gray-500 text-sm rounded-lg border border-gray-100">
                    {course.level}
                  </span>
                </div>
                <span className="font-bold text-[#0A1236] text-sm md:text-base">
                  {course.type}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0A1236] mb-4">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed line-clamp-4">
                {course.description}
              </p>

              <div className="mt-auto">
                <button className="w-full py-4 px-6 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#0A1236] font-bold rounded-xl transition-colors duration-200">
                  Get it Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
