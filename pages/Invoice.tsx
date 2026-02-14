// Invoice.tsx
import React, { useState } from "react";

// ==================== TYPES ====================
interface Service {
  title: string;
  description: string;
  icon: string; // Emoji or URL
}

interface PaymentMethod {
  name: string;
  icon: string;
  details: string[];
  link?: string; // Optional for clickable methods
}

// ==================== DATA ====================
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

const paymentMethods: PaymentMethod[] = [
  {
    name: "bKash",
    icon: "📱",
    details: ["01607183592", "Tap to Pay"],
    link: "tel:01607183592",
  },
  {
    name: "Nagad",
    icon: "📲",
    details: ["01607183592", "Personal"],
    link: "tel:01607183592",
  },
  {
    name: "Bank Transfer",
    icon: "🏦",
    details: ["Dutch Bangla Bank Ltd", "A/C: 3031100347730"],
  },
];

// ==================== COMPONENTS ====================
const ServiceCard: React.FC<{ service: Service; isExpanded: boolean; onClick: () => void }> = ({
  service,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      className="bg-green-50 rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl">{service.icon}</div>
        <div className="flex-1">
          <h3 className="font-bold text-green-700">{service.title}</h3>
          {isExpanded && <p className="text-gray-700 mt-1">{service.description}</p>}
        </div>
      </div>
    </div>
  );
};

const PaymentCard: React.FC<{ method: PaymentMethod }> = ({ method }) => {
  const Wrapper = method.link ? "a" : "div";

  return (
    <Wrapper
      {...(method.link ? { href: method.link } : {})}
      className="bg-gray-50 border  rounded-xl p-5 text-center hover:shadow-lg transition block"
    >
      <div className="text-4xl mb-2">{method.icon}</div>
      <h3 className="font-bold text-lg mb-1">{method.name}</h3>
      {method.details.map((detail, idx) => (
        <p key={idx} className="text-gray-700 text-sm">
          {detail}
        </p>
      ))}
    </Wrapper>
  );
};

// ==================== MAIN COMPONENT ====================
const Invoice: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4 bg-gray-50">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 text-center rounded-lg mb-6">
          <h1 className="text-3xl font-bold">Website & Funnel Invoice</h1>
          <p className="text-sm mt-1">Green Soul IT</p>
        </div>

        {/* Services */}
        <div className="p-6 space-y-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-3 border-b pb-2">
            Services Included
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isExpanded={expandedIndex === index}
                onClick={() => toggleExpand(index)}
              />
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 flex justify-between items-center mt-6">
          <span className="text-lg font-semibold text-gray-800">TOTAL PAYABLE BILL</span>
          <span className="text-2xl font-bold text-green-700">৳ 26,500</span>
        </div>
        <p className="text-center text-sm font-semibold text-gray-600 mt-2">
          Monthly E-Commerce Plan
        </p>

        {/* Payment Methods */}
        <div className="p-6 space-y-4 mt-8 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-green-700 mb-3 border-b pb-2">
            Payment Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paymentMethods.map((method, index) => (
              <PaymentCard key={index} method={method} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
