import ContactSection from "@/components/sections/contact-us";
import ProjectsSection from "@/components/sections/project";

function ProjectsPage() {
  // Extended projects list for the dedicated projects page
  const allProjects = [
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
    // Add more projects for the full projects page
    {
      title: "Commercial Complex, Victoria Island, Lagos",
      date: "10th March, 2025",
      image: "/images/project-1.png?w=600&h=400&fit=crop",
    },
    {
      title: "Residential Estate, Gwarinpa, Abuja",
      date: "25th February, 2025",
      image: "/images/project-2.png?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <ProjectsSection 
        title=""
        showButton={false}
        projects={allProjects}
        className="min-h-screen"
      />
      <ContactSection />
    </>
  );
}

export default ProjectsPage;
