import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/Common/SEO';
import Header from '../components/Common/Header';


const NotFoundPage: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center font-outfit selection:bg-indigo-500/30">
      <SEO title="Page Not Found | Social Engagement Group" description="Oops! It looks like this page has drifted off into space." />
      
      {/* Site Navbar */}
      <Header theme="light" showHomeButton={true} />

      {/* Custom Background Image - Sharp and Sharp */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <img 
          src="/assets/images/bg_404.jpg" 
          alt="Cosmic Background" 
          className="w-full h-full object-cover object-center" 
        />
        {/* Dark Overlay for Depth and Contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none z-10" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* Large 404 Text - Plain Minimalist - Optimized for Mobile */}
      <div className="absolute inset-0 flex items-center justify-center select-none z-10 transform -translate-y-8 px-4">
        <h1 className="text-[42vw] md:text-[30vw] font-black tracking-tighter text-white/[0.08]">
          404
        </h1>
      </div>

      {/* UI Content Layer - Subtext and Button - Optimized for Mobile */}
      <div className="relative z-30 flex flex-col items-center gap-10 text-center px-6 mt-[45vh] md:mt-[40vh]">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
        >
          <p className="text-xl md:text-3xl text-white font-medium md:whitespace-nowrap leading-relaxed tracking-wider drop-shadow-lg max-w-[90vw] md:max-w-none">
            Oops! It looks like this page has drifted off into space.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="/"
            className="group relative px-10 py-5 bg-white text-[#050505] font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10">Return Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 animate-pulse !opacity-30 bg-white rounded-full -z-0" />
          </Link>
        </motion.div>
      </div>

      {/* Global Style Inject for Outfit Font if needed */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </div>
  );
};

export default NotFoundPage;
