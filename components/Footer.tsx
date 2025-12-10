import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00293b] text-gray-300 pt-12 pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">BehaviourSpace</h3>
            <p className="text-md text-gray-400 leading-relaxed">
              BehaviourSpace is dedicated to providing innovative solutions that help organizations understand and optimize behavioral patterns. We believe in creating meaningful digital experiences that drive growth and foster positive change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-2">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} BehaviourSpace. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-1">
            Designed and developed with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
}