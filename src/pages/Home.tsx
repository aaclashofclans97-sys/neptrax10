import {
  Sparkles,
  Rocket,
  ShoppingCart,
  Briefcase,
  Users,
  Code,
  Palette,
  Search,
  Target,
  Layers,
  Wrench,
  TrendingUp,
  ArrowUpRight,
  Zap,
  Heart,
  Shield,
  Clock
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Silk from '../components/Silk';
import MissionSection from '../components/MissionSection';

interface HomeProps {
  onNavigate: (section: string) => void;
}

// Enhanced mobile detection with better performance
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Throttled resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDevice, 150);
    };
    
    checkDevice();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return isMobile;
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return {
    ref,
    initial: { opacity: 0, y: 60 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };
};

export default function Home({ onNavigate }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const isMobile = useMobile();
  
  // Enhanced parallax effects with better performance
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200], {
    ease: [0.25, 0.46, 0.45, 0.94]
  });
  
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120], {
    ease: [0.22, 1, 0.36, 1]
  });
  
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 180], {
    ease: [0.22, 1, 0.36, 1]
  });

  // Enhanced clients data with better descriptions
  const clients = [
    { 
      icon: Briefcase, 
      title: 'Local Service Businesses', 
      description: 'Professional websites for plumbers, electricians, and consultants' 
    },
    { 
      icon: Rocket, 
      title: 'SaaS Startups', 
      description: 'Scalable web platforms for cloud-based software companies' 
    },
    { 
      icon: Sparkles, 
      title: 'AI Startups', 
      description: 'Cutting-edge sites for machine learning and AI innovations' 
    },
    { 
      icon: ShoppingCart, 
      title: 'E-Commerce Brands', 
      description: 'High-converting online stores for retail businesses' 
    },
    { 
      icon: Users, 
      title: 'Agencies & Freelancers', 
      description: 'Portfolio sites for creative professionals and teams' 
    },
  ];

  // Enhanced services with better descriptions
  const services = [
    { 
      icon: Palette, 
      title: 'Web Design', 
      description: 'Beautiful, modern interfaces that captivate your audience' 
    },
    { 
      icon: Code, 
      title: 'Web Development', 
      description: 'Fast, responsive websites built with latest technologies' 
    },
    { 
      icon: Search, 
      title: 'SEO Optimization', 
      description: 'Strategic optimization for higher search rankings' 
    },
    { 
      icon: Target, 
      title: 'GEO Targeting', 
      description: 'Local market reach and geographic targeting' 
    },
    { 
      icon: Layers, 
      title: 'UI/UX Design', 
      description: 'User-centered experiences that drive engagement' 
    },
    { 
      icon: Wrench, 
      title: 'Website Maintenance', 
      description: 'Ongoing support, updates, and performance monitoring' 
    },
  ];

  // Enhanced stats with better descriptions
  const stats = [
    { number: '100+', label: 'Successful Projects' },
    { number: '50+', label: 'Five-Star Reviews' },
    { number: '5+', label: 'Years Excellence' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  // Enhanced why choose us section
  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Blazing-fast websites that load in under 2 seconds for better SEO and user experience'
    },
    {
      icon: Heart,
      title: 'Enjoyable Management',
      description: 'Intuitive content management that makes website updates actually enjoyable'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Future-proof websites with robust security and scalable architecture'
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'Streamlined processes that deliver results faster without compromising quality'
    }
  ];

  const heroAnimation = useScrollAnimation();
  const clientsAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const whyChooseAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen overflow-hidden" ref={containerRef}>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-100">
          <Silk
            speed={isMobile ? 4 : 8}
            scale={isMobile ? 0.8 : 1}
            color="#13717d"
            noiseIntensity={0.5}
            rotation={0}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0d1117] to-[#1e3a8a] opacity-70"></div>
        
        {/* Enhanced Animated Blobs */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-[#2563eb] rounded-full blur-[120px] opacity-20"
          style={{ y: blob1Y }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-[#1e3a8a] rounded-full blur-[120px] opacity-20"
          style={{ y: blob2Y }}
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.35, 0.2, 0.35],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-32">
          <motion.div 
            className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
            {...heroAnimation}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f1f5f9] mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Website management{' '}
              <span className="bg-gradient-to-r from-[#2e4fdc] to-[#4da6ff] bg-clip-text text-transparent">
                that's actually enjoyable
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[#abbcd4] mb-6 sm:mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Finally, a web experience that puts joy back into managing your online presence. 
              Beautiful, intuitive, and powerful—all in one platform.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center lg:justify-start px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Experience the Difference</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              
              <motion.button
                onClick={() => onNavigate('portfolio')}
                className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-transparent border-2 border-purple-400/50 text-[#f1f5f9] font-medium overflow-hidden transition-all duration-500 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>See Our Work</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </motion.button>
            </motion.div>

            <motion.div 
              className="px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h3 className="text-xs sm:text-sm text-[#abbcd4] font-bold mb-3 sm:mb-3 text-center lg:text-left ml-2">
                Trusted by Industry Leaders
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12 flex-wrap">
                {['/brand logo/google.png', '/brand logo/stripe.png', '/brand logo/vercel.png'].map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={src.split('/').pop()?.split('.')[0]}
                    className="h-6 sm:h-8 md:h-10 filter brightness-0 saturate-0 transition-transform duration-300"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{ 
                      scale: 1.15,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MissionSection />

      {/* Enhanced Why Choose Neptrax Section */}
      <section className="py-16 sm:py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            {...whyChooseAnimation}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#4da6ff] bg-clip-text text-transparent">
                Neptrax?
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-[#94a3b8] max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We're redefining what it means to have a website. No more complicated dashboards 
              or frustrating updates—just pure, enjoyable web management.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-6 sm:p-8 rounded-2xl border border-[#334155] hover:border-[#2563eb] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2563eb] to-[#1e3a8a] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#f1f5f9] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Clients Section */}
      <section className="py-16 sm:py-24 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            {...clientsAnimation}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4">
              Who We Work With
            </h2>
            <p className="text-[#94a3b8] text-lg">
              We partner with visionary businesses across all industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.title}
                className="group bg-[#1e293b] p-6 rounded-2xl border border-[#334155] hover:border-[#2563eb] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <client.icon className="text-[#2563eb] mb-4" size={32} />
                <h3 className="text-xl font-bold text-[#f1f5f9] mb-2">
                  {client.title}
                </h3>
                <p className="text-[#94a3b8] text-sm">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#111827] to-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            {...statsAnimation}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4">
              Our Track Record
            </h2>
            <p className="text-[#94a3b8] text-lg">
              Delivering exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2 group-hover:from-[#2563eb] group-hover:to-[#4da6ff] transition-all duration-500">
                  {stat.number}
                </div>
                <div className="text-[#94a3b8] text-sm sm:text-base font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 sm:py-24 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, threshold: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 sm:mb-6">
              Ready for Enjoyable Web Management?
            </h2>
            <p className="text-lg sm:text-xl text-[#94a3b8] mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop struggling with complicated websites. Experience the Neptrax difference—where web management is actually enjoyable.
            </p>
            
            <motion.button
              onClick={() => onNavigate('contact')}
              className="px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 border border-[#3b82f6] hover:border-[#60a5fa] relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Journey Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated sparkle effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.button>
            
            <p className="text-sm text-[#64748b] mt-4">
              No contracts, no hassle. Just beautiful web management.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}