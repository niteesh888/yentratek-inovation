// src/components/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // go up 2 levels from components/

const Products = () => {
  const categories = [
    {
      title: "Printing & Packaging Machines",
      desc: "Explore finishing, printing, cutting, and more advanced machinery.",
      link: "/products/printing",
      img: "/images/printing.webp",
      accent: "blue",
      label: "Printing & Packaging",
    },
    {
      title: "Food & Beverages Machines",
      desc: "Discover mixers, ovens, display equipment, and packaging solutions.",
      link: "/products/food",
      img: "/images/Bottle.png",
      accent: "amber",
      label: "Food & Beverage",
    },
    {
      title: "Textile Machines",
      desc: "Browse sewing, fusing, cutting, inspection, and textile machinery.",
      link: "/products/textiles",
      img: "/images/Text1.png",
      accent: "fuchsia",
      label: "Textile",
    },
  ];

  const cardBg = {
    blue: "bg-gradient-to-br from-blue-50 via-white to-blue-50/40 ring-blue-200/60",
    amber: "bg-gradient-to-br from-amber-50 via-white to-amber-50/40 ring-amber-200/60",
    fuchsia: "bg-gradient-to-br from-fuchsia-50 via-white to-fuchsia-50/30 ring-fuchsia-200/60",
  };

  const accentText = {
    blue: "text-blue-600",
    amber: "text-amber-700",
    fuchsia: "text-fuchsia-600",
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.products.title}</title>
        <meta name="description" content={metaConfig.products.description} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
          <span className="text-black">Our </span>
          <span className="text-blue-600">Products</span>
        </h1>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <article
              key={i}
              className={`relative rounded-2xl p-1 shadow-lg transition-transform hover:scale-[1.01] ${cardBg[cat.accent]}`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl h-full flex flex-col p-6 md:p-8">
                {/* Label */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/90 shadow-sm ${accentText[cat.accent]}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.6}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4M7.5 4.5h9M7.5 9h9"
                      />
                    </svg>
                  </span>
                  <span className={`text-sm font-semibold ${accentText[cat.accent]}`}>
                    {cat.label}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight mb-3">
                  {cat.title}
                </h2>

                {/* Desc */}
                <p className="text-gray-600 text-[15px] md:text-base mb-6">{cat.desc}</p>

                {/* Image */}
                <div className="flex justify-center items-center my-2 md:my-4">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="max-h-40 md:max-h-44 object-contain"
                  />
                </div>

                <div className="flex-1" />

                {/* Explore More Button */}
                <div className="mt-6 flex justify-center">
                  <Link
                    to={cat.link}
                    className="inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded-md shadow hover:bg-blue-700 transition"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
