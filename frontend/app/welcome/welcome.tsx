import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from 'three';
import { useEffect, useRef } from "react";


export function Welcome() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <section ref={targetRef} className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[#030014]">
          <Canvas className="w-full h-full">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[10, 10, 10]} 
              intensity={1} 
              castShadow
            />
            <directionalLight position={[2, 5, 2]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <meshStandardMaterial
                color="#ffffff"
                wireframe
                transparent
                opacity={0.1}
              />
            </Sphere>
          </Canvas>
        </div>
        
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black"
            >
              <span className="block text-white">Future of</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
                Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-400"
            >
              Revolutionizing the digital landscape with cutting-edge solutions
              that transform possibilities into reality.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button className="group relative px-8 py-4">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full blur opacity-60 group-hover:opacity-100 transition" />
                <span className="relative block bg-[#030014] text-white rounded-full px-8 py-4">
                  Explore Now
                </span>
              </button>
              <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-full text-lg font-medium transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Now with 3D cards */}
      <section className="py-32 bg-[#030014]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                key={feature.title}
                className="relative p-8 rounded-2xl overflow-hidden"
              >
                {/* Removed blur effect from background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10" />
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure for your growing business needs.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions designed to meet your specific requirements.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
  {
    title: "Digital Transformation",
    description: "Guide your business through digital transformation with our expertise.",
    icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
];

const stats = [
  { value: "500+", label: "Clients Worldwide" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "10+", label: "Years Experience" },
];
