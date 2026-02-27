import React from "react";

const Downloads = () => {
  const resources = [
    {
      category: "Printing & Packaging",
      files: [
        { name: "High-Speed Printing Machine Brochure", file: "/brochures/printing1.pdf" },
        { name: "Cutting Machine Manual", file: "/brochures/printing2.pdf" },
      ],
    },
    {
      category: "Food & Beverages",
      files: [
        { name: "Commercial Mixer Catalog", file: "/brochures/food1.pdf" },
        { name: "Industrial Oven Brochure", file: "/brochures/food2.pdf" },
      ],
    },
    {
      category: "Textiles",
      files: [
        { name: "Sewing Machine Spec Sheet", file: "/brochures/textile1.pdf" },
        { name: "Fabric Cutting Machine Brochure", file: "/brochures/textile3.pdf" },
      ],
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
  <span className="text-black">Downloads & </span>
  <span className="text-blue-600">Resources</span>
</h1>


        {/* Resource Sections */}
        <div className="space-y-12">
          {resources.map((section, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
              <ul className="space-y-4">
                {section.files.map((file, j) => (
                  <li
                    key={j}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <span className="text-gray-700">{file.name}</span>
                    <a
                      href={file.file}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
