
import React, { useEffect, useState } from 'react';
import { fetchCaseStudies } from '../services/api';
import { CaseStudy } from '../types';
import { ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [studies, setStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    fetchCaseStudies().then(setStudies);
  }, []);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {studies.map((study, idx) => (
            <div 
              key={study.id} 
              className="group relative overflow-hidden rounded-3xl bg-gray-900 aspect-video animate-in fade-in slide-in-from-bottom-12 duration-700"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-green-400 font-bold text-sm mb-2 uppercase tracking-widest">{study.category}</span>
                <h4 className="text-3xl font-bold mb-4">{study.title}</h4>
                <p className="text-white/80 line-clamp-2 mb-6 max-w-md">{study.description}</p>
                <div className="flex items-center space-x-4">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold text-sm flex items-center hover:bg-green-500 hover:text-white transition-colors">
                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
