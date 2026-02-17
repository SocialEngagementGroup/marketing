import React from "react";
import { ArrowUpRight, TrendingUp, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import CountUp from "../../Common/ui/CountUp";

const CaseStudy: React.FC = () => {
  const metrics = [
    { label: "Location Searches", value: 83, suffix: "%", prefix: "" },
    { label: "Increase in Phone Leads", value: 67, suffix: "%", prefix: "" },
    { label: "Total Inbound Calls", value: 137, suffix: "+", prefix: "" },
  ];

  return (
    <section
      id="results"
      className="py-20 md:py-32 bg-[#0A2647] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Featured Case Study
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight font-outfit">
              North Island <br />
              Podiatry Associates
            </h2>

            <div className="space-y-8 text-gray-400 font-medium mb-12 lg:mb-12">
              <div>
                <p className="text-white font-bold uppercase text-xs tracking-widest mb-3">
                  The Challenge:
                </p>
                <p className="text-base text-gray-300 border-l-2 border-white/10 pl-6 font-outfit">
                  An established family practice with an outdated website, no
                  online review strategy, and minimal visibility in local search
                  results.
                </p>
              </div>

              <div>
                <p className="text-white font-bold uppercase text-xs tracking-widest mb-3">
                  Our Solution:
                </p>
                <p className="text-base text-gray-300 border-l-2 border-cyan-400/50 pl-6 font-outfit">
                  To revitalize NIPA’s digital presence, we launched a
                  mobile-optimized website and optimized Google Business Profiles
                  for all locations. The strategy integrated automated review
                  requests, targeted Search and Local Service Ads for
                  insurance-accepting physicians, and specialized SEO content.
                  This, combined with a social media overhaul, established the
                  practice as a trusted local authority.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:-mt-12">
            {metrics.map((metric, index) => {
              const Icon =
                index === 0 ? MapPin : index === 1 ? Phone : TrendingUp;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-center items-start lg:items-center text-left lg:text-center group lg:hover:bg-white/10 transition-all duration-300 relative overflow-hidden lg:min-h-[300px]"
                >
                  <div className="relative z-10 flex flex-col">
                    <h3 className="text-4xl sm:text-5xl font-bold text-white font-outfit">
                      <CountUp
                        end={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2 font-outfit">
                      {metric.label}
                    </p>
                  </div>

                  {/* Background Icon Watermark */}
                  <div className="absolute -right-6 -bottom-6 opacity-10 transform rotate-[-15deg] lg:group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                    <Icon className="text-white w-[160px] h-[160px]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
