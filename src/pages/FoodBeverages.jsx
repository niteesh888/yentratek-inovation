// src/pages/FoodBeverages.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // adjust path if needed

const FoodBeverages = () => {
  const products = [
    {
      name: "Industrial Oven",
      desc: "High-capacity oven with precise temperature control for consistent baking.",
      img: "/images/Oven.jpg",
    },
    {
      name: "Automatic Packaging Machine",
      desc: "Seamless food packaging solutions for efficiency and hygiene.",
      img: "/images/Automatic.png",
    },
    {
      name: "Juice Processing Machine",
      desc: "Efficient system for extracting, filtering, and bottling fresh juices.",
      img: "/images/Bottle.png",
    },
    {
      name: "Bottling & Filling Machine",
      desc: "Automated liquid filling and bottling system for beverages.",
      img: "/images/Juice.jpeg",
    },
    {
      name: "Food Packaging Machine",
      desc: "Advanced system for packing pouches, trays, and bottles with precision.",
      img: "/images/ff.webp",
    },
    {
      name: "Juice Extractor",
      desc: "High-speed extractor for fresh fruit and vegetable juice production.",
      img: "/images/foo.webp",
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.food.title}</title>
        <meta name="description" content={metaConfig.food.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
          <span className="text-black">Food & </span>
          <span className="text-blue-600">Beverages Machines</span>
        </h1>

        {/* Product Catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
            >
              {/* Image */}
              <div className="h-56 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full w-auto object-contain animate-zoom"
                  style={{ animationDelay: `${i * 0.28}s` }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <a
                  href="/contact"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodBeverages;
