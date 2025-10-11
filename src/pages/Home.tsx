import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Server, CreditCard, Zap, Target, Eye, Lock, Wifi, Cpu, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';

function AnimatedHeading() {
  const headingText = "Building Intelligent, Secure, and Connected Futures";
  const words = headingText.split(' ');

  return (
    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" id="hero-heading">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className={`inline-block mr-2 ${index === 2 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]' : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const domains = [
    {
      icon: Server,
      title: 'IT Systems',
      description: 'Comprehensive software development, cloud infrastructure, and IT consulting services.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security audits, vulnerability assessments, and data protection solutions.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Brain,
      title: 'AI & Robotics',
      description: 'Cutting-edge machine learning, computer vision, and intelligent automation systems.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CreditCard,
      title: 'Fintech',
      description: 'Secure payment systems, AI-powered fraud detection, and blockchain integration.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Innovation-Driven',
      description: 'Leveraging cutting-edge technology to solve complex challenges.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security embedded in every solution we deliver.',
    },
    {
      icon: Target,
      title: 'Result-Oriented',
      description: 'Focused on delivering measurable outcomes and business value.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
        aria-labelledby="hero-heading"
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <img
            src="/assets/hero-background.jpeg"
            alt="Mawu Vision Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/20 via-[#0B0C10]/40 to-[#0B0C10]/60" />
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { Icon: Shield, x: '10%', y: '20%', delay: 0 },
            { Icon: Brain, x: '85%', y: '15%', delay: 0.5 },
            { Icon: Server, x: '15%', y: '75%', delay: 1 },
            { Icon: Lock, x: '80%', y: '80%', delay: 1.5 },
            { Icon: Wifi, x: '50%', y: '10%', delay: 2 },
            { Icon: Cpu, x: '25%', y: '50%', delay: 2.5 },
            { Icon: Cloud, x: '75%', y: '45%', delay: 3 },
          ].map(({ Icon, x, y, delay }, index) => (
            <motion.div
              key={index}
              className="absolute text-[#00AEEF]/20 hidden sm:block"
              style={{
                left: x,
                top: y,
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1.2, 1.2, 0.8],
                rotate: [0, 180, 360],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Icon size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {isLoading ? (
              // Loading Skeletons
              <>
                {/* Logo Skeleton */}
                <div className="mb-8 flex justify-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
                </div>

                <div className="mb-6">
                  <div className="h-16 md:h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-2"></div>
                  <div className="h-16 md:h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-2"></div>
                  <div className="h-16 md:h-24 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse w-3/4 mx-auto"></div>
                </div>

                <div className="mb-8">
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse mb-2"></div>
                  <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse w-5/6 mx-auto"></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="h-12 sm:h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse w-48"></div>
                  <div className="h-12 sm:h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse w-48"></div>
                </div>
              </>
            ) : (
              // Actual Content
              <>
                {/* Logo in Hero Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 flex justify-center"
                >
                  <img
                    src="/assets/mawu-vision-logo.png"
                    alt="Mawu Vision Logo"
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 object-contain"
                  />
                </motion.div>

                <AnimatedHeading />

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  <span className="font-bold">Mawu</span><span className="text-[#00AEEF]">Vision</span> empowers businesses with innovative technology solutions across IT systems, cybersecurity, AI, and fintech.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                  <Link
                    to="/services"
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-[#00AEEF]/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/50 transition-all duration-300 flex items-center justify-center overflow-hidden text-sm sm:text-base"
                    aria-label="Explore Mawu Vision services and solutions"
                  >
                    <span className="relative z-10">Explore Services</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link
                    to="/contact"
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#00AEEF] rounded-lg font-semibold text-white hover:bg-[#00AEEF]/20 hover:border-[#14B8A6] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/50 transition-all duration-300 overflow-hidden text-sm sm:text-base"
                    aria-label="Get in touch with Mawu Vision team"
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/20 to-[#14B8A6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#00AEEF] rounded-full flex items-start justify-center p-2"
            role="button"
            tabIndex={0}
            aria-label="Scroll down to explore more content"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-1 h-2 bg-[#00AEEF] rounded-full" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We deliver world-class technology solutions across multiple domains, helping organizations transform and thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-[#00AEEF] transition-all duration-300 hover:shadow-xl hover:shadow-[#00AEEF]/20"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{domain.title}</h3>
                <p className="text-gray-400">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0C10] to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Mawu Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-[#00AEEF]/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-[#00AEEF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-[#00AEEF]" />
                <h2 className="text-4xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be a global leader in technology innovation, creating intelligent systems that empower businesses, protect digital assets, and drive sustainable growth across industries. We envision a future where technology seamlessly integrates with human ambition to solve the world's most pressing challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-[#00AEEF]" />
                <h2 className="text-4xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To deliver cutting-edge technology solutions that are secure, intelligent, and impactful. We are committed to building systems that not only meet today's needs but anticipate tomorrow's challenges, helping our clients stay ahead in an ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how Mawu Vision can help you achieve your technology goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#00AEEF]/50 transition-all duration-300"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
