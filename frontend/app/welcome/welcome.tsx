import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import * as THREE from 'three';
import { useRef } from "react";
import { GradientSphere } from "../components/Scene3D";

export function Welcome() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Define features data
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage the power of artificial intelligence to automate processes and gain valuable insights from your data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate your systems with leading cloud platforms for enhanced scalability and performance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with our advanced security solutions designed to safeguard against modern threats.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];
  
  // Define stats data
  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "300+", label: "Projects Completed" },
    { value: "50+", label: "Team Experts" },
    { value: "24/7", label: "Support Available" }
  ];
  
  // Define testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechInnovate",
      quote: "Working with this team transformed our business operations. Their innovative solutions helped us achieve remarkable growth in just six months."
    },
    {
      name: "Michael Chen",
      title: "CTO, DataDynamics",
      quote: "The cybersecurity implementation exceeded our expectations. We now have peace of mind knowing our systems are protected by industry-leading technology."
    },
    {
      name: "Priya Sharma",
      title: "Operations Director, GlobalConnect",
      quote: "Their cloud migration strategy was flawless. We experienced zero downtime during transition and have seen significant performance improvements."
    }
  ];

  return (
    <>
      <section ref={targetRef} className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]">
          <Canvas className="w-full h-full">
            <ambientLight intensity={0.2} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <directionalLight 
              position={[0, 10, 5]} 
              intensity={1} 
              color="var(--color-accent-secondary)"
            />
            {/* <Sphere args={[1, 100, 200]} scale={2.8}>
              <meshStandardMaterial
                color="var(--color-accent-primary)"
                wireframe
                transparent
                opacity={0.15}
                emissive="var(--color-accent-secondary)"
                emissiveIntensity={0.4}
              />
            </Sphere> */}
            <GradientSphere />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
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
              <span className="block text-[var(--color-text-primary)]">Future of</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
                Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-[var(--color-text-secondary)]"
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
                <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition" />
                <span className="relative block bg-[var(--color-bg-primary)] text-white rounded-full px-8 py-4">
                  Explore Now
                </span>
              </button>
              <button className="px-8 py-4 bg-[var(--color-bg-secondary)]/50 hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] rounded-full text-lg font-medium transition-colors border border-violet-600/30">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Now with 3D cards */}
      <section className="py-32 bg-[var(--color-bg-primary)] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-violet-900/5 to-[var(--color-bg-primary)] opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
              Innovative Solutions
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions to help businesses thrive in the digital age.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                key={feature.title}
                className="relative p-8 rounded-2xl backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 rounded-2xl" />
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-violet-600/10 text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">{feature.title}</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[var(--color-text-primary)] mb-2">{stat.value}</div>
                <div className="text-violet-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-violet-600/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Don't just take our word for it – hear from some of our satisfied clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-2xl backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 rounded-2xl" />
                <div className="relative">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-[var(--color-text-secondary)] mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 flex-shrink-0"></div>
                    <div className="ml-3">
                      <p className="text-[var(--color-text-primary)] font-medium">{testimonial.name}</p>
                      <p className="text-[var(--color-text-secondary)] text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a 
              href="/about" 
              className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
            >
              <span>View more client success stories</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
            </svg>
            <defs>
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              </pattern>
            </defs>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-3xl mx-auto">
              Partner with us to leverage cutting-edge technology solutions tailored to your unique needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="relative px-8 py-4 rounded-lg group overflow-hidden inline-block"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600"></span>
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-25 
                  bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600 transition-opacity"></span>
                <span className="relative flex items-center justify-center gap-2 text-[var(--color-text-primary)] font-medium">
                  Get Started Today
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="/services" 
                className="px-8 py-4 bg-[var(--color-bg-secondary)]/70 hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] rounded-lg text-lg font-medium transition-colors border border-violet-600/30"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}