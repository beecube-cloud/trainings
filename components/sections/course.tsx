"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUMBER = "2348140989555"; // Replace with your WhatsApp number (country code + number, no + or spaces)

function buildWhatsAppUrl(course: { title: string; duration: string; level: string; type: string }) {
  const message = `Hi, I'm interested in this course:\n\n*${course.title}*\n• Duration: ${course.duration}\n• Level: ${course.level}\n• Type: ${course.type}\n\nI'd like to get more information. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const Course = ({coursePage=false}: {coursePage: boolean}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const courses = [
    {
      id: 1,
      title: "Primavera P6 Training",
      description:
        "Master Oracle Primavera P6 for project scheduling, resource planning, and portfolio management. Our hands-on training covers WBS, activities, baselines, and reporting—ideal for construction, engineering, and infrastructure professionals.",
      image: "/images/courses/image6.jpeg",
      duration: "2–4 Weeks",
      level: "Beginner to Intermediate",
      type: "Paid Course",
    },
    {
      id: 2,
      title: "PlanSwit Training",
      description:
        "Learn PlanSwit for efficient construction takeoffs, quantity surveying, and document management. Build practical skills in digital measurement, cost estimation, and project documentation used across the built environment.",
      image: "/images/courses/image5.jpeg",
      duration: "2–3 Weeks",
      level: "Beginner",
      type: "Paid Course",
    },
    {
      id: 3,
      title: "ITwo CostX Training",
      description:
        "Get certified in iTwo CostX for BIM-based cost estimating and quantity takeoff. Our training covers 2D/3D measurement, rate libraries, and integration with design models for accurate, audit-ready estimates.",
      image: "/images/courses/image7.jpeg",
      duration: "2–3 Weeks",
      level: "Beginner to Intermediate",
      type: "Paid Course",
    },
    {
      id: 4,
      title: "Project Management Training for Corporate Organisations, Government Agencies, Groups and Individuals",
      description:
        "End-to-end project management training for organisations, government agencies, groups, and individuals. Covers planning, execution, monitoring, and closure using recognised methodologies—strengthen leadership, decision-making, and delivery outcomes.",
      image: "/images/courses/image11.jpg",
      duration: "4 Weeks",
      level: "Beginner to Advanced",
      type: "Paid Course",
    },
    {
      id: 5,
      title: "Self-Development and Skill Empowerment Trainings for Government Institutions, Religious Organisations, Groups and Individuals",
      description:
        "Tailored self-development and skill empowerment programmes for government institutions, religious organisations, groups, and individuals. Build essential life and career skills, leadership, and personal growth through practical tools and interactive sessions.",
      image: "/images/courses/image10.jpeg",
      duration: "2–4 Weeks",
      level: "All Levels",
      type: "Paid Course",
    },
    {
      id: 6,
      title: "Project Management Training",
      description:
        "Our Project Management Training programs equip professionals with the skills needed to plan, coordinate, and deliver successful projects. With a blend of global methodologies and hands-on practice, we help organizations strengthen leadership, enhance decision-making, and drive consistent project success.",
      image: "/images/courses/image9.jpeg",
      duration: "4 Weeks",
      level: "Beginner",
      type: "Paid Course",
    },
    {
      id: 7,
      title: "Self-Development Training",
      description:
        "Our Self-Development Training programs empower individuals and teams to achieve meaningful personal and professional growth. Through practical tools, assessments, and interactive exercises, participants build essential life and career skills that foster long-term success.",
      image: "/images/courses/img-1.png",
      duration: "4 Weeks",
      level: "Beginner",
      type: "Paid Course",
    },
    {
      id: 8,
      title: "Accreditation Training Support",
      description:
        "We offer targeted accreditation support to help universities and polytechnics meet regulatory standards and demonstrate academic excellence. Our structured approach prepares management, faculty, and quality assurance teams for accreditation.",
      image: "/images/courses/img-3.png",
      duration: "4 Weeks",
      level: "Beginner",
      type: "Paid Course",
    },
    {
      id: 9,
      title: "Web Development Training",
      description:
        "Take your Web Development skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
      image: "/images/courses/img-4.png",
      duration: "6 Weeks",
      level: "Advance",
      type: "",
    },
    {
      id: 9,
      title: "Mind Set and Personal Development Training",
      description:
        "Develop a growth mindset and personal development strategies to achieve long-term success. This training helps individuals build essential life and career skills, enhance leadership, and foster personal growth through practical tools and interactive sessions.",
      image: "/images/courses/image12.jpg",
      duration: "2–4 Weeks",
      level: "All Levels",
      type: "Paid Course",
    },
  ];

  const displayedCourses = coursePage ? courses : courses.slice(0, 4);

  return (
    <section className={`max-w-[1440px] mx-auto bg-[#FDFDFF] ${
      coursePage
        ? "pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 px-6 lg:px-12"
        : "pt-8 md:pt-20 lg:pt-80 pb-32 px-6 lg:px-20"
    }`}>
      {!coursePage && (
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl text-[#0A1236] mb-6 tracking-tight font-bold">
          Our Courses
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-pretty">
          We offer end-to-end services across construction, engineering and
          facilities management.
        </p>
      </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {displayedCourses.map((course) => (
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
                <a
                  href={buildWhatsAppUrl(course)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#0A1236] font-bold rounded-xl transition-colors duration-200 text-center"
                >
                  Get it Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
