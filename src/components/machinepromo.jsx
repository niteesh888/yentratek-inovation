// src/components/MachinePromoSection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MachinePromoSection() {
  // Reusable tailwind button classes (inline - works immediately)
  const btnBlueClass =
    "inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow hover:bg-blue-700 transition";
  const btnSecondaryClass =
    "inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition";

  return (
    <section className="mp-section" aria-label="Equipment promotions and benefits">
      <style>{`
        :root{
          --metal-1: #0f1724;
          --metal-2: #334155;
          --accent: #0ea5e9;
          --accent-warm: #ffb703;
          --panel: #f7fafc;
          --muted: #5b6b76;
        }

        .mp-section {
          max-width: 1180px;
          margin: 48px auto;
          padding: 18px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        }

        .mp-wrap {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 20px;
          align-items: stretch;
        }

        .mp-panel {
          border-radius: 12px;
          padding: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(248,250,252,0.95));
          box-shadow: 0 18px 44px rgba(8,12,20,0.06);
          transform: translateY(8px);
          opacity: 0;
          animation: mpFadeUp 640ms cubic-bezier(.15,.9,.25,1) forwards;
        }
        .mp-panel.delay { animation-delay: 120ms; }

        @keyframes mpFadeUp {
          to { transform: translateY(0); opacity: 1; }
        }

        /* LEFT */
        .mp-left {
          display:flex;
          gap:20px;
          align-items:flex-start;
          background: linear-gradient(180deg, #fbfbfd, #f6f8fa);
        }

        .left-content { flex:1 1 auto; }
        .mp-left h3 {
          margin:0 0 8px 0;
          font-weight:800;
          font-size:1.5rem;
          color:var(--metal-1);
        }
        .mp-left p {
          margin:0;
          color:var(--metal-2);
          font-size:0.96rem;
          line-height:1.45;
        }

        .left-meta {
          margin-top:12px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        }

        /* Collage without white cards */
        .mp-collage {
          flex:0 0 200px;
          display:flex;
          flex-direction:column;
          gap:10px;
          align-items:center;
          justify-content:center;
        }

        .mp-collage img {
          display:block;
          max-width:100%;
          height:auto;
          border-radius:8px;
          object-fit:contain;
        }

        .mp-mini-row {
          display:flex;
          gap:10px;
          margin-top:8px;
          justify-content:space-between;
          width:100%;
        }
        .mp-mini-row img {
          width:92px;
          height:84px;
          object-fit:contain;
          border-radius:6px;
        }

        /* RIGHT */
        .mp-right {
          display:flex;
          flex-direction:column;
          background: linear-gradient(180deg,#f7fbff,#eef7ff);
          border-left: 3px solid rgba(14,165,233,0.06);
        }

        .mp-right h4 {
          margin:0 0 6px 0;
          font-weight:800;
          color:var(--metal-1);
          font-size:1.125rem;
        }
        .mp-right p { margin:0 0 8px 0; color:var(--muted); font-size:0.95rem; }

        .mp-feats { display:flex; flex-direction:column; gap:12px; margin-top:6px; }
        .mp-feat { display:flex; gap:12px; align-items:flex-start; }
        .feat-icon {
          width:28px; height:28px;
          display:flex; align-items:center; justify-content:center;
          color:var(--accent);
          flex-shrink:0;
        }
        .feat-text { color:#172033; font-weight:700; font-size:0.95rem; }

        .cta-wrap { margin-top:14px; }

        @media (max-width:980px) {
          .mp-wrap { grid-template-columns: 1fr; }
          .mp-collage { flex-direction:row; }
          .mp-mini-row img { width:72px; height:64px; }
        }
      `}</style>

      <div className="mp-wrap">
        {/* LEFT */}
        <div className="mp-panel mp-left">
          <div className="left-content">
            <h3>Industrial machines built for continuous operation</h3>
            <p>
              Robust frames, modular controls and field-serviceable modules — designed so your line runs,
              not your inbox. From high-speed flexo to precision mixers, each unit is optimized for uptime.
            </p>
            <div className="left-meta">
              {/* Primary CTA  now uses Tailwind button classes */}
              <Link to="/products" className={btnBlueClass}>
                Browse Catalogue
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block ml-1">
                  <path d="M5 12h14M13 5l6 7-6 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Secondary uses a soft bordered style (keeps visual hierarchy) */}
              <Link to="/services" className={btnSecondaryClass}>
                Field service & commissioning
              </Link>
            </div>
          </div>

          <div className="mp-collage">
            <img src="/images/Flexogrophic.png" alt="Flexographic press" draggable="false" />
            <div className="mp-mini-row">
              <img src="/images/Bottle.png" alt="Mixer" draggable="false" />
              <img src="/images/Textile.png" alt="Textile" draggable="false" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mp-panel mp-right delay">
          <h4>Why manufacturers choose us</h4>
          <p>Short lead times, on-site commissioning, and local spares stock reduce downtime and keep throughput high.</p>

          <div className="mp-feats">
            <div className="mp-feat">
              <div className="feat-icon">✓</div>
              <div className="feat-text">Factory-commissioned & performance-tested</div>
            </div>
            <div className="mp-feat">
              <div className="feat-icon">✓</div>
              <div className="feat-text">Rapid replacement parts & local service</div>
            </div>
            <div className="mp-feat">
              <div className="feat-icon">✓</div>
              <div className="feat-text">Energy-optimized drives & low operating cost</div>
            </div>
          </div>

          <div className="cta-wrap">
            <Link to="/contact" className={btnBlueClass}>
              Request a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block ml-1">
                <path d="M5 12h14M13 5l6 7-6 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
