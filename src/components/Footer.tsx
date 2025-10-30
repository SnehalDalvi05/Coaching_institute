import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg text-white">SRP</span>
                <span className="text-xs text-gray-400">Tutorials</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Empowering students to achieve their dreams through quality education and personalized guidance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/srptutorials?igsh=aGQ1MjFjd3Q1cnR1" className="hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('courses')} className="hover:text-blue-400 transition-colors">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admissions')} className="hover:text-blue-400 transition-colors">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-blue-400 transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>1st to 10th Standard – All Subjects</li>
              <li>11th & 12th Standard – Science Stream</li>
              <li>11th & 12th Standard – Commerce Stream</li>
            </ul>

          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Dr. Babasaheb Ambedkar CHSL, Mhada Colony Road,
                  Near RNA Park, Vasi Naka, Mumbai, Maharashtra 400074.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>7021929355 / 9987136969</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@srptutorials.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} SRP Tutorials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
