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

  const collaborationApproach = [
    {
      title: 'Listen & co-discover',
      description: 'We begin every engagement by mapping the problem space together and validating that we are solving the right pain first.',
    },
    {
      title: 'Prototype responsibly',
      description: 'Security reviews, compliance checkpoints, and ethical frameworks are built into every iteration no matter how early.',
    },
    {
      title: 'Ship, learn, adapt',
      description: 'We ship prototypes into the hands of real users quickly, collect feedback transparently, and pivot without ego.',
    },
  ];

  const progressMarkers = [
    {
      label: 'Active pilots',
      value: '3',
      description: 'Security, AI, and fintech experiments running with our earliest collaborators.',
    },
    {
      label: 'Playbooks drafted',
      value: '5',
      description: 'Living documents that capture what we are learning about secure product delivery and partner onboarding.',
    },
    {
      label: 'Community check-ins',
      value: 'Bi-weekly',
      description: 'Open office hours for prospective partners and advisors to swap notes with the team.',
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
                We're an early-stage studio experimenting with intelligent, secure, and connected solutions in partnership with the people who need them most.
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
                    Mawu Vision started as a series of late-night whiteboard sessions between friends who saw the same gap: ambitious African teams needed partners willing to co-build the first version of bold ideas. Instead of waiting for perfect conditions, we chose to form a studio that could experiment alongside them.
                  </p>
                  <p>
                    We're still early in that journey. Right now our energy is centred on a handful of pilots across intelligent systems, cybersecurity, AI & robotics, and fintech. Each build is an experiment designed to learn quickly, protect users, and prepare for scale when the moment is right.
                  </p>
                  <p>
                    Transparency, curiosity, and ethical innovation guide every decision. We share progress openly with our partners, invite critique, and iterate together until the solution feels inevitable. It's less about grand announcements and more about the relationships forged along the way.
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
                      We imagine a future where African-built technology earns global trust because it is thoughtful, resilient, and people-first. Our vision is to help chart that path by proving what small, curious teams can create together.
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
                      Our mission is to stay close to the problems our partners face, prototype responsibly, and ship solutions that create momentum without pretending to be finished products.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#00AEEF]/5 to-[#14B8A6]/5 border border-[#00AEEF]/20 rounded-3xl p-10 mb-16"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                  <div className="lg:w-1/3">
                    <h3 className="text-3xl font-bold text-white mb-4">How we collaborate with early partners</h3>
                    <p className="text-gray-200">
                      Every build is co-created. We stay close to the humans who will rely on the product and weave their insight into each sprint.
                    </p>
                  </div>
                  <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {collaborationApproach.map((approach, index) => (
                      <div
                        key={approach.title}
                        className="bg-[#0B0C10]/70 border border-[#14B8A6]/20 rounded-2xl p-6 shadow-inner shadow-[#14B8A6]/5"
                      >
                        <p className="text-sm uppercase tracking-wide text-[#7dd3fc] mb-3">Step {index + 1}</p>
                        <h4 className="text-xl font-semibold text-white mb-3">{approach.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{approach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {progressMarkers.map((marker) => (
                  <div
                    key={marker.label}
                    className="bg-gray-900/60 border border-gray-700 rounded-2xl p-6 text-center"
                  >
                    <p className="text-sm uppercase tracking-wide text-[#14B8A6] mb-2">{marker.label}</p>
                    <p className="text-3xl font-bold text-white mb-2">{marker.value}</p>
                    <p className="text-gray-300 text-sm">{marker.description}</p>
                  </div>
                ))}
              </motion.div>
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
                  These principles keep us grounded while we learn in public and build alongside our community.
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
                  Build the Future with Us
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8">
                  If you're curious about collaborating on early prototypes or want to swap notes on the problems you're tackling, let's connect.
                </p>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
