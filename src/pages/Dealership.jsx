import React, { useState } from "react";

/**
 * Dealership.jsx
 * - Polished benefit cards with icons & subtle lift
 * - Glazed form with inline validation + success message
 * - Centered CTA and consistent spacing
 */

const BenefitCard = ({ title, text, icon }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transform transition hover:-translate-y-2 p-6 text-center">
    <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 grid place-items-center text-2xl shadow-inner">
      {icon}
    </div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const Dealership = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    details: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^[0-9+()\-\s]{6,20}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.location.trim()) e.location = "Location is required";
    if (!form.details.trim()) e.details = "Please tell us about your business";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      // reset after short success message — replace with API call as needed
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", location: "", details: "" });
      }, 3000);
    }
  };

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Dealership & <span className="text-blue-600">Partners</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join Yentratek’s network — sell best-in-class machines, get technical support, and grow with a trusted brand.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <BenefitCard
            icon="📦"
            title="Wide Product Range"
            text="Access machines across Printing, Food & Beverages, and Textiles."
          />
          <BenefitCard
            icon="🧩"
            title="Strong Support"
            text="Training, spare parts & marketing help to boost your sales."
          />
          <BenefitCard
            icon="🌐"
            title="Nationwide Reach"
            text="Leverage Yentratek’s brand and logistics for wider market access."
          />
        </div>

        {/* Form section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left info column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What we offer partners</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Competitive margins & exclusive territories</li>
                <li>• Marketing co-op & demo support</li>
                <li>• Training & technical documentation</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-dashed border-gray-200 bg-gradient-to-r from-white to-blue-50">
              <h4 className="font-semibold mb-2">Quick contact</h4>
              <p className="text-sm text-gray-600 mb-3">Prefer phone? Call our partnerships team for a fast chat.</p>
              <a href="tel:+911234567890" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
                +91 12345 67890
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-center">Dealership Application</h2>

              {sent && (
                <div className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-center">
                  Application submitted! We'll reach out soon.
                </div>
              )}

              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-200 ${errors.name ? "border-red-300" : "border-gray-200"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    type="email"
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-200 ${errors.email ? "border-red-300" : "border-gray-200"}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    type="tel"
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-200 ${errors.phone ? "border-red-300" : "border-gray-200"}`}
                    placeholder="+91 9XXXXXXXXX"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    value={form.location}
                    onChange={(e) => setForm((s) => ({ ...s, location: e.target.value }))}
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-200 ${errors.location ? "border-red-300" : "border-gray-200"}`}
                    placeholder="City, State"
                  />
                  {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Details</label>
                  <textarea
                    value={form.details}
                    onChange={(e) => setForm((s) => ({ ...s, details: e.target.value }))}
                    rows="4"
                    className={`w-full rounded-lg px-4 py-2 border focus:ring-2 focus:ring-blue-200 ${errors.details ? "border-red-300" : "border-gray-200"}`}
                    placeholder="Tell us about your experience, business size and why you want to partner"
                  />
                  {errors.details && <p className="text-xs text-red-500 mt-1">{errors.details}</p>}
                </div>

                <div className="md:col-span-2 text-center mt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[0.99] active:scale-[0.97] transition"
                  >
                    Apply Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          
        </p>
      </div>
    </div>
  );
};

export default Dealership;
