// components/Navbar.tsx
import { motion } from "framer-motion";

const navItems = ["Home", "Projects", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl rounded-full px-8 py-3 shadow-lg border border-white/20 flex gap-6 text-white font-medium text-sm uppercase tracking-wide"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {navItems.map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase()}`}
          className="hover:text-green-400 transition-colors duration-300"
        >
          {item}
        </a>
      ))}
    </motion.nav>
  );
}
