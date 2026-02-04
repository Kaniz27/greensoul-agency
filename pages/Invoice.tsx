// Invoice.tsx
import React from "react";

const Invoice: React.FC = () => {
  const services = [
    "Website Development (eCommerce)",
    "Landing Page Design",
    "Product Research",
    "Tracking & Integration",
    "Google Pixel Setup",
    "Conversion API Setup",
    "Google Tag Manager Setup",
    "Social Platform Integration",
    "Social Media Services",
    "Social Media Setup & Management (Monthly)",
    "Instagram Business Account Setup",
    "Facebook Unlimited Boosting (Service Charge – Monthly)",
    "Ad Budget Separate (Client Will Provide)",
  ];

  return (
    <div className="min-h-screen flex items-center py-16 justify-center p-4">
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-green-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">Website & Funnel Invoice</h1>
          <p className="text-sm mt-1">Green Soul IT</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-3 border-b pb-2">
              Services Included
            </h2>

            <div className="grid md:grid-cols-2 gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 bg-green-50 p-3 rounded-md"
                >
                  <span className="font-bold text-green-600">
                    {index + 1}.
                  </span>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              TOTAL PAYABLE BILL
            </span>
            <span className="text-2xl font-bold text-green-700">
              ৳ 26,500
            </span>
          </div>

          <p className="text-center text-sm font-semibold text-gray-600">
            Monthly E-Commerce Plan
          </p>

          {/* Payment Methods */}
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-3 border-b pb-2">
              Payment Methods
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* bKash */}
              <a
                href="tel:01607183592"
                className="bg-pink-50 border border-pink-200 rounded-xl p-5 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">📱</div>
                <h3 className="font-bold text-pink-600 text-lg">bKash</h3>
                <p className="text-gray-700 mt-1">01607183592</p>
                <p className="text-xs text-gray-500 mt-1">
                  Tap to Pay
                </p>
              </a>

              {/* Nagad */}
              <a
                href="tel:01607183592"
                className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">📲</div>
                <h3 className="font-bold text-orange-600 text-lg">Nagad</h3>
                <p className="text-gray-700 mt-1">01607183592</p>
                <p className="text-xs text-gray-500 mt-1">
                  Personal
                </p>
              </a>

              {/* Bank */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-2">🏦</div>
                <h3 className="font-bold text-blue-600 text-lg">
                  Bank Transfer
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Dutch Bangla Bank Ltd
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  A/C: 3031100347730
                </p>
              </div>

            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Invoice;
