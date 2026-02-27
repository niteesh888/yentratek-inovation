// src/pages/PrintingPackaging.jsx (or wherever you keep it)
import React from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // adjust path if needed

const PrintingPackaging = () => {
  const products = [
    {
      category: "High-Speed Printing Machines",
      machines: [
        {
          name: "Flexographic Printing Machine",
          desc: "High-speed flexo printer with precise color registration.",
          img: "/images/Flexogrophic.png",
        },
        {
          name: "Digital Offset Printing Machine",
          desc: "Eco-friendly digital offset printer with fast turnaround.",
          img: "/images/Offset1.png",
        },
      ],
    },
    {
      category: "Automatic Cutting Machines",
      machines: [
        {
          name: "Automatic Guillotine Cutter",
          desc: "Heavy-duty cutter designed for continuous bulk operations.",
          img: "/images/guill.webp",
        },
        {
          name: "CNC Die-Cutting Machine",
          desc: "Precision CNC system for detailed packaging designs.",
          img: "/images/cncc.jpeg",
        },
      ],
    },
    {
      category: "Lamination & Finishing Machines",
      machines: [
        {
          name: "Thermal Lamination Machine",
          desc: "Durable lamination for packaging and print materials.",
          img: "/images/Thermal.png",
        },
        {
          name: "UV Coating & Embossing Machine",
          desc: "Glossy UV coating and embossed finishes for premium quality.",
          img: "/images/UV.avif",
        },
      ],
    },
    {
      category: "Die Punching Machines",
      machines: [
        {
          name: "Automatic Die Punching Machine",
          desc: "High-precision automatic punching for bulk packaging sheets.",
          img: "/images/die.jpg",
        },
        {
          name: "Flatbed Die Punching Machine",
          desc: "Ideal for carton, corrugated and label punching applications.",
          img: "/images/die2.png",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.printing.title}</title>
        <meta name="description" content={metaConfig.printing.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
          <span className="text-black">Printing & </span>
          <span className="text-blue-600">Packaging Machines</span>
        </h1>

        {/* Product Categories */}
        <div className="space-y-16">
          {products.map((product, i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
                {product.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {product.machines.map((machine, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-xl shadow overflow-hidden transition transform hover:-translate-y-0"
                  >
                    {/* Image */}
                    <div className="h-56 bg-white flex items-center justify-center overflow-hidden">
                      <img
                        src={machine.img}
                        alt={machine.name}
                        className="max-h-full w-auto object-contain animate-zoom"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{machine.name}</h3>
                      <p className="text-gray-600 mb-4">{machine.desc}</p>
                      <div>
                        <a
                          href="/contact"
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition"
                        >
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintingPackaging;
