import React from 'react';
import { TrendingUp, Users, MapPin, MousePointer } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseStudy: React.FC = () => {
  return (
    <section id="results" className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-brick/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-brick font-bold tracking-widest uppercase text-sm mb-4 block">Featured Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Flame Japanese <br /> <span className="text-brand-brick">Hibachi</span>
            </h2>
            
            <div className="space-y-6 mb-8">
                <div>
                    <h4 className="font-bold text-white mb-2 text-lg">The Challenge:</h4>
                    <p className="text-gray-400 font-light text-lg">A popular restaurant had a dated website, inconsistent reviews, and low visibility on Google Maps, even during peak hours.</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Our Solution:</h4>
                    <p className="text-gray-400 font-light text-lg">We rebuilt the website for quick menu access and bookings, optimized the Google Business Profile, launched reservation-focused Meta Ads, and automated review requests.</p>
                </div>
            </div>

            <div className="border-l-2 border-brand-brick pl-6 py-2">
              <p className="text-xl font-medium text-white italic">
                "Guests now find us easily and trust us before they even walk in."
              </p>
            </div>
          </motion.div>

          {/* Results Grid - Real Data from Report */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 hover:border-brand-brick/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <MapPin className="text-brand-brick h-6 w-6" />
                <span className="text-green-400 text-xs font-bold bg-green-900/30 px-2 py-1 rounded">Maps</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">+70%</h3>
              <p className="text-gray-500 text-sm">Google Visibility</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 hover:border-brand-brick/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <Users className="text-brand-brick h-6 w-6" />
                <span className="text-green-400 text-xs font-bold bg-green-900/30 px-2 py-1 rounded">Reservations</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">+55%</h3>
              <p className="text-gray-500 text-sm">Request Growth</p>
            </motion.div>

             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 hover:border-brand-brick/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <TrendingUp className="text-brand-brick h-6 w-6" />
                <span className="text-green-400 text-xs font-bold bg-green-900/30 px-2 py-1 rounded">SEO</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">Top 3</h3>
              <p className="text-gray-500 text-sm">Rank for "Best Cuisine"</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 border border-gray-800 hover:border-brand-brick/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <MousePointer className="text-brand-brick h-6 w-6" />
                <span className="text-gray-400 text-xs font-bold bg-gray-800 px-2 py-1 rounded">Clicks</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">High</h3>
              <p className="text-gray-500 text-sm">Intent Traffic</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
