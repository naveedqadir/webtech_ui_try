import { Layout } from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { AdvancedShape } from "../components/Scene3D";

export default function Contact() {
  return (
    <Layout>
      <section className="relative py-20 text-center h-96">
        <div className="absolute inset-0">
          <Canvas className="w-full h-full" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <OrbitControls enableZoom={false} />
            <AdvancedShape color="#e63946" />
          </Canvas>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We’d love to hear from you. Drop us a message below.
          </p>
        </motion.div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-300">
                  Have questions? We'd love to hear from you. Send us a message
                  and we'll respond as soon as possible.
                </p>
              </div>
              
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative p-8 rounded-2xl overflow-hidden bg-[#030014] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
              <form className="relative space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name" 
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[#0a0a0a] text-white px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-purple-500 focus:border-transparent transition-all duration-300
                        placeholder-gray-500" 
                      placeholder="Enter your name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[#0a0a0a] text-white px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-purple-500 focus:border-transparent transition-all duration-300
                        placeholder-gray-500" 
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[#0a0a0a] text-white px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-purple-500 focus:border-transparent transition-all duration-300
                        placeholder-gray-500 resize-none" 
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition" />
                  <button
                    type="submit"
                    className="relative w-full bg-[#0a0a0a] text-white px-6 py-3 rounded-lg
                      border border-white/10 hover:bg-[#0f0f0f] transition-all duration-300
                      font-medium group"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const contactInfo = [
  {
    title: "Email",
    content: "contact@techpro.com",
    icon: <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Phone",
    content: "+1 (555) 123-4567",
    icon: <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  },
  {
    title: "Location",
    content: "123 Tech Street, Silicon Valley, CA",
    icon: <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
];
