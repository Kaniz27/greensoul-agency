import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { contactSubmit } from '../services/api';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await contactSubmit(formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/8801234567890', '_blank');
  };

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Section */}
          <div>
            <h2 className="text-green-500 font-bold tracking-widest uppercase text-lg sm:text-xl mb-2 sm:mb-3">Get in Touch</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Let's Discuss Your Next Digital Venture
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
              Whether you have a specific project in mind or just want to explore how digital marketing can help your business grow, we're here to talk.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-green-100 p-3 sm:p-4 rounded-2xl text-green-600">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-md sm:text-lg">Our Office</h5>
                  <p className="text-gray-600 text-sm sm:text-base">Address: South Banasree, Road 12, House 26, Dhaka</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-green-100 p-3 sm:p-4 rounded-2xl text-green-600">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-md sm:text-lg">Email Us</h5>
                  <p className="text-gray-600 text-sm sm:text-base">Email: greensoulit@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="bg-green-100 p-3 sm:p-4 rounded-2xl text-green-600">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-md sm:text-lg">Call Us</h5>
                  <p className="text-gray-600 text-sm sm:text-base">Phone: 01607183592</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <button 
                onClick={openWhatsApp}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Chat with us on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-6 sm:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 sm:py-20 animate-in zoom-in duration-500">
                <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mb-4 sm:mb-6" />
                <h4 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    sm={6}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-green-500 text-white py-3 rounded-full font-bold text-base sm:text-lg hover:bg-green-600 disabled:opacity-50 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${status === 'loading' ? 'hidden' : ''}`} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
