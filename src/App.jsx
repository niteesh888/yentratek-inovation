// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ import HelmetProvider

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import PrintingPackaging from "./pages/PrintingPackaging";
import FoodBeverages from "./pages/FoodBeverages";
import Textiles from "./pages/Textiles";
import Manufacturing from "./pages/Manufacturing";
import Services from "./pages/Services";
import Dealership from "./pages/Dealership";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Main pages */}
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />

            {/* Product-category routes */}
            <Route path="/products/printing" element={<PrintingPackaging />} />
            <Route path="/products/food" element={<FoodBeverages />} />
            <Route path="/products/textiles" element={<Textiles />} />

            {/* Alias routes for hero CTAs */}
            <Route path="/printing" element={<PrintingPackaging />} />
            <Route path="/food-beverage" element={<FoodBeverages />} />
            <Route path="/textile" element={<Textiles />} />

            {/* Other site pages */}
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/dealership" element={<Dealership />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
