import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: '1',
    title: 'Social Media Campaign',
    description: 'Boosted engagement and lead generation by 70% using data-driven social media strategies across Instagram and LinkedIn.',
    image: 'https://www.suryainformatics.com/wp-content/uploads/2023/12/wp3950068.jpg',
    category: 'Digital Strategy',
  },
  {
    id: '2',
    title: 'Organic Traffic Growth',
    description: 'Increased website visits by 200% in 6 months through advanced SEO optimization, content marketing.',
    image: 'https://virtuonai.com/assets/images/seo.webp',
    category: 'SEO & Analytics',
  },
  {
    id: '3',
    title: 'Lead Conversion Funnel',
    description: 'Implemented automated email campaigns and content funnels, increasing lead conversions by 45% within 3 months.',
    image: 'https://timesinternet.in/blog/wp-content/uploads/2023/12/Shutterstock_1814591309.jpg',
    category: 'Email Marketing',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">
              Our Work
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">Recent Case Studies</h3>
          </div>
          <a
            href="/case-studies"
            className="mt-4 md:mt-0 text-green-500 font-bold hover:underline flex items-center"
          >
            See more projects
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        {/* Grid for Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="group relative overflow-hidden rounded-3xl shadow-md bg-white"
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <span className="text-green-500 font-bold text-sm mb-2 uppercase tracking-widest">
                  {study.category}
                </span>
                <h4 className="text-2xl font-bold mb-4">{study.title}</h4>
                <p className="text-gray-600 text-base mb-6">{study.description}</p>
                <a
                  href="/case-studies"
                  className="inline-flex items-center px-6 py-2 rounded-full font-bold text-sm bg-green-600 text-white hover:bg-green-500 transition-colors"
                >
                  Read Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
