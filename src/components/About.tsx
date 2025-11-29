import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Database, Brain, TrendingUp, Users, Target, FileSpreadsheet, Layout, Server, GitBranch } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "Excel", icon: FileSpreadsheet },
    { name: "React", icon: Layout },
    { name: "Node.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Express", icon: Server },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "HTML/CSS", icon: Layout },
    { name: "Git", icon: GitBranch },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Target },
    { name: "Communication", icon: Users },
    { name: "Critical Thinking", icon: Brain },
    { name: "Team Collaboration", icon: Users },
  ];

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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl mb-4 text-blue-400">My Story</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Based in Bhubaneswar, I'm a passionate Full-Stack Developer and Data Analyst with expertise in building modern web applications and extracting insights from complex datasets. My journey combines the best of both worlds - creating powerful digital solutions while making data-driven decisions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in developing scalable web applications using the MERN stack and transforming raw data into compelling visual stories. Whether it's building a platform from scratch or uncovering insights that drive growth, I'm dedicated to delivering excellence.
            </p>
          </motion.div>

          {/* Soft Skills & Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl mb-6 text-teal-400">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-teal-500/50 transition-all duration-300"
                >
                  <skill.icon className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl mb-6 text-blue-400">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <skill.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-center text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
