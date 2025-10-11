import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Brain, Server, CreditCard, Zap, Target, Eye } from 'lucide-react';

export default function Home() {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/hero-background.jpeg"
            alt="Mawu Vision Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/20 via-[#0B0C10]/40 to-[#0B0C10]/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Building Intelligent,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]">
                Secure
              </span>
              , and Connected Futures
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              <span className="font-bold">Mawu</span><span className="text-[#00AEEF]">Vision</span> empowers businesses with innovative technology solutions across IT systems, cybersecurity, AI, and fintech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="group px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#00AEEF]/50 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#00AEEF] rounded-lg font-semibold text-white hover:bg-[#00AEEF]/10 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#00AEEF] rounded-full flex items-start justify-center p-2"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
