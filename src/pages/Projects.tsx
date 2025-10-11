import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'SecureBank Digital Platform',
      category: 'Fintech',
      description: 'A comprehensive digital banking platform with advanced fraud detection and multi-currency support serving over 500,000 users.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      tags: ['Fintech', 'AI', 'Security'],
      date: 'Q4 2024',
      highlights: [
        'Real-time fraud detection using machine learning',
        'Support for 20+ currencies',
        'ISO 27001 compliant infrastructure',
        '99.99% uptime SLA',
      ],
    },
    {
      title: 'HealthGuard AI Diagnostics',
      category: 'AI & Healthcare',
      description: 'An AI-powered diagnostic assistant that analyzes medical imaging to support healthcare professionals in early disease detection.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['AI', 'Computer Vision', 'Healthcare'],
      date: 'Q3 2024',
      highlights: [
        '95% accuracy in early detection',
        'Processes 10,000+ scans daily',
        'Integration with major EMR systems',
        'FDA approval pending',
      ],
    },
    {
      title: 'CyberShield Enterprise Security',
      category: 'Cybersecurity',
      description: 'A comprehensive security solution protecting Fortune 500 companies from advanced persistent threats and zero-day vulnerabilities.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      tags: ['Cybersecurity', 'Cloud', 'Enterprise'],
      date: 'Q2 2024',
      highlights: [
        'Blocks 1M+ threats daily',
        'Automated incident response',
        '24/7 SOC monitoring',
        'Compliance with GDPR & HIPAA',
      ],
    },
    {
      title: 'SmartLogistics IoT Platform',
      category: 'IoT & Automation',
      description: 'An intelligent logistics platform using IoT sensors and AI to optimize supply chain operations and reduce delivery times.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      tags: ['IoT', 'AI', 'Logistics'],
      date: 'Q1 2024',
      highlights: [
        '40% reduction in delivery times',
        'Real-time tracking of 100K+ assets',
        'Predictive maintenance alerts',
        'Integration with major carriers',
      ],
    },
    {
      title: 'CloudOps Infrastructure Suite',
      category: 'Cloud & DevOps',
      description: 'A unified cloud management platform enabling seamless multi-cloud operations with automated scaling and cost optimization.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      tags: ['Cloud', 'DevOps', 'Infrastructure'],
      date: 'Q4 2023',
      highlights: [
        '60% cost reduction through optimization',
        'Support for AWS, Azure, and GCP',
        'Automated CI/CD pipelines',
        'Infrastructure as Code templates',
      ],
    },
    {
      title: 'RetailVision Analytics',
      category: 'Retail & AI',
      description: 'An AI-powered retail analytics platform providing real-time insights into customer behavior and inventory optimization.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tags: ['AI', 'Retail', 'Analytics'],
      date: 'Q3 2023',
      highlights: [
        '30% increase in conversion rates',
        'Real-time inventory optimization',
        'Customer behavior analytics',
        'Integration with major POS systems',
      ],
    },
  ];

  const upcomingProjects = [
    {
      title: 'Autonomous Warehouse Robots',
      category: 'Robotics',
      description: 'Next-generation autonomous robots for warehouse operations with advanced navigation and object manipulation capabilities.',
      status: 'In Development',
    },
    {
      title: 'Blockchain Supply Chain Platform',
      category: 'Blockchain',
      description: 'A decentralized supply chain platform ensuring transparency and traceability from manufacturer to end consumer.',
      status: 'Planning Phase',
    },
    {
      title: 'Green Energy Management System',
      category: 'Renewable Energy',
      description: 'An intelligent energy management system optimizing renewable energy consumption for smart buildings and cities.',
      status: 'Research Phase',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Projects showcase"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0B0C10]/90 to-[#0B0C10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformative projects that showcase our expertise in delivering innovative technology solutions across industries.
            </p>
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
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Projects</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Explore our recent success stories and see how we've helped organizations transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#00AEEF] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00AEEF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center space-x-1 bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-medium px-3 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Coming Soon</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto">
              Exciting new projects in development that will push the boundaries of technology innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700 relative overflow-hidden group hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#00AEEF]/20 to-transparent rounded-bl-full" />

                <div className="relative z-10">
                  <div className="inline-block bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {project.status}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-[#00AEEF] text-sm font-semibold mb-3">{project.category}</p>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#00AEEF]/50 transition-all duration-300"
            >
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
