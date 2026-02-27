import React from "react";

const Manufacturing = () => {
  const caseStudies = [
    {
      name: "Custom Packaging Line",
      desc: "A fully automated packaging line designed for a leading FMCG brand. Increased efficiency by 40%.",
      img: "/images/Cous.png",
    },
    {
      name: "Specialized Textile Cutting Machine",
      desc: "Tailor-made cutting solution for a garment exporter, reducing wastage by 25%.",
      img: "/images/Cut11.png",
    },
    {
      name: "Food Processing Mixer",
      desc: "Developed a heavy-duty mixer with smart controls for a large food manufacturer.",
      img: "/images/Food22.png",
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-6">
  <span className="text-black">Manufacturing & </span>
  <span className="text-blue-600">Custom Solutions</span>
</h1>


        {/* Intro */}
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At Yentratek Innovations, we don’t just sell machines — we design and
          manufacture <strong>custom-built solutions</strong> tailored to unique industry
          requirements. With strong R&D capabilities and years of expertise, we
          help businesses gain a competitive edge.
        </p>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transform transition hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Image box */}
              <div className="h-60 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={cs.img}
                  alt={cs.name}
                  className="max-h-full w-auto object-contain animate-zoom"
                  style={{ animationDelay: `${i * 0.28}s` }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-center">{cs.name}</h3>
                <p className="text-gray-600 mb-4 text-center flex-grow">{cs.desc}</p>

                {/* Centered Request Info button */}
                <div className="flex justify-center mt-auto">
                  <a
                    href="/contact"
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition"
                  >
                    Request Info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition"
          >
            Request a Custom Solution
          </a>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
