
import React, { useEffect, useState } from 'react';
import { fetchTeam } from '../services/api';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetchTeam().then(setTeam);
  }, []);

  return (
    <div className="pb-24">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-gray-900">Our Story & <span className="text-green-500">Vision</span></h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, <span className='text-green-600 font-bold'> Green Soul It</span> started with a simple mission: to help businesses navigate the complex digital landscape with transparency and results-driven strategies.
                </p>
                <p>
                  Today, we are a team of passionate digital experts, designers, and developers dedicated to scaling brands globally. We believe that every business has a unique story, and our job is to tell it to the right audience using the most advanced digital tools.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 className="text-4xl font-bold text-green-500 mb-2">150+</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase">Projects Completed</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-green-500 mb-2">95%</h4>
                    <p className="text-sm font-bold text-gray-500 uppercase">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700">
              <img 
                src="https://picsum.photos/id/42/800/600" 
                alt="Office collab" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-green-500/20 rounded-3xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-gray-200 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-green-500 font-bold tracking-widest uppercase text-sm mb-3">The People</h2>
            <h3 className="text-4xl font-bold text-gray-900">Meet Our Expert Team</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div 
                key={member.id} 
                className="group bg-white p-4 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center pb-4">
                  <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                  <p className="text-green-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
