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
  ArrowUpRight
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView, ScrollReveal } from '../components/FramerMotion';
import { useRef, useEffect, useState } from 'react';
import Silk from '../components/Silk';
import MissionSection from '../components/MissionSection';

interface HomeProps {
  onNavigate: (section: string) => void;
}

// Enhanced mobile detection with throttling
const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkDevice, 100);
    };
    
    checkDevice();
    window.addEventListener('resize', throttledResize);
    
    return () => {
      window.removeEventListener('resize', throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return isMobile;
};

export default function Home({ onNavigate }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const isMobile = useMobile();
  
  // Smoother parallax effects with better easing
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200], { ease: [0.25, 0.46, 0.45, 0.94] });
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -100], { ease: [0.22, 1, 0.36, 1] });
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 150], { ease: [0.22, 1, 0.36, 1] });

  const clients = [
    { icon: Briefcase, title: 'Local Service Businesses', description: 'Plumbers, electricians, consultants' },
    { icon: Rocket, title: 'SaaS Startups', description: 'Cloud-based software companies' },
    { icon: Sparkles, title: 'AI Startups', description: 'Machine learning innovations' },
    { icon: ShoppingCart, title: 'E-Commerce Brands', description: 'Online retail businesses' },
    { icon: Users, title: 'Agencies & Freelancers', description: 'Creative professionals' },
  ];

  const services = [
    { icon: Palette, title: 'Web Design', description: 'Beautiful, modern interfaces' },
    { icon: Code, title: 'Web Development', description: 'Fast, responsive websites' },
    { icon: Search, title: 'SEO Optimization', description: 'Higher search rankings' },
    { icon: Target, title: 'GEO Targeting', description: 'Local market reach' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-centered experiences' },
    { icon: Wrench, title: 'Website Maintenance', description: 'Ongoing support & updates' },
  ];

  const stats = [
    { number: '100+', label: 'Sites Built' },
    { number: '50+', label: 'Verified Reviews' },
    { number: '5+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen overflow-hidden" ref={containerRef}>
      {/* Enhanced Hero Section with Scroll Effects */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
        
        {/* Enhanced Animated Blobs with smoother animations */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-[#2563eb] rounded-full blur-[120px] opacity-20"
          style={{ y: blob1Y }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-[#1e3a8a] rounded-full blur-[120px] opacity-20"
          style={{ y: blob2Y }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-32">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <ScrollReveal direction="up" delay={100} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font text-[#f1f5f9] mb-4 sm:mb-6 leading-tight">
                Launch your brand online <br className="hidden sm:block" />
                <span className="gradient-text">
                  with a website built to
                </span>
                <br className="hidden sm:block" />
                convert & scale.
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
              <p className="text-base sm:text-lg md:text-xl text-[#abbcd4] mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                Guiding startups and small businesses from idea to digital success with websites built for performance and growth.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center lg:justify-start px-4 sm:px-0">
                <motion.button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary ripple px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 text-sm sm:text-base relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Book a Call</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  onClick={() => onNavigate('portfolio')}
                  className="btn-secondary hover-glow group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-transparent border-2 border-purple-400/50 text-[#f1f5f9] font-medium overflow-hidden transition-all duration-500 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View Our Work</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </motion.button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" delay={400} duration={1} ease={[0.25, 0.46, 0.45, 0.94]}>
              <div className="px-4 sm:px-0">
                <h3 className="text-xs sm:text-sm text-[#abbcd4] font-bold mb-3 sm:mb-3 text-center lg:text-left ml-2">
                  Trusted by Industry Leaders
                </h3>
                <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12 flex-wrap">
                  <motion.img
                    src="/brand logo/google.png"
                    alt="Google"
                    className="h-6 sm:h-8 filter brightness-0 saturate-0 hover-scale cursor-pointer"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  />
                  <motion.img
                    src="/brand logo/stripe.png"
                    alt="Stripe"
                    className="h-8 sm:h-10 md:h-14 filter brightness-0 saturate-0 hover-scale cursor-pointer"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  />
                  <motion.img
                    src="/brand logo/vercel.png"
                    alt="Vercel"
                    className="h-8 sm:h-10 md:h-14 filter brightness-0 saturate-0 hover-scale cursor-pointer"
                    style={{ filter: 'brightness(0) saturate(100%) invert(1) sepia(1) saturate(0.5) hue-rotate(200deg) brightness(0.9)' }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <MissionSection />

      {/* Enhanced Clients Section with Smoother Animations */}
      <section className="py-16 sm:py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] text-center mb-4">
              Who We Work With
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={100} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
            <p className="text-[#94a3b8] text-center mb-8 sm:mb-12 text-sm sm:text-base px-4">
              We partner with businesses of all sizes across industries
            </p>
          </ScrollReveal>

          {/* First Row - 3 Cards */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
              {clients.slice(0, 3).map((client, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 120} duration={0.7} ease={[0.25, 0.46, 0.45, 0.94]}>
                  <motion.div
                    className="card-interactive glass-effect rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] h-full border border-[#334155] hover:border-[#2563eb] group cursor-pointer"
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <client.icon className="text-[#2563eb] mb-3 sm:mb-4 group-hover:animate-pulse-gentle transition-all" size={isMobile ? 24 : 32} />
                    <h3 className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2 group-hover:text-glow transition-all">{client.title}</h3>
                    <p className="text-[#94a3b8] text-xs sm:text-sm">{client.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
              {clients.slice(3).map((client, index) => (
                <ScrollReveal key={index + 3} direction="up" delay={(index + 3) * 120} duration={0.7} ease={[0.25, 0.46, 0.45, 0.94]}>
                  <motion.div
                    className="card-interactive glass-effect rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] h-full border border-[#334155] hover:border-[#2563eb] group cursor-pointer"
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <client.icon className="text-[#2563eb] mb-3 sm:mb-4 group-hover:animate-pulse-gentle transition-all" size={isMobile ? 24 : 32} />
                    <h3 className="text-lg sm:text-xl font-bold text-[#f1f5f9] mb-2 group-hover:text-glow transition-all">{client.title}</h3>
                    <p className="text-[#94a3b8] text-xs sm:text-sm">{client.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Smoother Interactions */}
      <section className="py-16 sm:py-20 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] text-center mb-8 sm:mb-12">
              Our Credentials
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 120} duration={0.7} ease={[0.25, 0.46, 0.45, 0.94]}>
                <motion.div
                  className="text-center p-4 sm:p-6 rounded-2xl glass-effect hover-lift group cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:animate-glow-pulse">
                    {stat.number}
                  </div>
                  <div className="text-[#94a3b8] text-sm sm:text-base group-hover:text-[#cbd5e1] transition-colors">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Better Animations */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#f1f5f9] mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={150} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
            <p className="text-[#94a3b8] text-base sm:text-lg mb-6 sm:mb-8 px-4">
              Let's discuss how we can help your business grow online
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={250} duration={0.9} ease={[0.25, 0.46, 0.45, 0.94]}>
            <motion.button
              onClick={() => onNavigate('contact')}
              className="btn-primary ripple animate-glow-pulse px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] text-[#f1f5f9] font-medium text-base sm:text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] transition-all duration-300 border border-[#3b82f6] hover:border-[#60a5fa] relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Book a Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced custom animations with smoother easing */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(1.1); 
          }
        }
        @keyframes pulseSlow2 {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1.1); 
          }
          50% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulseSlow2 {
          animation: pulseSlow2 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}