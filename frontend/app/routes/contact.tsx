import { Layout } from "../components/Layout";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls, Stars } from "@react-three/drei";
import { AdvancedShape } from "../components/Scene3D";
import { useState } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after some time
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

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
            <AdvancedShape color="#a855f7" />
          </Canvas>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center h-full"
        >
          <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            We'd love to hear from you. Drop us a message below.
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
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Get in Touch</h2>
                <p className="text-[var(--color-text-secondary)]">
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
                    <p className="text-[var(--color-text-secondary)]">{item.content}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-6 border-t border-white/10"
              >
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gradient-to-br from-violet-500/5 to-blue-500/5 rounded-lg p-4">
                      <h4 className="text-[var(--color-text-primary)] font-medium">{faq.question}</h4>
                      <p className="text-[var(--color-text-secondary)] mt-2 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative p-8 rounded-2xl overflow-hidden bg-[var(--color-bg-primary)] border border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10" />
              <form className="relative space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="name" 
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-violet-500 focus:border-transparent transition-all duration-300
                        placeholder-gray-500" 
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-violet-500 focus:border-transparent transition-all duration-300
                        placeholder-gray-500" 
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Subject</label>
                  <div className="relative">
                    <select
                      id="subject"
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" className="bg-[var(--color-bg-secondary)]">Select a subject</option>
                      <option value="general" className="bg-[var(--color-bg-secondary)]">General Inquiry</option>
                      <option value="support" className="bg-[var(--color-bg-secondary)]">Technical Support</option>
                      <option value="sales" className="bg-[var(--color-bg-secondary)]">Sales Question</option>
                      <option value="other" className="bg-[var(--color-bg-secondary)]">Other</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Message</label>
                  <div className="relative">
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="mt-1 block w-full rounded-lg border border-white/10 
                        bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] px-4 py-3 focus:outline-none focus:ring-2 
                        focus:ring-violet-500 focus:border-transparent transition-all duration-300
                        placeholder-gray-500 resize-none" 
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`relative w-full rounded-lg font-medium group overflow-hidden h-12
                      ${formStatus === 'submitting' ? 'opacity-80 cursor-not-allowed' : ''}
                      ${formStatus === 'success' ? 'bg-green-500/20 border border-green-500/50' : ''}
                    `}
                  >
                    {formStatus === 'idle' && (
                      <>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600"></span>
                        <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-25 
                          bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600 transition-opacity"></span>
                        <span className="relative flex items-center justify-center gap-2 text-[var(--color-text-primary)]">
                          Send Message
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </>
                    )}

                    {formStatus === 'submitting' && (
                      <span className="relative flex items-center justify-center gap-2 text-[var(--color-text-primary)]">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    )}

                    {formStatus === 'success' && (
                      <span className="relative flex items-center justify-center gap-2 text-green-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Message Sent!
                      </span>
                    )}

                    {formStatus === 'error' && (
                      <span className="relative flex items-center justify-center gap-2 text-red-400">
                        Error sending message. Please try again.
                      </span>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gradient-to-t from-[var(--color-bg-secondary)] to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-white/10 h-80 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282621200314!2d-122.0840889!3d37.4220577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x64e71fe0d92a9770!2sSilicon%20Valley!5e0!3m2!1sen!2sus!4v1654234234864!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-80"
            ></iframe>
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
    icon: <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Phone",
    content: "+1 (555) 123-4567",
    icon: <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  },
  {
    title: "Location",
    content: "123 Tech Street, Silicon Valley, CA",
    icon: <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
];

const faqs = [
  {
    question: "How quickly can you respond to my inquiry?",
    answer: "We typically respond to all inquiries within 24 hours during business days."
  },
  {
    question: "Do you offer consultations for new projects?",
    answer: "Yes, we offer free initial consultations to discuss your project requirements."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in web and mobile development, cloud solutions, AI/ML, and custom software development."
  }
];
