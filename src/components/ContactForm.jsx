import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-6">
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Full Name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="Enter your name"
        />
      </div>

      
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="Enter your email"
        />
      </div>

      
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="Enter your phone number"
        />
      </div>

      
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Message
        </label>
        <textarea
          rows="4"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-200"
          placeholder="Write your message..."
        ></textarea>
      </div>

      
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
