import { motion } from 'framer-motion';
import { Server, Cloud, Settings, Shield, Lock, Database, Brain, Eye, Cpu, CreditCard, TrendingUp, Coins } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      category: 'Information Technology & Systems',
      description: 'Comprehensive IT solutions that drive digital transformation and operational excellence.',
      color: 'from-blue-500 to-cyan-500',
      icon: Server,
      services: [
        {
          icon: Server,
          title: 'Software Development',
          description: 'Custom software solutions tailored to your business needs. We build scalable, maintainable applications using modern frameworks and best practices.',
          features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development'],
        },
        {
          icon: Cloud,
          title: 'Cloud Infrastructure',
          description: 'Design, migration, and management of cloud infrastructure on AWS, Azure, and Google Cloud. Optimize costs while maximizing performance and reliability.',
          features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Solutions', 'Cloud Optimization'],
        },
        {
          icon: Settings,
          title: 'IT Consulting',
          description: 'Strategic technology consulting to align your IT investments with business objectives. We help you make informed decisions about technology adoption and digital transformation.',
          features: ['Technology Strategy', 'Digital Transformation', 'System Architecture', 'Technical Audits'],
        },
      ],
    },
    {
      category: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and maintain compliance.',
      color: 'from-red-500 to-orange-500',
      icon: Shield,
      services: [
        {
          icon: Shield,
          title: 'Vulnerability Assessments',
          description: 'Comprehensive security assessments to identify and prioritize vulnerabilities in your systems before attackers can exploit them.',
          features: ['Network Scanning', 'Web Application Testing', 'Risk Assessment', 'Remediation Planning'],
        },
        {
          icon: Lock,
          title: 'Security Audits',
          description: 'In-depth security audits to evaluate your security posture, compliance status, and identify areas for improvement in your security program.',
          features: ['Compliance Audits', 'Penetration Testing', 'Security Policy Review', 'Incident Response Planning'],
        },
        {
          icon: Database,
          title: 'Data Protection',
          description: 'Advanced data protection strategies including encryption, backup solutions, and data loss prevention to keep your sensitive information secure.',
          features: ['Data Encryption', 'Backup & Recovery', 'Access Control', 'Data Loss Prevention'],
        },
      ],
    },
    {
      category: 'AI & Robotics',
      description: 'Cutting-edge artificial intelligence and automation solutions for the future of work.',
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      services: [
        {
          icon: Brain,
          title: 'Machine Learning & Automation',
          description: 'Intelligent automation solutions powered by machine learning algorithms. Transform your operations with predictive analytics and automated decision-making.',
          features: ['Predictive Analytics', 'Process Automation', 'Natural Language Processing', 'Recommendation Systems'],
        },
        {
          icon: Eye,
          title: 'Computer Vision',
          description: 'Advanced computer vision systems for image and video analysis. Enable machines to understand and interpret visual information from the world.',
          features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Visual Search'],
        },
        {
          icon: Cpu,
          title: 'Intelligent Robotics Systems',
          description: 'Next-generation robotics solutions combining AI, sensors, and advanced control systems. Coming soon to revolutionize manufacturing and logistics.',
          features: ['Autonomous Systems', 'Robotic Process Automation', 'IoT Integration', 'Smart Manufacturing'],
          comingSoon: true,
        },
      ],
    },
    {
      category: 'Fintech Solutions',
      description: 'Secure and innovative financial technology solutions for the digital economy.',
      color: 'from-green-500 to-emerald-500',
      icon: CreditCard,
      services: [
        {
          icon: CreditCard,
          title: 'Payment Systems',
          description: 'Robust payment processing solutions with support for multiple payment methods, currencies, and regulatory compliance across regions.',
          features: ['Payment Gateway Integration', 'Digital Wallets', 'Multi-Currency Support', 'PCI DSS Compliance'],
        },
        {
          icon: TrendingUp,
          title: 'Fraud Detection',
          description: 'AI-powered fraud detection systems that analyze transactions in real-time to identify and prevent fraudulent activities before they impact your business.',
          features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts'],
        },
        {
          icon: Coins,
          title: 'Blockchain Integrations',
          description: 'Secure blockchain solutions for transparent, immutable transactions. Coming soon to bring decentralized finance capabilities to your platform.',
          features: ['Smart Contracts', 'Cryptocurrency Integration', 'Decentralized Applications', 'Tokenization'],
          comingSoon: true,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80"
            alt="Technology services"
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
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and secure your digital future.
            </p>
          </motion.div>
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            categoryIndex % 2 === 1 ? 'bg-gradient-to-b from-[#0B0C10] to-gray-900' : ''
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">{category.category}</h2>
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-[#00AEEF] transition-all duration-300 group"
                >
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] text-white text-xs font-bold px-3 py-1 rounded-full">
                      COMING SOON
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#00AEEF] uppercase tracking-wide">Key Features</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how our services can help you achieve your technology goals and drive business growth.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#00AEEF]/50 transition-all duration-300"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
