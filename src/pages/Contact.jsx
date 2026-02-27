// src/pages/Contact.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // adjust path if needed

const btnBlueClass =
  "inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded-md shadow hover:bg-blue-700 transition";

const Contact = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.contact.title}</title>
        <meta name="description" content={metaConfig.contact.description} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
          <span className="text-black">Contact </span>
          <span className="text-blue-600">Us</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
            <p className="text-gray-700">
              We’d love to hear from you. Whether you’re looking for machines,
              dealership opportunities, or support services — reach out today.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white border border-gray-200 grid place-items-center">
                  <img src="/images/map.png" alt="Map Icon" className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">
                    Yentratek Innovations <br />
                    Bengaluru 560058
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white border border-gray-200 grid place-items-center">
                  <img src="/images/phone.png" alt="Phone Icon" className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">9206886333</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white border border-gray-200 grid place-items-center">
                  <img src="/images/mail.png" alt="Mail Icon" className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">yentratekinnovations@gmail.com</p>
                </div>
              </div>
            </div>

            {/* small CTA */}
            <div className="mt-4">
              <a
                href="/contact"
                className={btnBlueClass}
                aria-label="Request a call back"
              >
                Request a Call Back
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message (full width) */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Write your message..."
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className={btnBlueClass}
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map area placeholder (optional) */}
        <div className="mt-12">
          {/* Add an embedded map or image here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
