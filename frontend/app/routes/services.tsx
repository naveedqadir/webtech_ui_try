import { Layout } from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls, Stars } from "@react-three/drei";
import { AdvancedShape } from "../components/Scene3D";

export default function Services() {
  return (
    <Layout>
      <section className="relative py-20 text-center h-96">
        <div className="absolute inset-0">
          <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <OrbitControls enableZoom={false} />
            <AdvancedShape color="var(--color-accent-tertiary)" />
          </Canvas>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Exceptional services to elevate your brand.
          </p>
        </motion.div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 transition-colors duration-300 group-hover:from-violet-500/20 group-hover:to-blue-500/20" />
                <div className="relative">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-[var(--color-text-secondary)]">
                        <svg className="w-4 h-4 mr-2 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies.",
    icon: <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    features: [
      "Responsive Design",
      "Custom CMS Integration",
      "Performance Optimization"
    ]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications.",
    icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "App Store Optimization"
    ]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions for digital products.",
    icon: <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design"
    ]
  }
];
