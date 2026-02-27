// src/pages/Home.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig";


import HeroBanner from "../components/HeroBanner";
import Highlights from "../components/Highlights";
import CTAButtons from "../components/CTAButtons";
import MachineGallerySection from "../components/MachineGallerySection"; // added
import MachinePromoSection from "../components/machinepromo";

import { Wrench, Factory, MapPin, IndianRupee } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Meta */}
      <Helmet>
        <title>{metaConfig.home.title}</title>
        <meta name="description" content={metaConfig.home.description} />
      </Helmet>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Orbitron']"></h2>
          <Highlights />
        </div>
      </section>

      {/* 👇 Machine Gallery Section (right after Highlights) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-['Playfair Display'] font-bold tracking-wide text-gray-900 text-center mb-12"></h2>

          {/* Machine gallery component */}
          <MachineGallerySection />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-['Orbitron'] font-bold tracking-wide text-gray-900">
              Why Choose Us?
            </h2>
            <div className="mt-3 h-1 w-24 mx-auto bg-blue-600 rounded"></div>
            <p className="mt-6 text-lg text-gray-600 font-['Roboto']">
              Delivering excellence across Printing, Food, and Textile Machinery.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-white border border-gray-300 shadow-inner">
                <Wrench className="w-7 h-7 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 font-['Orbitron']">
                  Expertise
                </h3>
                <p className="mt-2 text-gray-600 font-['Roboto']">
                  Years of experience in multiple industries.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-white border border-gray-300 shadow-inner">
                <MapPin className="w-7 h-7 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 font-['Orbitron']">
                  Nationwide Reach
                </h3>
                <p className="mt-2 text-gray-600 font-['Roboto']">
                  Serving clients across India with fast delivery.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-white border border-gray-300 shadow-inner">
                <Factory className="w-7 h-7 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 font-['Orbitron']">
                  Customization
                </h3>
                <p className="mt-2 text-gray-600 font-['Roboto']">
                  Tailored solutions for unique business needs.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-white border border-gray-300 shadow-inner">
                <IndianRupee className="w-7 h-7 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 font-['Orbitron']">
                  Competitive Pricing
                </h3>
                <p className="mt-2 text-gray-600 font-['Roboto']">
                  High quality at affordable rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <CTAButtons />
        </div>
      </section>

      {/* Promo section placed directly above the Footer */}
      <MachinePromoSection />
    </div>
  );
};

export default Home;
