import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Wellness App", desc: "HIPAA-compliant meditation tracker." },
  { title: "3D Landing Page", desc: "Macho Man's 3D masterpiece." },
  { title: "RV Dashboard", desc: "Data-driven intake system for agencies." },
  { title: "Coffee Ordering App", desc: "Custom mobile experience for shops." },
];

function ProjectSection() {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-20 text-center text-green-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Projects That Hit Hard
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <ProjectCard key={i} title={proj.title} desc={proj.desc} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
