import React from "react";

const ProductCard = ({ name, desc, img, brochure }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition">
      <img
        src={img}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>
        <div className="flex flex-wrap gap-3">
          {brochure && (
            <a
              href={brochure}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium hover:bg-gray-300"
            >
              Download Brochure
            </a>
          )}
          <a
            href="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
