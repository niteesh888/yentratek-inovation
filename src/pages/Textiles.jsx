// src/pages/Textiles.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // adjust path if needed

const Textiles = () => {
  const categories = [
    {
      title: "Sewing Machines",
      products: [
        {
          name: "Industrial Sewing Machine",
          desc: "High-speed sewing machine for garment manufacturing.",
          img: "/images/sewing.jpeg",
        },
        {
          name: "Overlock Sewing Machine",
          desc: "Specialized for seam finishing and preventing fabric fraying.",
          img: "/images/Overlock.jpeg",
        },
        {
          name: "Embroidery Machine",
          desc: "Automated embroidery for detailed garment designs.",
          img: "/images/Emb.png",
        },
      ],
    },
  ];

  return (
    <div className="w-full py-16 bg-white">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.textile.title}</title>
        <meta name="description" content={metaConfig.textile.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
          <span className="text-black">Textile </span>
          <span className="text-blue-600">Machines</span>
        </h1>

        {/* Categories */}
        {categories.map((category, idx) => (
          <div key={idx} className="mb-16">
            {/* Subcategory Title */}
            <h2 className="text-2xl font-semibold mb-6 text-center border-b-2 border-gray-200 pb-2 mx-auto w-fit">
              {category.title}
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.products.map((product, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition"
                >
                  {/* Image */}
                  <div className="h-56 bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="max-h-full w-auto object-contain animate-zoom"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.desc}</p>
                    <a
                      href="/contact"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Textiles;
