import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Code2,
  LineChart,
  Globe,
  User
} from 'lucide-react';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-600 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`bg-white rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:shadow-md ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter">PORTFOLIO.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#education" className="hover:text-emerald-600 transition-colors">Education</a>
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
            <a href="#extra" className="hover:text-emerald-600 transition-colors">Extra-curricular</a>
          </div>
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Bridging <span className="text-emerald-600">Engineering</span> & <span className="text-emerald-600">Finance</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Engineering graduate currently pursuing a Master's in Finance. 
              Passionate about quantitative analysis, financial modeling, and 
              leveraging technical expertise to solve complex financial challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                <Code2 size={18} /> Python, SQL, C++
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                <LineChart size={18} /> Financial Modeling, VBA
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 relative z-10">
              <img 
                src="https://picsum.photos/seed/professional/800/800" 
                alt="Professional Portrait" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-100 rounded-full -z-0 blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-0 blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-slate-100/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Academic Journey" 
            subtitle="Combining rigorous technical training with advanced financial theory." 
          />
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <LineChart size={24} />
              </div>
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Current</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">Master in Finance</h3>
              <p className="text-slate-500 font-medium mb-4">Top-tier Business School • 2024 — Present</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <span>Specializing in Quantitative Finance and Asset Management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-emerald-500 mt-1 shrink-0" />
                  <span>Relevant Coursework: Derivatives Pricing, Portfolio Theory, Corporate Finance.</span>
                </li>
              </ul>
            </Card>

            <Card>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <GraduationCap size={24} />
              </div>
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Completed</span>
              <h3 className="text-2xl font-bold mt-2 mb-1">B.S. in Engineering</h3>
              <p className="text-slate-500 font-medium mb-4">Leading Technical University • 2020 — 2024</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-blue-500 mt-1 shrink-0" />
                  <span>Graduated with Honors. Focused on Systems Engineering and Applied Math.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={18} className="text-blue-500 mt-1 shrink-0" />
                  <span>Thesis: Optimization algorithms for large-scale logistics networks.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Professional Experience" 
            subtitle="Applying analytical skills in real-world environments." 
          />
          <div className="space-y-6">
            {[
              {
                role: "Quantitative Research Intern",
                company: "Global Asset Management Firm",
                period: "Summer 2024",
                desc: "Developed automated trading signals using Python and backtested strategies across multiple asset classes. Improved model accuracy by 15% through feature engineering.",
                icon: <LineChart size={20} />
              },
              {
                role: "Data Analyst Intern",
                company: "Tech Consulting Group",
                period: "Winter 2023",
                desc: "Analyzed supply chain data for Fortune 500 clients. Built interactive dashboards in Tableau and optimized SQL queries for faster data retrieval.",
                icon: <Code2 size={20} />
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-6 p-8 rounded-2xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors shrink-0">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-sm font-mono text-slate-500">{exp.period}</span>
                  </div>
                  <p className="text-emerald-600 font-medium mb-4">{exp.company}</p>
                  <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-curricular Section */}
      <section id="extra" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Beyond the Classroom" 
            subtitle="Leadership and impact through extra-curricular activities." 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Finance Society President",
                desc: "Leading a team of 20 to organize workshops, guest speaker events, and a regional stock pitch competition.",
                icon: <Trophy className="text-emerald-400" />
              },
              {
                title: "Open Source Contributor",
                desc: "Actively contributing to financial analysis libraries on GitHub. Passionate about accessible data tools.",
                icon: <Github className="text-emerald-400" />
              },
              {
                title: "Volunteer Tutor",
                desc: "Teaching advanced mathematics and physics to high school students from underprivileged backgrounds.",
                icon: <Globe className="text-emerald-400" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader 
            title="Let's Connect" 
            subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions." 
          />
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              <Mail size={20} />
              Email Me
            </a>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-all">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Professional Portfolio. Built with React & Tailwind.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
