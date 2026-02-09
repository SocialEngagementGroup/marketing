import React from 'react';
import { ArrowUpRight, TrendingUp, Users, MousePointer, DollarSign } from 'lucide-react';
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
            <span className="text-brand-brick font-bold tracking-widest uppercase text-sm mb-4 block">Case Study: City Medical's Patient Growth</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Driving Real Engagement & <br /> <span className="text-brand-brick">Measurable ROI</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              We partnered with City Medical Group to execute a high-impact digital acquisition campaign. The goal was to maximize local reach and drive new patient appointments for their expanded cardiology wing.
            </p>

            <div className="border-l-2 border-brand-brick pl-6 py-2">
              <p className="text-xl font-medium text-white italic">
                "Consistently turning marketing spend into tangible healthcare growth."
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
                <Users className="text-brand-brick h-6 w-6" />
                <span className="text-green-400 text-xs font-bold bg-green-900/30 px-2 py-1 rounded">+377%</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">107,831</h3>
              <p className="text-gray-500 text-sm">Total Impressions</p>
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
                <TrendingUp className="text-brand-brick h-6 w-6" />
                <span className="text-green-400 text-xs font-bold bg-green-900/30 px-2 py-1 rounded">+312%</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">81,301</h3>
              <p className="text-gray-500 text-sm">People Reached</p>
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
                <MousePointer className="text-brand-brick h-6 w-6" />
                <span className="text-green-400 text-xs font-bold bg-green-900/30 px-2 py-1 rounded">High Intent</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">75,548</h3>
              <p className="text-gray-500 text-sm">3-Second Video Plays</p>
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
                <DollarSign className="text-brand-brick h-6 w-6" />
                <span className="text-gray-400 text-xs font-bold bg-gray-800 px-2 py-1 rounded">Efficient</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-1">$0.23</h3>
              <p className="text-gray-500 text-sm">Avg. Cost Per Engagement</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
