import React from "react";
import { Wrench, ShoppingCart, Cog } from "lucide-react";
import { motion } from "framer-motion";

/* Add fonts globally in index.css:
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Roboto:wght@400;500&display=swap');
*/

const items = [
  {
    title: "Sales & Dealership",
    desc: "Top brands and proprietary machines.",
    Icon: ShoppingCart,
  },
  {
    title: "Service & Support",
    desc: "Maintenance, spares, technical training.",
    Icon: Wrench,
  },
  {
    title: "Manufacturing & Customization",
    desc: "Custom machines for your process.",
    Icon: Cog,
  },
];

const Highlights = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const child = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 140 } },
  };

  return (
    <>
      <style>{`
        @keyframes spin-slow { 
          from { transform: rotate(0deg) } 
          to { transform: rotate(360deg) } 
        }
        .spin-slow { animation: spin-slow 14s linear infinite; }
      `}</style>

      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-['Orbitron'] font-bold tracking-wide text-gray-900">
          Our Key Highlights
        </h2>
        <div className="mt-3 h-1 w-24 mx-auto bg-blue-600 rounded"></div>
        <p className="mt-4 text-gray-600 text-lg md:text-xl font-['Roboto']">
          Driving innovation and reliability across industries.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {items.map(({ title, desc, Icon }, i) => (
          <motion.div
            key={i}
            variants={child}
            className="flex flex-col items-center justify-center h-64 p-8 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon with rotating gear */}
            <div className="relative mb-4">
              <div className="grid place-items-center w-16 h-16 rounded-full bg-slate-100 border border-slate-300">
                <Icon className="w-8 h-8 text-slate-900" />
              </div>
              <svg
                className="absolute -inset-2 spin-slow"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 7a5 5 0 100 10 5 5 0 000-10zm9 5a8.9 8.9 0 00-.2-1.7l2-1.5-1.9-3.3-2.4 1a9 9 0 00-2.9-1.7L15 1H9l-.4 3.8a9 9 0 00-2.9 1.7l-2.4-1L1.4 8.8l2 1.5A9 9 0 003 12c0 .6.06 1.2.2 1.7l-2 1.5 1.9 3.3 2.4-1a9 9 0 002.9 1.7L9 23h6l.4-3.8a9 9 0 002.9-1.7l2.4 1 1.9-3.3-2-1.5c.13-.55.2-1.12.2-1.7z"
                  stroke="rgb(51 65 85 / 0.6)"
                  strokeWidth="0.6"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-1.5xl font-semibold text-slate-900 font-['Orbitron']">
              {title}
            </h3>
            <p className="mt-2 text-base md:text-lg text-slate-600 text-center font-['Roboto']">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Highlights;
