import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({ title, desc }: { title: string; desc: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="visible"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="bg-[#111] rounded-2xl shadow-xl p-6 border border-gray-700 hover:border-green-600 transition-all"
    >
      <h3 className="text-2xl font-bold text-green-500">{title}</h3>
      <p className="text-gray-400 mt-2">{desc}</p>
    </motion.div>
  );
}

export default ProjectCard;
