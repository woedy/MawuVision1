import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0C10] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/mawu-vision-logo.png"
                alt="Mawu Vision Logo"
                className="w-8 h-8"
              />
              <span className="text-xl text-white">
                <span className="font-bold">Mawu</span><span className="text-[#00AEEF]">Vision</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building intelligent, secure, and connected futures through innovative technology solutions.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#00AEEF] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#00AEEF] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#00AEEF] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#00AEEF] transition-colors text-sm">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">IT Systems</li>
              <li className="text-gray-400 text-sm">Cybersecurity</li>
              <li className="text-gray-400 text-sm">AI & Robotics</li>
              <li className="text-gray-400 text-sm">Fintech Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                <span>hello@mawuvision.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-[#00AEEF] flex-shrink-0" />
                <span>Accra, Ghana</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00AEEF] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00AEEF] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00AEEF] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mawu Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
