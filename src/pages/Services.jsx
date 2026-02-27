// src/components/Services.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import metaConfig from "../../seo/metaConfig"; // adjust path if needed

const btnBlueClass =
  "inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded-md shadow hover:bg-blue-700 transition";

const ServiceCard = ({ title, summary, icon }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transform transition duration-400 hover:-translate-y-2 overflow-hidden">
    <div className="p-6 flex flex-col items-center text-center gap-4">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 grid place-items-center shadow-inner">
        <div className="text-2xl">{icon}</div>
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-gray-600 text-sm">{summary}</p>

      {/* Contact button uses same btn class */}
      <a href="/contact" className={btnBlueClass} aria-label={`Contact about ${title}`}>
        Contact Us
      </a>
    </div>
  </div>
);

const Services = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    machine: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^[0-9+()\-\s]{6,20}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.machine) e.machine = "Please choose a machine type";
    if (!form.message.trim()) e.message = "Please describe your request";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: "", email: "", phone: "", machine: "", message: "" });
      }, 3000);
    }
  }

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      {/* ✅ SEO Meta */}
      <Helmet>
        <title>{metaConfig.services.title}</title>
        <meta name="description" content={metaConfig.services.description} />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Service & <span className="text-blue-600">Support</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Fast maintenance, genuine spare parts, and hands-on technical training — tailored for industrial scale.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            icon="🛠️"
            title="Maintenance"
            summary="Preventive & on-call services to keep your machines running at peak performance."
          />
          <ServiceCard
            icon="🔧"
            title="Spare Parts"
            summary="Genuine parts & retrofits for speedy replacements and longer equipment life."
          />
          <ServiceCard
            icon="🎓"
            title="Technical Training"
            summary="Hands-on operator and technician training — reduce downtime and improve yield."
          />
        </div>

        {/* Form + decorative column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left decorative info / perks */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Why choose Yentratek?</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 24/7 rapid response service</li>
                <li>• OEM spare parts & warranties</li>
                <li>• On-site installation & calibration</li>
                <li>• Tailor-made maintenance contracts</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-dashed border-gray-200 bg-gradient-to-r from-white to-blue-50">
              <h4 className="font-semibold mb-2">Need urgent support?</h4>
              <p className="text-sm text-gray-600 mb-4">Call our emergency line for priority assistance.</p>

              {/* Phone button uses same btn class but anchor to tel: */}
              <a href="tel:+919206886333" className={btnBlueClass}>
                9206886333
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-center">Book a Service</h2>

              {sent && (
                <div className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-center">
                  Request submitted! Our team will contact you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    type="text"
                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.name ? "border-red-300" : "border-gray-200"}`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    type="email"
                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.email ? "border-red-300" : "border-gray-200"}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    type="tel"
                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.phone ? "border-red-300" : "border-gray-200"}`}
                    placeholder="+91 9XXXXXXXXX"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Machine Type */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Machine Type</label>
                  <select
                    value={form.machine}
                    onChange={(e) => setForm((s) => ({ ...s, machine: e.target.value }))}
                    className={`w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.machine ? "border-red-300" : "border-gray-200"}`}
                  >
                    <option value="">Select Machine</option>
                    <option value="printing">Printing & Packaging</option>
                    <option value="food">Food & Beverages</option>
                    <option value="textiles">Textiles</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.machine && <p className="text-xs text-red-500 mt-1">{errors.machine}</p>}
                </div>

                {/* Message (full width) */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    rows="5"
                    className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 ${errors.message ? "border-red-300" : "border-gray-200"}`}
                    placeholder="Describe your service request"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <div className="md:col-span-2 text-center mt-2">
                  <button type="submit" className={btnBlueClass}>
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* small footer note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Prefer email? Write to{" "}
          <a href="mailto:support@yentratek.com" className="text-blue-600">
            yentratekinnovations@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Services;
