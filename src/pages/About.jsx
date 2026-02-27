// src/pages/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // adjust path if needed

const About = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.about.title}</title>
        <meta name="description" content={metaConfig.about.description} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16">
          <span className="text-black">About </span>
          <span className="text-blue-600">Yentratek Innovations</span>
        </h1>

        {/* Company Overview */}
        <section className="mb-20 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At <span className="font-semibold text-blue-600">Yentratek Innovations</span>, 
            we engineer solutions that power the future of{" "}
            <span className="font-medium">Printing</span>,{" "}
            <span className="font-medium">Food & Beverage</span>, and{" "}
            <span className="font-medium">Textile Machinery</span>.  
            Since our inception, we’ve been committed to blending{" "}
            <span className="font-semibold text-blue-600">innovation</span>,{" "}
            <span className="font-semibold text-blue-600">trust</span>, and{" "}
            <span className="font-semibold text-blue-600">excellence</span> to help
            industries grow with confidence.
          </p>
        </section>

        {/* Milestones */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Our Journey & Milestones
          </h2>

          <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
            {/* 2020 */}
            <div>
              <h3 className="text-lg font-bold">2020</h3>
              <p className="text-gray-700">
                Established with a focus on{" "}
                <strong>Printing & Packaging solutions</strong>.
              </p>
            </div>

            {/* 2022 */}
            <div>
              <h3 className="text-lg font-bold">2022</h3>
              <p className="text-gray-700">
                Entered the <strong>Textile Machinery</strong> sector.
              </p>
            </div>

            {/* 2025 with dot on timeline line */}
            <div className="relative">
              {/* ✅ Dot perfectly on the line */}
              <span className="absolute -left-[2.1rem] top-2 w-4 h-4 bg-blue-600 rounded-full"></span>
              <h3 className="text-lg font-bold">2025</h3>
              <p className="text-gray-700">
                Expanded into <strong>Food & Beverage machinery</strong> solutions.
              </p>
            </div>

            {/* Future Ready */}
            <div>
              <h3 className="text-lg font-bold">Future Ready</h3>
              <p className="text-gray-700">
                Established advanced <strong>R&D facilities</strong> to deliver 
                custom innovations for tomorrow’s industries.
              </p>
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-12">
            What Makes Us Strong
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition">
              <div className="text-blue-600 text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Expertise & Quality</h3>
              <p className="text-gray-600">
                Industry-honed expertise ensuring uncompromised machine
                performance and quality standards.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition">
              <div className="text-blue-600 text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Tailored solutions and support built around long-term client
                success.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition">
              <div className="text-blue-600 text-3xl mb-3">💡</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuous R&D to bring smarter, faster, and more sustainable
                machinery.
              </p>
            </div>
            <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition">
              <div className="text-blue-600 text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                Transparent practices and a partner-first approach you can rely
                on.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
