import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); 
  const [productsMobileOpen, setProductsMobileOpen] = useState(false); 
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false); 


  
  useEffect(() => {
    const handleTouch = () => {
      setIsTouch(true);
      window.removeEventListener("touchstart", handleTouch);
    };
    window.addEventListener("touchstart", handleTouch);
    return () => window.removeEventListener
    
    ("touchstart", handleTouch);
  }, []);

  
  useEffect(() => {
    function handleDocClick(e) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    document.addEventListener("touchstart", handleDocClick);
    return () => {
      document.removeEventListener("mousedown", handleDocClick);
      document.removeEventListener("touchstart", handleDocClick);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setProductsMobileOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helpers for hover/focus delay
  const openProducts = () => {
    if (closeTimeoutRef.current) {  
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
     setProductsOpen(true);
  };

  const startCloseProducts = (delay = 300) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
      closeTimeoutRef.current = null;
    }, delay);
  };

  // Toggle for button click (works for touch)
  const onProductsButtonClick = (e) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setProductsOpen((s) => !s);
  };

  return (
    <nav className="hero-navbar sticky top-0 z-50">
      <style>{`
        . hero-navbar {
          background: linear-gradient(135deg, #f8fafc, #e2e8f0);
          border-bottom: 3px solid #d1d5db;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .hero-navbar a { position: relative; transition: color 0.25s ease; }
        .hero-navbar a:hover { color: #2563eb; }
        .hero-navbar a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #2563eb;
          transition: width 0.25s ease;
        }
        .hero-navbar a:hover::after { width: 100%; }
        .dropdown-menu { animation: fadeDown 0.18s ease; }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-blue-700 tracking-wide">
          Yentratek
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isTouch && openProducts()}
            onMouseLeave={() => !isTouch && startCloseProducts(300)}
            onFocus={() => openProducts()}
            onBlur={() => startCloseProducts(300)}
          >
            <button
              ref={buttonRef}
              onClick={onProductsButtonClick}
              onKeyDown={(e) => {
                if (e.key === "Escape") setProductsOpen(false);
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setProductsOpen((s) => !s);
                }
              }}
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              className="flex items-center gap-1 hover:text-blue-600 focus:outline-none"
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.25 4a.75.75 0 01-1.06 0l-4.25-4a.75.75 0 01-.02-1.06z" />
              </svg>
            </button>

            {productsOpen && (
              <div
                ref={dropdownRef}
                role="menu"
                className="absolute left-0 mt-2 min-w-[220px] bg-white rounded-md shadow-lg border border-gray-100 dropdown-menu"
                onMouseEnter={() => !isTouch && openProducts()}
                onMouseLeave={() => !isTouch && startCloseProducts(300)}
                onFocus={() => openProducts()}
                onBlur={() => startCloseProducts(300)}
              >
                <Link
                  to="/products/printing"
                  onClick={() => setProductsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  Printing & Packaging
                </Link>
                <Link
                  to="/products/food"
                  onClick={() => setProductsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  Food & Beverages
                </Link>
                <Link
                  to="/products/textiles"
                  onClick={() => setProductsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100"
                  role="menuitem"
                >
                  Textiles
                </Link>
              </div>
            )}
          </div>

          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg font-medium">
          <Link to="/" className="block px-4 py-3" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block px-4 py-3" onClick={() => setOpen(false)}>
            About
          </Link>

          <button
            className="w-full text-left px-4 py-3 flex items-center justify-between"
            onClick={() => setProductsMobileOpen((s) => !s)}
            aria-expanded={productsMobileOpen}
          >
            <span>Products</span>
            <span>{productsMobileOpen ? "▾" : "▸"}</span>
          </button>
          {productsMobileOpen && (
            <div className="pl-6">
              <Link
                to="/products/printing"
                className="block px-4 py-2"
                onClick={() => {
                  setOpen(false);
                  setProductsMobileOpen(false);
                }}
              >
                Printing & Packaging
              </Link>
              <Link
                to="/products/food"
                className="block px-4 py-2"
                onClick={() => {
                  setOpen(false);
                  setProductsMobileOpen(false);
                }}
              >
                Food & Beverages
              </Link>
              <Link
                to="/products/textiles"
                className="block px-4 py-2"
                onClick={() => {
                  setOpen(false);
                  setProductsMobileOpen(false);
                }}
              >
                Textiles
              </Link>
            </div>
          )}

          <Link to="/services" className="block px-4 py-3" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/contact" className="block px-4 py-3" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
