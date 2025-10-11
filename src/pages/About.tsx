import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, TrendingUp, Award, Globe } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Kwame Mensah',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      bio: 'Visionary leader with 15+ years in enterprise technology and innovation.',
    },
    {
      name: 'Ama Osei',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      bio: 'Expert in AI/ML systems and cloud architecture with a passion for scalable solutions.',
    },
    {
      name: 'Kofi Asante',
      role: 'Head of Cybersecurity',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      bio: 'Certified security professional specializing in penetration testing and threat analysis.',
    },
    {
      name: 'Akosua Boateng',
      role: 'Head of Fintech Solutions',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      bio: 'Financial technology innovator with expertise in blockchain and payment systems.',
    },
  ];

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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
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
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]">
                <span className="font-bold">Mawu</span><span className="">Vision</span>
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to shaping the future through intelligent, secure, and innovative solutions.
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
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Story</h2>
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
              className="bg-gradient-to-br from-[#00AEEF]/10 to-[#14B8A6]/10 rounded-2xl p-8 border border-[#00AEEF]/20"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be recognized globally as the premier technology partner for organizations seeking to transform their operations through intelligent, secure, and innovative solutions. We envision a world where technology seamlessly integrates with human potential, creating opportunities for growth, protection, and prosperity across all industries and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#14B8A6]/10 to-[#00AEEF]/10 rounded-2xl p-8 border border-[#14B8A6]/20"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver world-class technology solutions that empower businesses to thrive in the digital age. We are committed to innovation without compromise, security without complexity, and results without excuses. Our mission is to be more than a service provider—we aim to be a trusted partner in our clients' success stories.
              </p>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
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
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-[#00AEEF] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00AEEF] to-[#14B8A6] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Leadership</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our team of experienced professionals brings decades of combined expertise in technology, innovation, and business strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent opacity-60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#00AEEF] text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
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
              Join Us on This Journey
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              At Mawu Vision, we believe the future belongs to those who dare to innovate. Whether you're looking to transform your business or explore partnership opportunities, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
