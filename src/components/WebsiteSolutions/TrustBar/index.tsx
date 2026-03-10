import { clients } from '../../../data/clientsData';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-8 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#064232] mb-6 leading-tight font-outfit"
          >
            Digital Partners & Clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto mb-8 font-medium font-outfit"
          >
            We've helped businesses across various industries establish high-performance digital presence. Join our list of satisfied clients and transform your brand today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-20 h-1 bg-[#064232] mx-auto rounded-full" 
          />
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
            .animate-marquee {
              display: flex;
              animation: marquee 80s linear infinite;
              width: max-content;
            }
            @media (min-width: 1024px) {
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            }
          `}
        </style>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative mt-8 lg:mt-16 overflow-hidden max-w-[1240px] mx-auto"
        >
          <div className="flex animate-marquee w-fit items-center">
            {[1, 2].map((setIdx) => (
              <div
                key={`logo-set-${setIdx}`}
                className="flex items-center gap-12 md:gap-16 pr-12 md:pr-16 flex-shrink-0"
              >
                {clients.map((logo, index) => (
                  <div
                    key={`logo-${setIdx}-${index}`}
                    className="relative flex items-center justify-center"
                  >
                    <img
                      src={`/assets/images/logos/clients/${logo.src}`}
                      alt={logo.alt}
                      className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustBar;
