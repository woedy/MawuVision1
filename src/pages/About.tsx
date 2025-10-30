import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Lightbulb, Users, TrendingUp, Award, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in everything we do.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions and exceeding expectations.',
    },
    {
      icon: Award,
      title: 'Accountability',
      description: 'We take ownership of our work and deliver measurable results for our clients.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We strive to create solutions that make a meaningful difference in the world.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] pt-16">
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        role="banner"
        aria-labelledby="about-hero-heading"
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0B0C10]/90 to-[#0B0C10]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {isLoading ? (
            // Loading Skeletons for Hero Section
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="h-16 md:h-20 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-6 mx-auto w-3/4"></div>
              <div className="h-6 md:h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse mx-auto w-2/3"></div>
            </motion.div>
          ) : (
            // Actual Hero Content
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" id="about-hero-heading">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]">
                  <span className="font-bold">Mawu</span><span className="">Vision</span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a forward-thinking technology company dedicated to shaping the future through intelligent, secure, and innovative solutions.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="our-story-heading">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            // Loading Skeletons for Story Section
            <>
              <div className="mb-16">
                <div className="h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-6 mx-auto w-1/3"></div>
                <div className="space-y-4 max-w-4xl mx-auto">
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse w-4/5"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse w-3/4"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl animate-pulse"></div>
                <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl animate-pulse"></div>
              </div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-6 text-center" id="our-story-heading">Our Story</h2>
                <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Founded with a vision to revolutionize the technology landscape, Mawu Vision emerged from a simple yet powerful idea: technology should empower, protect, and inspire. Our journey began when a group of passionate technologists recognized the need for a company that could bridge the gap between cutting-edge innovation and practical business solutions.
                  </p>
                  <p>
                    Today, Mawu Vision stands as a beacon of technological excellence, serving clients across multiple continents. We specialize in four core domains: Information Technology Systems, Cybersecurity, Artificial Intelligence & Robotics, and Fintech Solutions. Each of these areas represents not just our expertise, but our commitment to building a safer, smarter, and more connected world.
                  </p>
                  <p>
                    What drives us is our unwavering belief in the power of ethical innovation. We don't just build technology—we build trust. Every solution we create is designed with security, scalability, and sustainability at its core. Our team of world-class engineers, designers, and strategists work tirelessly to ensure that our clients don't just keep up with the digital revolution—they lead it.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10 rounded-2xl p-8 border border-[#00AEEF]/20 hover:border-[#00AEEF] hover:shadow-xl hover:shadow-[#00AEEF]/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00AEEF] transition-colors duration-300">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      To be recognized globally as the premier technology partner for organizations seeking to transform their operations through intelligent, secure, and innovative solutions. We envision a world where technology seamlessly integrates with human potential, creating opportunities for growth, protection, and prosperity across all industries and communities.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-[#14B8A6]/10 to-[#00AEEF]/10 rounded-2xl p-8 border border-[#14B8A6]/20 hover:border-[#14B8A6] hover:shadow-xl hover:shadow-[#14B8A6]/20 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 to-[#00AEEF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#14B8A6] transition-colors duration-300">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      To deliver world-class technology solutions that empower businesses to thrive in the digital age. We are committed to innovation without compromise, security without complexity, and results without excuses. Our mission is to be more than a service provider—we aim to be a trusted partner in our clients' success stories.
                    </p>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B0C10] to-gray-900" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            // Loading Skeletons for Values Section
            <>
              <div className="text-center mb-16">
                <div className="h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-4 mx-auto w-1/3"></div>
                <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse mx-auto w-1/2"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="h-48 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl animate-pulse"></div>
                ))}
              </div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-white mb-4" id="values-heading">Our Core Values</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  These principles guide every decision we make and every solution we deliver.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#00AEEF] hover:bg-gray-800/70 hover:shadow-lg hover:shadow-[#00AEEF]/10 transition-all duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-[#00AEEF] focus-within:ring-offset-2"
                    role="article"
                    aria-labelledby={`value-${index}-title`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00AEEF] to-[#14B8A6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <value.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00AEEF] transition-colors duration-300" id={`value-${index}-title`}>{value.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          {isLoading ? (
            // Loading Skeleton for CTA Section
            <>
              <div className="h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-6 mx-auto w-3/4"></div>
              <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse mb-8 mx-auto w-5/6"></div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" id="cta-heading">
                  Join Us on This Journey
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8">
                  At Mawu Vision, we believe the future belongs to those who dare to innovate. Whether you're looking to transform your business or explore partnership opportunities, we'd love to hear from you.
                </p>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
