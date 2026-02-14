import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchServices } from "../services/api";
import { Service } from "../types";
import { CheckCircle2, ArrowRight } from "lucide-react";

const Services: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [services, setServices] = useState<Service[]>([]);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchServices().then((data) => {
      setServices(data);
      if (slug) {
        const found = data.find((s) => s.slug === slug);
        setActiveService(found || null);
      } else {
        setActiveService(null);
      }
    });
  }, [slug]);

  /* ----------------- Detail Page ----------------- */
  if (slug && activeService) {
    return (
      <div className="py-24 bg-white animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image Section */}
            <div>
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  src={activeService.image}
                  alt={`${activeService.title} 1`}
                  className="rounded-2xl shadow-sm object-cover w-full h-48"
                />
                <img
                  src={activeService.image}
                  alt={`${activeService.title} 2`}
                  className="rounded-2xl shadow-sm object-cover w-full h-48"
                />
              </div>
            </div>

            {/* Content Section */}
            <div>
              <span className="text-green-500 font-bold uppercase tracking-wider text-sm">
                Service Details
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-8 text-gray-900">
                {activeService.title}
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                {activeService.description}
              </p>

              <h4 className="text-xl font-bold mb-6">Key Benefits:</h4>
              <ul className="space-y-4 mb-10">
                {[
                  "Data-driven strategy tailored to your industry",
                  "Dedicated account manager for transparent comms",
                  "Advanced analytics and performance tracking",
                  "Continuous optimization for maximum ROI",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-500 w-5 h-5 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 p-8 rounded-3xl border border-green-100 mb-10">
                <h5 className="text-lg font-bold mb-2">Ready to grow?</h5>
                <p className="text-gray-600 mb-6">
                  Schedule a free strategy call with our specialists today.
                </p>
                <Link
                  to="/contact"
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </div>

              <Link
                to="/services"
                className="text-gray-500 hover:text-green-500 flex items-center font-medium"
              >
                Back to all services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ----------------- Services Grid ----------------- */
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">
            Expertise
          </h2>
          <h3 className="text-4xl font-bold text-gray-900">Solutions for Growth</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedServices.map((service, idx) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-2xl mb-6"
              />
              <h4 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h4>
              <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
              <span className="inline-flex items-center text-green-500 font-bold mt-auto">
                Learn Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && services.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
