// src/components/MachineGallerySection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ALL = "all";
const FILTERS = [
  { key: ALL, label: "All" },
  { key: "printing", label: "Printing" },
  { key: "food", label: "Food & Beverage" },
  { key: "textile", label: "Textile" },
];

// Machines data (updated)
const machinesData = [
  // Printing
  { id: "m1", title: "Flexographic Press", img: "/images/Flexogrophic.png", industry: "printing", link: "/products/printing/flexographic-press", desc: "High-speed flexographic press for labels & flexible packaging." },
  { id: "m2", title: "Digital Inkjet Press", img: "/images/inject1.jpeg", industry: "printing", link: "/products/printing/inkjet-press", desc: "On-demand digital press for short runs and variable data." },
  { id: "m3", title: "Offset Printing Machine", img: "/images/offset.png", industry: "printing", link: "/products/printing/offset-printing", desc: "High-quality offset press for commercial printing needs." },

  // Food
  { id: "m4", title: "Food Packaging Machine", img: "/images/ff.webp", industry: "food", link: "/products/food/packaging-machine", desc: "Automatic packaging system for pouches, bottles, and containers." },
  { id: "m5", title: "Food Sterilizer", img: "/images/stt.jpg", industry: "food", link: "/products/food/sterilizer", desc: "Ensures extended shelf life with safe sterilization technology." },
  { id: "m6", title: "Food Conveyor System", img: "/images/food222.png", industry: "food", link: "/products/food/conveyor", desc: "Modular electric conveyor system for safe food transport." },

  // Textile
  { id: "m7", title: "Embroidery Machine", img: "/images/Emb.png", industry: "textile", link: "/products/textiles/embroidery-machine", desc: "Automated embroidery for detailed garment designs." },
  { id: "m8", title: "Knitting Machine", img: "/images/kk.jpg", industry: "textile", link: "/products/textiles/knitting-machine", desc: "Programmable knitting machine for efficient sweater and fabric production." },
  { id: "m9", title: "Heat Transfer Press", img: "/images/heat.jpeg", industry: "textile", link: "/products/textiles/heat-transfer-press", desc: "Electric heat press for custom textile prints and transfers." },
];

export default function MachineGallerySection({ className = "" }) {
  const [filter, setFilter] = useState(ALL);

  const filtered = machinesData.filter((m) => filter === ALL || m.industry === filter);
  const displayed = filter === ALL ? filtered : filtered.slice(0, 3);

  // map industry -> category page (used for each card's Explore button)
  const industryToCategory = {
    printing: "/products/printing",
    food: "/products/food",
    textile: "/products/textiles",
  };

  return (
    <section className={`mg-section ${className}`} aria-label="Machine gallery">
      <style>{`
        .mg-section { padding: 24px 20px 40px; max-width: 1200px; margin: 0 auto; }
        .mg-head { display:flex; flex-direction:column; align-items:center; gap:12px; margin-bottom: 24px; text-align:center; }
        .mg-title { font-family: 'Georgia','Times New Roman', serif; font-weight:700; font-size:2.6rem; color:#0b1724; margin:0; }
        @media(min-width:900px){ .mg-title{ font-size:3.8rem; } }
        .mg-underline{ height:6px; width:120px; background:linear-gradient(90deg,#1561ff,#2aa0ff); border-radius:6px; margin-top:10px; }
        .mg-sub { color:#515d68; font-size:1rem; margin:0; max-width:820px; }

        .mg-filter-row { margin-top:16px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
        .mg-filter-btn { padding:8px 14px; border-radius:999px; border:1px solid #e6eef7; background:#fff; cursor:pointer; font-weight:600; color:#0b1220; transition: all 140ms ease; }
        .mg-filter-btn:hover { transform: translateY(-3px); background:#f1f8ff; }
        .mg-filter-btn.active { background:#2563eb; color:#fff; border-color:#2563eb; }

        .mg-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:22px; margin-top:28px; }
        .mg-card { background: linear-gradient(180deg,#ffffff,#fbfdff); border-radius:12px; padding:16px; display:flex; flex-direction:column; gap:12px; box-shadow: 0 10px 26px rgba(2,6,23,0.06); transition: transform 260ms ease, box-shadow 260ms; }
        .mg-card:hover { transform: translateY(-8px); box-shadow: 0 30px 72px rgba(2,6,23,0.12); }

        .mg-thumb { width:100%; height:220px; border-radius:10px; overflow:hidden; display:flex; align-items:center; justify-content:center; background: linear-gradient(180deg,#f1f5f9,#ffffff); }
        .mg-thumb img { max-width:100%; max-height:100%; object-fit:contain; transition: transform 420ms ease; }
        .mg-card:hover .mg-thumb img { transform: translateY(-6px) scale(1.03); }

        .mg-badge { display: none !important; }

        .mg-name { font-weight:700; color:#071029; font-size:1.05rem; }
        .mg-desc { font-size:0.95rem; color:#475569; min-height:44px; }

        .mg-actions { margin-top:auto; }
        .mg-cta-card { padding:10px 14px; border-radius:10px; background: linear-gradient(90deg,#0f62ff,#1f5de6); color:#fff; font-weight:700; text-decoration:none; display:inline-flex; align-items:center; gap:8px; }
        .mg-cta-card:hover { transform: translateY(-3px); }

        .mg-explore-more-wrap { margin-top:20px; display:flex; justify-content:center; }
        .mg-explore-more { padding:12px 20px; border-radius:10px; background: linear-gradient(90deg,#0f62ff,#1f5de6); color:#fff; font-weight:800; text-decoration:none; }
        .mg-explore-more:hover { transform: translateY(-4px); }

        @media (max-width:1100px){ .mg-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width:640px){ .mg-grid { grid-template-columns: 1fr; } .mg-thumb { height:180px; } }
      `}</style>

      <div className="mg-head">
        <h2 className="text-3xl md:text-4xl font-['Orbitron'] font-bold tracking-wide text-gray-900">
          Explore Our Machines
        </h2>
        <div className="mg-underline" />
        <p className="mg-sub">
          Browse featured equipment across Printing, Food & Beverage, and Textile.
        </p>

        {/* FILTERS */}
        <div className="mg-filter-row" role="tablist">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`mg-filter-btn ${filter === f.key ? "active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="mg-grid">
        {displayed.map((m) => (
          <article className="mg-card" key={m.id}>
            <div className="mg-thumb">
              <img src={m.img} alt={m.title} draggable="false" />
            </div>
            <div>
              <div className="mg-name">{m.title}</div>
              <div className="mg-desc">{m.desc}</div>
            </div>
            <div className="mg-actions">
              <Link
                to={industryToCategory[m.industry] || "/products"}
                className="mg-cta-card"
              >
                Explore
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Explore more - always visible */}
      <div className="mg-explore-more-wrap">
        <Link to="/products" className="mg-explore-more">Explore more</Link>
      </div>
    </section>
  );
}
