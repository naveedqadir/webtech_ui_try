import { Layout } from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls, Stars } from "@react-three/drei";
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
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} />
            <AdvancedShape color="#8b5cf6" />
          </Canvas>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
            About Us
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Our journey and mission to empower businesses.
          </p>
        </motion.div>
      </section>
      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Our Story</h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  Founded in 2020, we've been at the forefront of digital innovation.
                  Our journey began with a simple mission: to make technology accessible
                  and impactful for businesses of all sizes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Our Mission</h3>
                <p className="text-[var(--color-text-secondary)]">
                  To empower businesses through innovative technology solutions that drive growth and success.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-[var(--color-text-primary)]">{stat.value}</div>
                  <div className="text-[var(--color-text-secondary)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 rounded-2xl p-6 text-center hover:from-violet-500/20 hover:to-blue-500/20 transition-colors"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-violet-600 to-blue-500" />
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{member.name}</h3>
                <p className="text-[var(--color-text-secondary)]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const stats = [
  { label: "Team Members", value: "50+" },
  { label: "Projects Completed", value: "100+" },
  { label: "Countries Reached", value: "25+" },
  { label: "Years Experience", value: "10+" }
];

const team = [
  { name: "John Doe", role: "CEO & Founder" },
  { name: "Jane Smith", role: "CTO" },
  { name: "Mike Johnson", role: "Lead Designer" },
];
