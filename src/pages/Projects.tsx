import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Tag, Search, X, Filter } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

// Project type definition
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  highlights: string[];
}

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const projects: Project[] = [
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

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Extract all unique categories and tags for filtering
  const allCategories = useMemo(() => {
    const categories = new Set(projects.map(project => project.category));
    return Array.from(categories);
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set(projects.flatMap(project => project.tags));
    return Array.from(tags);
  }, []);

  // Filter projects based on search and active filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search term filter
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Category/tag filter
      const matchesFilters = activeFilters.length === 0 || 
        activeFilters.some(filter => 
          project.category === filter || 
          project.tags.includes(filter)
        );
      
      return matchesSearch && matchesFilters;
    });
  }, [projects, searchTerm, activeFilters]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActiveFilters([]);
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Projects showcase"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0B0C10]/90 to-[#0B0C10]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {isLoading ? (
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
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Controls */}
          <motion.div 
            className="mb-12 bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search projects"
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-white transition-colors duration-200"
                aria-expanded={isFilterOpen}
                aria-controls="filter-panel"
              >
                <Filter className="h-5 w-5" />
                <span>Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
              </button>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activeFilters.map(filter => (
                  <span 
                    key={filter}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00AEEF]/20 text-[#00AEEF] border border-[#00AEEF]/30"
                  >
                    {filter}
                    <button 
                      onClick={() => toggleFilter(filter)}
                      className="ml-2 rounded-full hover:bg-[#00AEEF]/30 p-0.5"
                      aria-label={`Remove ${filter} filter`}
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                ))}
                <button 
                  onClick={clearFilters}
                  className="text-sm text-gray-400 hover:text-white ml-2 flex items-center"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Filter Panel */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  id="filter-panel"
                  initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-gray-800"
                >
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-300 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {allCategories.map(category => (
                        <button
                          key={category}
                          onClick={() => toggleFilter(category)}
                          className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                            activeFilters.includes(category)
                              ? 'bg-[#00AEEF] border-[#00AEEF] text-white'
                              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map(tag => (
                        <button
                          key={tag}
                          onClick={() => toggleFilter(tag)}
                          className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                            activeFilters.includes(tag)
                              ? 'bg-[#14B8A6] border-[#14B8A6] text-white'
                              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-96 bg-gray-800/50 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-4xl font-bold text-white mb-2">
                  {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
                </h2>
                <p className="text-gray-400">
                  {searchTerm || activeFilters.length > 0 
                    ? 'Filtered results' 
                    : 'All projects'}
                </p>
              </motion.div>

              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00AEEF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00AEEF]/10"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div>
                            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#00AEEF] text-white mb-2">
                              {project.category}
                            </span>
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-[#00AEEF] transition-colors duration-200">
                              {project.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{project.date}</span>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            {project.tags.slice(0, 2).map(tag => (
                              <span 
                                key={tag}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 2 && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-500">
                                +{project.tags.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                        <div className="space-y-2 mb-4">
                          {project.highlights.slice(0, 2).map((highlight, i) => (
                            <div key={i} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 text-[#00AEEF] mr-2 mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-sm text-gray-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <button className="inline-flex items-center text-[#00AEEF] hover:text-[#14B8A6] transition-colors duration-200 font-medium group">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="mx-auto w-24 h-24 text-gray-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    We couldn't find any projects matching your search. Try adjusting your filters or search term.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-6 px-6 py-2 bg-[#00AEEF] hover:bg-[#14B8A6] text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
