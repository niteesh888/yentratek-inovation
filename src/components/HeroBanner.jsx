// src/components/HeroBannerSlidesPanel.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function HeroBannerSlidesPanel() {
  const slides = [
    {
      id: 0,
      key: "home",
      title: "Precision Sales & Service Solutions",
      subtitle: "Across Printing, Food, and Textile Machinery",
      cta: "Explore Machines",
      ctaLink: "/products",
      images: ["/images/Flexogrophic.png", "/images/Mixer.png", "/images/Textile.png"],
      bgColor: "#FFF8E7", // ✅ keep solid pastel color
    },
    {
      id: 1,
      key: "printing",
      industry: "Printing",
      title: "High-performance printing machines",
      subtitle: "Digital & flexographic presses, finishing, and service",
      cta: "Explore Printing",
      ctaLink: "/products/printing",
      images: ["/images/ppp.png", "/images/offsettnav.png", "/images/oven22.png"],
      bgColor: "#EAF4FF",
    },
    {
      id: 2,
      key: "food",
      industry: "Food & Beverage",
      title: "Food processing & packaging lines",
      subtitle: "Hygienic, fast, and easy-to-maintain solutions",
      cta: "Explore Food & Beverage",
      ctaLink: "/products/food",
      images: ["/images/food222.png", "/images/oven22.png", "/images/pack.png"],
      bgColor: "#FFF3F1",
    },
    {
      id: 3,
      key: "textile",
      industry: "Textile",
      title: "Textile machinery for speed & accuracy",
      subtitle: "Knitting, dyeing, finishing — engineered for uptime",
      cta: "Explore Textile",
      ctaLink: "/products/textiles",
      images: ["/images/ttttt.png", "/images/Emb.png", "/images/Flexogrophic.png"],
      bgColor: "#F1FFF6",
    },
  ];

  const [index, setIndex] = useState(0);
  const len = slides.length;
  const timerRef = useRef(null);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIndex((p) => (p + 1) % len), 5200);
    return () => clearTimeout(timerRef.current);
  }, [index, len]);

  const prev = () => setIndex((p) => (p - 1 + len) % len);
  const next = () => setIndex((p) => (p + 1) % len);

  return (
    <section className="hb-wrap" aria-roledescription="carousel">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@600;800&display=swap');

        .hb-wrap {
          --panel-text: #0b254d;
          --cta-color: #2563eb;
          --cta-color-hover: #1e40af;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          padding: 64px 0 80px;
          background: #ffffff; /* ✅ white outside */
          font-family: Montserrat, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
        }

        .hb-panel {
          width: calc(100% - 80px);
          max-width: 1400px;
          margin: 0 auto;
          border-radius: 16px;
          padding: 64px;
          min-height: 560px;
          display: flex;
          align-items: center;
          gap: 40px;
          box-shadow: 0 18px 50px rgba(3, 7, 18, 0.08);
          overflow: hidden;
          transition: background 0.45s ease;
        }

        .hb-left { flex: 0 0 50%; min-width: 320px; }
        .hb-industry { font-style: italic; color: #6b7280; margin-bottom: 8px; font-size: 0.95rem; }

        .hb-title {
          margin: 0 0 8px 0;
          font-family: "Archivo Black", "Montserrat", sans-serif;
          font-weight: 800;
          color: #000;
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          line-height: 1.1;
          text-transform: uppercase;
        }

        .hb-sub {
          margin-top: 12px;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          color: #111;
          font-size: clamp(0.95rem, 1.6vw, 1.15rem);
          line-height: 1.4;
          max-width: 60ch;
        }

        .hb-cta {
          display: inline-block;
          margin-top: 22px;
          background: var(--cta-color);
          color: #fff;
          padding: 14px 24px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 800;
          transition: background 0.3s ease;
        }
        .hb-cta:hover { background: var(--cta-color-hover); }

        .hb-right {
          flex: 0 0 50%;
          min-width: 0;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding-right: 8px;
        }

        .hero-image {
          width: 100%;
          max-width: 740px;
          height: auto;
          max-height: 520px;
          object-fit: contain;
          display: block;
          transform-origin: center;
          animation: float 6.5s ease-in-out infinite, slideIn 0.6s both;
          filter: drop-shadow(0 30px 50px rgba(3,7,18,0.15));
          background: transparent; /* ✅ only image, no bg */
        }

        @keyframes float {
          0%,50%,100% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          75% { transform: translateY(8px); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .hb-arrow { position:absolute; top:50%; transform:translateY(-50%); width:48px; height:48px; display:flex; align-items:center; justify-content:center; border-radius:50%; background:rgba(0,0,0,0.6); color:#fff; cursor:pointer; z-index:12; }
        .hb-arrow.left{left:18px;} .hb-arrow.right{right:18px;}
        .hb-dot { width:10px; height:10px; border-radius:999px; background:#9ca3af; margin:0 6px; }
        .hb-dot.active { background: var(--cta-color); transform: scale(1.12); }

        @media (max-width: 900px) {
          .hb-panel { flex-direction: column; padding: 28px; gap: 18px; }
          .hb-left { width: 100%; }
          .hb-right { width: 100%; justify-content: center; padding-right: 0; }
          .hero-image { max-width: 92%; max-height: 320px; }
          .hb-title { font-size: clamp(1.6rem, 8vw, 3rem); }
          .hb-sub { font-size: 1rem; }
        }
      `}</style>

      <div
        className="hb-panel"
        role="region"
        aria-label="Hero banner"
        style={{ background: slides[index].bgColor }} // ✅ solid background per slide
      >
        <div className="hb-left">
          <div className="hb-industry">{slides[index].industry || ""}</div>
          <h1 className="hb-title">{slides[index].title}</h1>
          <p className="hb-sub">{slides[index].subtitle}</p>
          <Link to={slides[index].ctaLink} className="hb-cta">
            {slides[index].cta}
          </Link>
        </div>

        <div className="hb-right" aria-hidden>
          <img
            src={slides[index].images[0] || slides[index].images[1] || slides[index].images[2]}
            alt={`${slides[index].title} visual`}
            className="hero-image"
            draggable="false"
          />
        </div>

        <button className="hb-arrow left" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="#fff" strokeWidth="2"/></svg>
        </button>

        <button className="hb-arrow right" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#fff" strokeWidth="2"/></svg>
        </button>

        <div className="hb-dots" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hb-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
