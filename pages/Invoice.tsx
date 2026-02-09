// Invoice.tsx
<<<<<<< HEAD
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
=======
import React, { useState } from "react";

interface Service {
  title: string;
  description: string;
  icon: string; // You can use emoji or image URL
}

const services: Service[] = [
  { title: "Website Development", description: "eCommerce website development", icon: "💻" },
  { title: "Landing Page Design", description: "High converting landing pages", icon: "🖌️" },
  { title: "Product Research", description: "Find profitable products", icon: "🔍" },
  { title: "Tracking & Integration", description: "Setup analytics & tracking", icon: "📊" },
  { title: "Google Pixel Setup", description: "Track visitor behavior", icon: "🎯" },
  { title: "Conversion API Setup", description: "Integrate server-side tracking", icon: "⚡" },
  { title: "Google Tag Manager Setup", description: "Easily manage tags", icon: "🗂️" },
  { title: "Social Platform Integration", description: "Connect social accounts", icon: "🔗" },
  { title: "Social Media Services", description: "Content & strategy", icon: "📱" },
  { title: "Social Media Setup & Management", description: "Monthly management", icon: "🛠️" },
  { title: "Instagram Business Account Setup", description: "Professional Instagram setup", icon: "📸" },
  { title: "Facebook Unlimited Boosting", description: "Service charge – Monthly", icon: "💰" },
  { title: "Ad Budget", description: "Client provides separately", icon: "💵" },
];

const Invoice: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 bg-gray-50">
      <div className="max-w-7xl w-full ">
>>>>>>> 98aab88 (update project)

        {/* Header */}
        <div className="bg-green-600 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">Website & Funnel Invoice</h1>
          <p className="text-sm mt-1">Green Soul IT</p>
        </div>

<<<<<<< HEAD
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
=======
        {/* Services */}
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-semibold text-green-700 mb-3 border-b pb-2">
            Services Included
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-green-700">{service.title}</h3>
                    {expandedIndex === index && (
                      <p className="text-gray-700 mt-1">{service.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex justify-between items-center mt-6">
>>>>>>> 98aab88 (update project)
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
<<<<<<< HEAD
                <p className="text-xs text-gray-500 mt-1">
                  Tap to Pay
                </p>
=======
                <p className="text-xs text-gray-500 mt-1">Tap to Pay</p>
>>>>>>> 98aab88 (update project)
              </a>

              {/* Nagad */}
              <a
                href="tel:01607183592"
                className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-2">📲</div>
                <h3 className="font-bold text-orange-600 text-lg">Nagad</h3>
                <p className="text-gray-700 mt-1">01607183592</p>
<<<<<<< HEAD
                <p className="text-xs text-gray-500 mt-1">
                  Personal
                </p>
=======
                <p className="text-xs text-gray-500 mt-1">Personal</p>
>>>>>>> 98aab88 (update project)
              </a>

              {/* Bank */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-2">🏦</div>
<<<<<<< HEAD
                <h3 className="font-bold text-blue-600 text-lg">
                  Bank Transfer
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Dutch Bangla Bank Ltd
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  A/C: 3031100347730
                </p>
=======
                <h3 className="font-bold text-blue-600 text-lg">Bank Transfer</h3>
                <p className="text-sm text-gray-700 mt-1">Dutch Bangla Bank Ltd</p>
                <p className="text-xs text-gray-600 mt-1">A/C: 3031100347730</p>
>>>>>>> 98aab88 (update project)
              </div>

            </div>
          </div>
<<<<<<< HEAD
        </div>

        
=======

        </div>
>>>>>>> 98aab88 (update project)
      </div>
    </div>
  );
};

export default Invoice;
