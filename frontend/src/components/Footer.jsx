import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      window.location.href = `mailto:nageenapatel63@gmail.com?subject=Subscription Request&body=Please subscribe this email: ${email}`;
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Contact Info */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold">
            DPIIT <span className="text-orange-500">#startupindia</span>
          </h2>
          <p className="mt-2">Toll Free Number: 1800 115 565</p>
          <p>Working Hrs: 10:00 am - 5:30 pm</p>
        </div>

        {/* Subscribe */}
        <div className="md:w-1/3 flex flex-col sm:flex-row sm:items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-md text-black w-full sm:w-auto sm:flex-1"
          />
          <button
            onClick={handleSubscribe}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            Subscribe
          </button>
        </div>

        {/* Last Updated */}
        <div className="md:w-1/3 text-sm text-start md:text-end">
          <p>Last Updated:</p>
          <p>25-JUN-2025 | 01:33 PM</p>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom Note */}
      <div className="text-center text-sm px-2">
        <p>
          1,09,81,843 users have visited the Startup India portal since
          inception.
        </p>
        <p className="mt-2">© 2024 Startup India. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
