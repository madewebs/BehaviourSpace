import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00293b] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              BehaviorSpace
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              BehaviorSpace is dedicated to providing innovative solutions that
              help organizations understand and optimize behavioral patterns.
              We believe in creating meaningful digital experiences that drive
              growth and foster positive change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offline Services */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              Offline Services
            </h4>

            <div className="space-y-5 text-sm sm:text-base text-gray-400">

              <div>
                <p className="font-semibold text-gray-300 mb-1">
                  Saudi Arabia
                </p>
                <p className="leading-relaxed">
                  ABA Arrawath City<br />
                  Street Umm Khunsur 703<br />
                  Building No: 5187<br />
                  Arar, KSA – 73497
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-300 mb-1">
                  Bahrain
                </p>
                <p className="leading-relaxed">
                  Flat A64, Al Matrook Plaza<br />
                  Building 1835, Road 4047<br />
                  Block 340, Juffair<br />
                  Bahrain
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-300 mb-1">
                  India
                </p>
                <p className="leading-relaxed">
                  Medical College, Kovoor<br />
                  Opposite Petrol Pump<br />
                  Kozhikode, Kerala – 673008
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-300 mb-1">
                  India
                </p>
                <p className="leading-relaxed">
                  PARC Rehabilation centre<br />
                  Mannur valavu<br />
                  Kadalundi Road<br />
                  Kozhikode, Kerala – 673008
                </p>
              </div>

            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-md font-semibold mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} BehaviorSpace. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Designed and developed with precision and care.
          </p>
        </div>

      </div>
    </footer>
  );
}
