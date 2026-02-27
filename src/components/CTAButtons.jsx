import React from "react";
import { Wrench, ShoppingCart, Cog } from "lucide-react";

const CTAButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* Explore Machines */}
      <a
        href="/products"
        className="group relative flex items-center gap-2 px-8 py-4 border-2 border-blue-600 bg-blue-600 text-white font-['Orbitron'] font-bold uppercase tracking-wide rounded-xl hover:bg-blue-700 transition-all duration-300"
      >
        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Explore Machines
        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -inset-y-12 -left-12 w-12 bg-white/30 rotate-45 translate-x-[-150%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
        </span>
      </a>

      {/* Request a Quote */}
      <a
        href="/contact"
        className="group relative flex items-center gap-2 px-8 py-4 border-2 border-green-600 bg-green-600 text-white font-['Orbitron'] font-bold uppercase tracking-wide rounded-xl hover:bg-green-700 transition-all duration-300"
      >
        <Wrench className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Request a Quote
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -inset-y-12 -left-12 w-12 bg-white/30 rotate-45 translate-x-[-150%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
        </span>
      </a>

      {/* Book Service */}
      <a
        href="/services"
        className="group relative flex items-center gap-2 px-8 py-4 border-2 border-yellow-500 bg-yellow-500 text-black font-['Orbitron'] font-bold uppercase tracking-wide rounded-xl hover:bg-yellow-600 transition-all duration-300"
      >
        <Cog className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Book Service
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -inset-y-12 -left-12 w-12 bg-white/30 rotate-45 translate-x-[-150%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
        </span>
      </a>
    </div>
  );
};

export default CTAButtons;
