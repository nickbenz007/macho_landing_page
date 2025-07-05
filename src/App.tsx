import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import ProjectSection from "./components/ProjectSection";
import Navbar from "./components/Navbar";
import { Contact } from "./components/Contact";
import ScrollTopButton from "./components/ScrollTopButton";

function App() {
  return (
    <div className="relative w-screen min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      {/* === HERO SECTION with CANVAS === */}
      <div id="home" className="w-full h-screen relative">
        <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={5} />
          <Suspense fallback={null}>
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
              <EnergyCore />
            </Float>
            <Sparkles count={2000} scale={10} size={1} speed={1.9} />
            <Environment preset="studio" />
          </Suspense>
          <EffectComposer>
            <Bloom
              luminanceThreshold={6}
              luminanceSmoothing={0.8}
              intensity={1.5}
            />
          </EffectComposer>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>

        {/* === TEXT & CTA === */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center pointer-events-none">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-center text-green-600"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Code That Moves Worlds
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Built by Macho Man | Powered by Precision
          </motion.p>
          <motion.button
            className="mt-8 px-6 py-3 rounded-xl bg-green-600 text-black font-bold text-xl shadow-xl hover:bg-green-500 pointer-events-auto uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Let’s Build 🔥
          </motion.button>
        </div>
      </div>

      {/* === PROJECTS SECTION STARTS HERE === */}
      <section id="projects" className="bg-black text-white px-10 py-40">
        <ProjectSection />
      </section>
      {/* === CONTACT SECTION STARTS HERE === */}
      <Contact />
      {/* === SCROLL TO TOP BUTTON === */}
      <ScrollTopButton />
    </div>
  );
}

function EnergyCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
      ref.current.rotation.x += 0.003;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.5, 5]} />
      <meshStandardMaterial
        color={"#FFF287"}
        emissive={"#2D4F2B"}
        metalness={0.8}
        roughness={0.1}
      />
    </mesh>
  );
}

export default App;
