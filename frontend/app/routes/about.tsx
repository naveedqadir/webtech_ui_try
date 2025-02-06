import { Layout } from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { AdvancedShape } from "../components/Scene3D";

export default function About() {
  return (
    <Layout>
      {/* Hero Section with Three.js background */}
      <section className="relative py-20 text-center h-96">
        <div className="absolute inset-0">
          <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <OrbitControls enableZoom={false} />
            <AdvancedShape color="#8338ec" />
          </Canvas>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Our journey and mission to empower businesses.
          </p>
        </motion.div>
      </section>
      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert">
            <p className="text-gray-300 text-lg">
              We are a leading technology company specializing in digital transformation and innovative solutions for businesses worldwide. With a team of dedicated professionals, we create intuitive and engaging digital experiences that empower organizations and drive success.
            </p>
            <p className="text-gray-300 text-lg">
              Our vision is to bridge the gap between technology and business, fostering innovation and delivering impactful solutions that transform the way companies operate.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
