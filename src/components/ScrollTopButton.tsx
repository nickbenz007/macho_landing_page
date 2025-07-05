import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-white/10 backdrop-blur-md text-green-400 p-3 rounded-full shadow-lg hover:bg-green-600 hover:text-black transition"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <div className="w-6 h-6 rounded-full bg-red-500" />
      </motion.button>
    )
  );
}
