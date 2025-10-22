import { motion, useScroll, useTransform } from 'framer-motion';
import { Server, Cloud, Settings, Shield, Lock, Database, Brain, Eye, Cpu, CreditCard, TrendingUp, Coins, Search } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const serviceCategories = [
    {
      category: 'Information Technology & Systems',
      description: 'Co-designing the technical foundations early customers need to launch, learn, and iterate quickly.',
      color: 'from-blue-500 to-cyan-500',
      icon: Server,
      services: [
        {
          icon: Server,
          title: 'Software Development',
          description: 'Collaborative product prototyping and MVP builds that get ideas into the hands of users fast while keeping a clear path to scale.',
          features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development'],
        },
        {
          icon: Cloud,
          title: 'Cloud Infrastructure',
          description: 'Lightweight, secure cloud setups for teams preparing for launch day, with an eye on the road to multi-region scale.',
          features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps Solutions', 'Cloud Optimization'],
        },
        {
          icon: Settings,
          title: 'IT Consulting',
          description: 'Hands-on technical strategy support for founders and operators navigating their next build-or-buy decision.',
          features: ['Technology Strategy', 'Digital Transformation', 'System Architecture', 'Technical Audits'],
        },
      ],
    },
    {
      category: 'Cybersecurity',
      description: 'Baking security into young products from day zero so teams can scale with confidence.',
      color: 'from-red-500 to-orange-500',
      icon: Shield,
      services: [
        {
          icon: Shield,
          title: 'Vulnerability Assessments',
          description: 'Lightweight audits that surface the riskiest gaps and shape an achievable hardening roadmap.',
          features: ['Network Scanning', 'Web Application Testing', 'Risk Assessment', 'Remediation Planning'],
        },
        {
          icon: Lock,
          title: 'Security Audits',
          description: 'Pragmatic reviews focused on the policies, tooling, and culture that keep early teams safe and compliant.',
          features: ['Compliance Audits', 'Penetration Testing', 'Security Policy Review', 'Incident Response Planning'],
        },
        {
          icon: Database,
          title: 'Data Protection',
          description: 'Prototyping encryption, backup, and retention approaches that balance resilience with scrappy execution.',
          features: ['Data Encryption', 'Backup & Recovery', 'Access Control', 'Data Loss Prevention'],
        },
      ],
    },
    {
      category: 'AI & Robotics',
      description: 'Experiments at the intersection of machine intelligence and real-world operations.',
      color: 'from-purple-500 to-pink-500',
      icon: Brain,
      services: [
        {
          icon: Brain,
          title: 'Machine Learning & Automation',
          description: 'Rapid ML pilots that validate value using your data, then grow into production-ready workflows.',
          features: ['Predictive Analytics', 'Process Automation', 'Natural Language Processing', 'Recommendation Systems'],
        },
        {
          icon: Eye,
          title: 'Computer Vision',
          description: 'Proofs of concept that teach cameras to understand the world around your product or facility.',
          features: ['Object Detection', 'Facial Recognition', 'Quality Inspection', 'Visual Search'],
        },
        {
          icon: Cpu,
          title: 'Intelligent Robotics Systems',
          description: "Longer-term R&D into autonomous systems that we're actively prototyping with select partners.",
          features: ['Autonomous Systems', 'Robotic Process Automation', 'IoT Integration', 'Smart Manufacturing'],
          comingSoon: true,
        },
      ],
    },
    {
      category: 'Fintech Solutions',
      description: 'Designing trustworthy financial experiences for emerging digital products.',
      color: 'from-green-500 to-emerald-500',
      icon: CreditCard,
      services: [
        {
          icon: CreditCard,
          title: 'Payment Systems',
          description: 'Co-creating payment flows that feel seamless for users and stay compliant across regions.',
          features: ['Payment Gateway Integration', 'Digital Wallets', 'Multi-Currency Support', 'PCI DSS Compliance'],
        },
        {
          icon: TrendingUp,
          title: 'Fraud Detection',
          description: 'Data-driven monitoring that learns from your transactions to flag anomalies before they become incidents.',
          features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts'],
        },
        {
          icon: Coins,
          title: 'Blockchain Integrations',
          description: 'Exploratory work on decentralized rails and tokenized assets—available for forward-looking pilots soon.',
          features: ['Smart Contracts', 'Cryptocurrency Integration', 'Decentralized Applications', 'Tokenization'],
          comingSoon: true,
        },
      ],
    },
  ];

  // Flatten all services for filtering and searching
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.category,
      categoryColor: category.color,
      categoryIcon: category.icon
    }))
  );

  // Filter services based on active filter and search term
  const filteredServices = allServices.filter(service => {
    const matchesFilter = activeFilter === 'All' || service.category === activeFilter;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Group filtered services back into categories
  const filteredCategories = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service => 
      filteredServices.some(filtered => filtered.title === service.title)
    )
  })).filter(category => category.services.length > 0);

  return (
    <div className="min-h-screen bg-[#0B0C10] pt-16">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80"
            alt="Technology services"
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
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                What We're{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]">
                  Building
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A glimpse into the concepts, prototypes, and capabilities we're validating with our earliest partners.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Filter and Search Controls */}
      {!isLoading && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900/50" aria-labelledby="services-filters">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 space-y-4 sm:space-y-0 sm:flex-row sm:gap-4 sm:items-center sm:justify-between">
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start" role="group" aria-labelledby="category-filters">
                <h3 id="category-filters" className="sr-only">Filter services by category</h3>
                <button
                  onClick={() => setActiveFilter('All')}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 ${
                    activeFilter === 'All'
                      ? 'bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-pressed={activeFilter === 'All'}
                  aria-label="Show all services"
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.category}
                    onClick={() => setActiveFilter(category.category)}
                    className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-offset-2 ${
                      activeFilter === category.category
                        ? 'bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] text-white shadow-lg'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    aria-pressed={activeFilter === category.category}
                    aria-label={`Filter services to show only ${category.category}`}
                  >
                    {category.category.length > 15 ? category.category.substring(0, 15) + '...' : category.category}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full sm:w-auto max-w-md">
                <label htmlFor="services-search" className="sr-only">Search services</label>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" aria-hidden="true" />
                <input
                  id="services-search"
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent text-sm sm:text-base"
                  aria-describedby="search-help"
                />
                <div id="search-help" className="sr-only">Search across service titles, descriptions, and features</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {filteredCategories.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            categoryIndex % 2 === 1 ? 'bg-gradient-to-b from-[#0B0C10] to-gray-900' : ''
          }`}
          aria-labelledby={`category-${categoryIndex}-heading`}
        >
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              // Loading Skeletons for Service Categories
              <>
                <div className="text-center mb-16">
                  <div className="h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-4 mx-auto w-1/2"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse mx-auto w-2/3"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="h-80 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl animate-pulse"></div>
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
                  <div className="inline-flex items-center justify-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h2 className="text-4xl font-bold text-white" id={`category-${categoryIndex}-heading`}>{category.category}</h2>
                  </div>
                  <p className="text-gray-400 text-lg max-w-2xl mx-auto">{category.description}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-[#00AEEF] hover:bg-gray-800/70 hover:shadow-xl hover:shadow-[#00AEEF]/20 transition-all duration-300 overflow-hidden focus-within:ring-2 focus-within:ring-[#00AEEF] focus-within:ring-offset-2"
                      role="article"
                      aria-labelledby={`service-${serviceIndex}-title`}
                    >
                      {service.comingSoon && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] text-white text-xs font-bold px-3 py-1 rounded-full" aria-label="Coming soon">
                          COMING SOON
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10`}>
                        <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00AEEF] transition-colors duration-300" id={`service-${serviceIndex}-title`}>{service.title}</h3>
                        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-[#00AEEF] uppercase tracking-wide">Key Features</p>
                          <ul className="space-y-2" role="list">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300" role="listitem">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] group-hover:bg-[#14B8A6] transition-colors duration-300" aria-hidden="true" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10">
        <div className="max-w-4xl mx-auto text-center">
          {isLoading ? (
            // Loading Skeleton for CTA Section
            <>
              <div className="h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse mb-6 mx-auto w-3/4"></div>
              <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded animate-pulse mb-8 mx-auto w-5/6"></div>
              <div className="h-14 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg animate-pulse w-48 mx-auto"></div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 text-base sm:text-lg mb-8">
                  Let's discuss how our services can help you achieve your technology goals and drive business growth.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-[#00AEEF]/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#00AEEF]/50 text-sm sm:text-base"
                >
                  Contact Us Today
                </a>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
