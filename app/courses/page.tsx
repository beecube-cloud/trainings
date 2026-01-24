import { Course } from "@/components/sections/course";
import SectionHeader from "@/components/sections/sectionHeader";
import { TfiAlignCenter } from "react-icons/tfi";

function CoursesPage() {
  return (
    <div>
    <SectionHeader
        title="Our Courses"
        description="We offer a wide range of courses to help you build your skills and knowledge."
      />
      <Course coursePage={true} />
    </div>
  )
}

export default CoursesPage