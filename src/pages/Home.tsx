import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Server, CreditCard, Zap, Target, Eye, Lock, Wifi, Cpu, Cloud } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

function AnimatedHeading() {
  const headingText = "Prototyping Intelligent, Secure, and Connected Systems";
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

  const orbConfigs = [
    { color: 'from-blue-500/20 to-cyan-500/20', size: 'w-64 h-64', x: '10%', y: '20%', duration: 14 },
    { color: 'from-purple-500/20 to-pink-500/20', size: 'w-96 h-96', x: '85%', y: '15%', duration: 18 },
    { color: 'from-emerald-500/20 to-teal-500/20', size: 'w-80 h-80', x: '15%', y: '75%', duration: 16 },
  ];

  const floatingIconConfigs = [
    { Icon: Shield, x: '10%', y: '20%', delay: 0, color: 'text-blue-400/30', duration: 10 },
    { Icon: Brain, x: '85%', y: '15%', delay: 0.5, color: 'text-purple-400/30', duration: 11 },
    { Icon: Server, x: '15%', y: '75%', delay: 1, color: 'text-cyan-400/30', duration: 12 },
    { Icon: Lock, x: '80%', y: '80%', delay: 1.5, color: 'text-emerald-400/30', duration: 13 },
    { Icon: Wifi, x: '50%', y: '10%', delay: 2, color: 'text-blue-400/30', duration: 14 },
    { Icon: Cpu, x: '25%', y: '50%', delay: 2.5, color: 'text-purple-400/30', duration: 12 },
    { Icon: Cloud, x: '75%', y: '45%', delay: 3, color: 'text-cyan-400/30', duration: 11 },
    { Icon: Zap, x: '90%', y: '70%', delay: 3.5, color: 'text-emerald-400/30', duration: 13 },
    { Icon: Target, x: '5%', y: '30%', delay: 4, color: 'text-blue-400/30', duration: 12 },
  ];

  const connectionLines = useMemo(
    () =>
      Array.from({ length: 8 }).map(() => {
        const x1 = Math.random() * 100;
        const y1 = Math.random() * 100;
        const x2 = x1 + (Math.random() * 40 - 20);
        const y2 = y1 + (Math.random() * 40 - 20);

        return { x1, y1, x2, y2 };
      }),
    []
  );

  const domains = [
    {
      icon: Server,
      title: 'IT Systems',
      description: 'MVP builds, integrations, and infrastructure decisions that set early teams up for rapid learning.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security architecture and playbooks that feel right-sized today and still hold up tomorrow.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Brain,
      title: 'AI & Robotics',
      description: 'Applied research sprints exploring how intelligent systems can unlock new value for partners.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CreditCard,
      title: 'Fintech',
      description: 'Designing trustworthy digital finance experiences for the next wave of products.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Builder Mentality',
      description: 'We partner closely with teams to test, learn, and ship in fast, transparent cycles.',
    },
    {
      icon: Shield,
      title: 'Security Obsessed',
      description: 'Every experiment bakes in trust, compliance, and resilience from the start.',
    },
    {
      icon: Target,
      title: 'Outcome Focused',
      description: 'We measure progress by the insight or traction unlocked for your customers.',
    },
    {
      icon: Cloud,
      title: 'Future Ready',
      description: 'Architectures that start lean but know exactly how they will scale when you need them to.',
    },
  ];

  const pilotSignals = [
    {
      title: 'Secure Edge Gateways',
      stage: 'In Field',
      description:
        'Deploying a lightweight cybersecurity layer with an early energy client to harden industrial IoT devices without disrupting operations.',
      highlights: [
        'Live across 40% of monitored endpoints',
        'Automated anomaly alerts routed to existing tools',
        'Co-designing playbooks with on-site engineers',
      ],
    },
    {
      title: 'AI Safety Copilot',
      stage: 'Pilot',
      description:
        'Training a contextual assistant with a fintech design partner to flag risky scenarios and suggest compliant alternatives during product ideation.',
      highlights: [
        'Grounded in proprietary policy libraries',
        'Weekly learning reviews with partner squads',
        'Planning red-team exercises before wider rollout',
      ],
    },
    {
      title: 'Robotics Vision Stack',
      stage: 'Lab',
      description:
        'Building a perception layer that helps mid-sized robotics teams accelerate environment mapping and reduce calibration time.',
      highlights: [
        'Synthetic data pipelines validated with two beta teams',
        'Latency down 18% from baseline after latest sprint',
        'Exploring integration with preferred hardware kits',
      ],
    },
  ];

  const upcomingMilestones = [
    {
      timing: 'Q2 2024',
      title: 'Launch Partner Circle',
      description: 'Opening three additional pilot slots for teams exploring secure AI deployments.',
    },
    {
      timing: 'Q3 2024',
      title: 'Field Notes Library',
      description: 'Publishing anonymized learnings from current experiments to share what’s working.',
    },
    {
      timing: 'Q4 2024',
      title: 'Platform Foundations',
      description: 'Translating repeatable pilot components into a shared services platform.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10]">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        role="banner"
        aria-labelledby="hero-heading"
      >
        {/* Hero Background with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <img
            src="/assets/hero-background.jpeg"
            alt="Mawu Vision Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/90 via-[#0B0C10]/80 to-[#0B0C10]/90" />
        </motion.div>

        {/* Animated Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {orbConfigs.map((orb, i) => (
            <motion.div
              key={i}
              className={`absolute ${orb.size} rounded-full bg-gradient-to-br ${orb.color} blur-3xl`}
              initial={{
                x: orb.x,
                y: orb.y,
                scale: 0.8,
              }}
              animate={{
                x: [orb.x, `calc(${orb.x} + 5%)`, orb.x],
                y: [`calc(${orb.y} + 5%)`, orb.y, `calc(${orb.y} - 5%)`],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Floating Tech Icons - Enhanced */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIconConfigs.map(({ Icon, x, y, delay, color, duration }, index) => (
            <motion.div
              key={index}
              className={`absolute ${color} hidden sm:block`}
              style={{
                left: x,
                top: y,
              }}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              animate={{
                opacity: [0, 0.7, 0.7, 0],
                scale: [0.8, 1.3, 1.3, 0.8],
                rotate: [0, 180, 360],
                y: [0, -30, 0],
              }}
              transition={{
                duration,
                delay: delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Icon size={40} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </motion.div>
          ))}
        </div>

        {/* Animated Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {connectionLines.map(({ x1, y1, x2, y2 }, i) => (
            <motion.line
              key={i}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              strokeDasharray="0 1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

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
                  <span className="font-bold">Mawu</span><span className="text-[#00AEEF]">Vision</span> is an early-stage team crafting intelligent, secure, and connected products alongside the partners who will use them first.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                  <Link
                    to="/services"
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-[#00AEEF]/60 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/50 transition-all duration-300 flex items-center justify-center overflow-hidden text-sm sm:text-base"
                    aria-label="See what Mawu Vision is building"
                  >
                    <span className="relative z-10">See What We're Building</span>
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
              Focus Areas We're Exploring
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These are the problem spaces we're actively researching with early partners before unveiling full products.
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
              How We Build Together
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our process is intentionally collaborative, blending structured experimentation with the guardrails ambitious startups need.
            </p>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Signals from the Lab</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A snapshot of the prototypes and partner collaborations shaping our roadmap right now.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilotSignals.map((signal, index) => (
              <motion.article
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700 rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{signal.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-[#00AEEF]/20 text-[#7dd3fc] rounded-full">
                      {signal.stage}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-1">{signal.description}</p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {signal.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
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
                We're building toward a future where intelligent systems feel approachable, protective, and deeply human. Every prototype we release is a step toward that shared vision.
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
                Our mission right now is simple: partner with brave teams to test ideas in the real world, learn fast, and evolve solutions that earn trust at scale.
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
              Interested in Co-Building?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We're lining up pilot collaborations and would love to learn about the problems you're exploring next.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
              {upcomingMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0C10]/60 border border-[#00AEEF]/20 rounded-xl p-5"
                >
                  <p className="text-sm uppercase tracking-wide text-[#00AEEF] mb-2">{milestone.timing}</p>
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300 text-sm">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#00AEEF]/50 transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
