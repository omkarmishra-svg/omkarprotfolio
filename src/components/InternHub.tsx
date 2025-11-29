import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, Users, BookOpen, ArrowRight } from "lucide-react";
import  ProjectImage from "../assets/internhub1.jpg";

export function InternHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            InternHub 
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500/10 to-teal-500/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl text-blue-400">
                    InternHub
                  </h3>
                  <p className="text-gray-400">by Innovatrix</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A platform helping students find internship opportunities and skill resources. Connecting ambitious learners with real-world experiences and comprehensive learning materials.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <Users className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Students</p>
                    <p className="text-gray-200">Connected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <BookOpen className="w-5 h-5 text-teal-400" />
                  <div>
                    <p className="text-sm text-gray-400">Resources</p>
                    <p className="text-gray-200">Available</p>
                  </div>
                </div>
              </div>

              <button className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2">
                <a href="https://innovatrixxx.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <span>Visit Platform</span>
                </a>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur-xl opacity-30"></div>
              <img
                src={ProjectImage}
                alt="InternHub Platform"
                className="relative rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
