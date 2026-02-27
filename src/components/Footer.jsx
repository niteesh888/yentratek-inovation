import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react"; // clean white icons

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative">
        {/* Stylish top border line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Yentratek</h2>
            <p className="text-gray-400">
              Precision Sales & Service Solutions across Printing, Food, and
              Textile Machinery. Trusted by industries nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white" />
                <p>Bengaluru 560058
</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white" />
                <p>9206886333</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white" />
                <p>yentratekinnovations@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Yentratek Innovations. All Rights Reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9206886333" // change to your WhatsApp number
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-transform z-50"
      >
        <img
          src="/images/whatsapp.png" // put whatsapp.png inside public/images/
          alt="WhatsApp"
          className="w-full h-full object-contain"
        />
      </a>
    </>
  );
};

export default Footer;
