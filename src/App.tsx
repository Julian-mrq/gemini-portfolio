import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Code2,
  LineChart,
  Globe,
  User,
  Layers,
  Phone,
  MapPin,
  FileText
} from 'lucide-react';

const SectionHeader = ({ title, subtitle, dark = false }: { title: string; subtitle?: string; dark?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl font-bold tracking-tight ${dark ? 'text-white' : 'text-slate-900'} sm:text-4xl mb-4`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg ${dark ? 'text-slate-300' : 'text-slate-600'} max-w-2xl`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string; key?: React.Key }) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className={`bg-white rounded-xl border border-slate-200 p-8 shadow-sm transition-all hover:shadow-md ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Modèle de Black-Scholes étendu",
      desc: "Implémentation en C++ d'un moteur de pricing d'options avec intégration de la volatilité locale.",
      tech: ["C++", "Numerical Methods"],
      link: "#"
    },
    {
      title: "Dashboard de Risque Temps Réel",
      desc: "Application web visualisant l'exposition au risque d'un portefeuille d'actions via des APIs financières.",
      tech: ["React", "Python", "WebSockets"],
      link: "#"
    },
    {
      title: "Optimisation de Portefeuille",
      desc: "Algorithme de frontière efficiente de Markowitz développé pour la gestion d'actifs institutionnels.",
      tech: ["Python", "SciPy", "Matplotlib"],
      link: "#"
    },
    {
      title: "Analyse Sentiment Marché",
      desc: "Outil de NLP analysant les flux Twitter et Reuters pour prédire les mouvements de court terme.",
      tech: ["NLP", "TensorFlow", "API"],
      link: "#"
    }
  ];

  // Triple the projects for infinite scroll effect
  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    // Center the scroll on mount
    if (projectsRef.current) {
      projectsRef.current.scrollLeft = projectsRef.current.scrollWidth / 3;
    }
  }, []);

  return (
    <div className="min-h-screen font-sans bg-finance-light/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-finance-dark rounded-lg flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-finance-dark">PORTFOLIO</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-finance-blue uppercase tracking-wider">
            {/* <a href="#about" className="hover:text-finance-dark transition-colors">Accueil</a>
            <a href="#education" className="hover:text-finance-dark transition-colors">education</a>
            <a href="#experience" className="hover:text-finance-dark transition-colors">Expériences</a>
            <a href="#extra" className="hover:text-finance-dark transition-colors">Activités</a>
            <a href="#projects" className="hover:text-finance-dark transition-colors">projects</a> */}
            <a href="#about" className="hover:text-finance-dark transition-colors">Home</a>
            <a href="#education" className="hover:text-finance-dark transition-colors">Education</a>
            <a href="#experience" className="hover:text-finance-dark transition-colors">Professional experiences</a>
            <a href="#extra" className="hover:text-finance-dark transition-colors">Extracurricular experiences</a>
            <a href="#projects" className="hover:text-finance-dark transition-colors">Projects</a>
          </div>
          <a 
            href="#contact" 
            className="bg-finance-dark text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-finance-blue transition-all shadow-lg shadow-finance-dark/10"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Finance Theme */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Finance Background" 
            className="w-full h-full object-cover grayscale-[0.4] opacity-90"
            referrerPolicy="no-referrer"
          />
          {/* Muted Blue-Gray Transparent Overlay */}
          <div className="absolute inset-0 bg-finance-dark/70 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-finance-dark/95 via-finance-dark/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex-1"
          >
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              <span className="block text-finance-accent">Engineering</span>
              <span className="block">x</span>
              <span className="block text-finance-accent">Finance</span>
              {/* L'Analyse <span className="text-finance-accent">Technique</span> au service de la <span className="text-finance-accent">Finance</span> */}
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              Portfolio of an engineering graduate specialized in data science, transitioning into corporate finance. Explore my professional experience, AI projects, and academic journey.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#education" className="bg-white text-finance-dark px-8 py-4 rounded-xl font-bold hover:bg-finance-light transition-all flex items-center gap-2 shadow-xl">
                See my journey <ChevronRight size={18} />
              </a>
              <a
                href="../Julian_Marques_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-4 rounded-xl 
                bg-white/10 backdrop-blur-md border border-white/20 
                text-white font-medium 
                hover:bg-white/20 hover:scale-105 active:scale-95 
                transition-all duration-300"
              >
                <FileText size={20} className="text-finance-accent" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Profile Photo - Harmonized with Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="w-72 h-96 rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-finance-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-finance-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 border-2 border-finance-accent/30 rounded-3xl translate-x-4 translate-y-4 -z-0"></div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="education Académique" 
            subtitle="Un double cursus exigeant alliant ingénierie et finance de marché." 
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Master in Finance",
                school: "Grande École de Commerce",
                period: "2024 — Présent",
                bullets: [
                  "Spécialisation en Finance de Marché et Gestion d'Actifs",
                  "Focus sur les produits dérivés et la gestion de portefeuille",
                  "Modélisation stochastique appliquée aux marchés financiers"
                ],
                logo: "https://picsum.photos/seed/school1/100/100"
              },
              {
                title: "Diplôme d'Ingénieur",
                school: "École Nationale Supérieure",
                period: "2020 — 2024",
                bullets: [
                  "Majeure Mathématiques Appliquées et Systèmes",
                  "Mention Très Bien (Top 5% de la promotion)",
                  "Expertise en algorithmique, optimisation et calcul scientifique"
                ],
                logo: "https://picsum.photos/seed/school2/100/100"
              }
            ].map((edu, i) => (
              <Card key={i} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-finance-blue uppercase tracking-widest">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-finance-dark mb-1">{edu.title}</h3>
                  <p className="text-finance-blue font-semibold mb-4">{edu.school}</p>
                  <ul className="space-y-2">
                    {edu.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                        <ChevronRight size={14} className="mt-1 text-finance-blue shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expériences Section */}
      <section id="experience" className="section-padding bg-slate-100/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Expériences Professionnelles" 
            subtitle="Mise en pratique des compétences analytiques en milieu financier." 
          />
          <div className="space-y-8">
            {[
              {
                role: "Analyste Quantitatif (Stage)",
                company: "Banque d'Investissement",
                period: "Été 2024",
                bullets: [
                  "Développement d'outils de pricing pour options exotiques en C++",
                  "Automatisation de rapports de risques via Python et SQL",
                  "Collaboration quotidienne avec le desk de trading et les risk managers"
                ],
                logo: "https://picsum.photos/seed/bank/100/100",
                skills: ["Python", "VBA", "Stochastic Calculus"]
              },
              {
                role: "Consultant Data Junior",
                company: "Cabinet de Conseil Stratégique",
                period: "2023",
                bullets: [
                  "Analyse de données massives pour l'optimisation de processus industriels",
                  "Création de modèles prédictifs et dashboards décisionnels sous Tableau",
                  "Présentation des résultats stratégiques aux clients finaux"
                ],
                logo: "https://picsum.photos/seed/consulting/100/100",
                skills: ["SQL", "Tableau", "Machine Learning"]
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all group"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-finance-dark">{exp.role}</h3>
                    <span className="text-sm font-mono font-bold text-finance-blue bg-finance-light px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="text-lg text-finance-blue font-bold mb-4">{exp.company}</p>
                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                        <ChevronRight size={14} className="mt-1 text-finance-blue shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, j) => (
                      <span key={j} className="text-xs font-bold text-finance-blue/60 bg-slate-100 px-3 py-1 rounded-md uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités Section */}
      <section id="extra" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Activités Extrascolaires" 
            subtitle="Engagement et leadership au-delà du cursus académique." 
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Président Club Finance",
                desc: "Gestion d'une association de 50 membres. Organisation de conférences avec des professionnels de la City et de Wall Street.",
                icon: <Trophy className="text-finance-blue" size={32} />
              },
              {
                title: "Sport de Compétition",
                desc: "Pratique intensive du Tennis en club. Participation à des tournois régionaux. Esprit d'équipe et résilience.",
                icon: <Globe className="text-finance-blue" size={32} />
              },
              {
                title: "Bénévolat",
                desc: "Soutien scolaire en mathématiques pour des élèves en difficulté. Transmission de la passion pour les sciences.",
                icon: <User className="text-finance-blue" size={32} />
              }
            ].map((item, i) => (
              <Card key={i} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-finance-light rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-finance-dark mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* projects Section */}
      <section id="projects" className="section-padding bg-finance-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex-1">
              <SectionHeader 
                title="projects & Réalisations" 
                subtitle="Démonstration de compétences techniques à travers des projects concrets." 
                dark
              />
            </div>
            <div className="flex gap-4 mb-12 md:mb-0">
              <button 
                onClick={() => {
                  const container = projectsRef.current;
                  if (!container) return;
                  if (container.scrollLeft < 200) {
                    container.scrollLeft = container.scrollWidth / 3;
                  }
                  container.scrollBy({ left: -container.offsetWidth / 2, behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white"
                aria-label="Projet précédent"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => {
                  const container = projectsRef.current;
                  if (!container) return;
                  if (container.scrollLeft > (container.scrollWidth * 2) / 3) {
                    container.scrollLeft = container.scrollWidth / 3;
                  }
                  container.scrollBy({ left: container.offsetWidth / 2, behavior: 'smooth' });
                }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white"
                aria-label="Projet suivant"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div 
            ref={projectsRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteProjects.map((project, i) => (
              <motion.div 
                key={i}
                className="min-w-full md:min-w-[calc(50%-1rem)] snap-start p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-finance-accent/20 rounded-lg flex items-center justify-center mb-6">
                    <Layers className="text-finance-accent" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] font-bold text-finance-accent bg-white/10 px-2 py-1 rounded uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-finance-accent font-bold hover:text-white transition-colors">
                  Voir le projet <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="section-padding bg-finance-light/20">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader 
            title="Me Contacter" 
            subtitle="N'hésitez pas à me rejoindre sur mes réseaux professionnels ou par email." 
          />
          
          <div className="flex flex-wrap justify-center gap-12 mt-12">
            <motion.a 
              whileHover={{ y: -5 }}
              href="mailto:contact@example.com" 
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-24 h-24 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-finance-blue group-hover:text-finance-dark group-hover:border-finance-accent transition-all group-hover:shadow-xl group-hover:shadow-finance-dark/5">
                <Mail size={40} />
              </div>
              <span className="font-bold text-finance-blue group-hover:text-finance-dark transition-colors tracking-widest uppercase text-xs">Email</span>
            </motion.a>

            <motion.a 
              whileHover={{ y: -5 }}
              href="https://linkedin.com" 
              target="_blank"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-24 h-24 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-finance-blue group-hover:text-finance-dark group-hover:border-finance-accent transition-all group-hover:shadow-xl group-hover:shadow-finance-dark/5">
                <Linkedin size={40} />
              </div>
              <span className="font-bold text-finance-blue group-hover:text-finance-dark transition-colors tracking-widest uppercase text-xs">LinkedIn</span>
            </motion.a>

            <motion.a 
              whileHover={{ y: -5 }}
              href="https://github.com" 
              target="_blank"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="w-24 h-24 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-finance-blue group-hover:text-finance-dark group-hover:border-finance-accent transition-all group-hover:shadow-xl group-hover:shadow-finance-dark/5">
                <Github size={40} />
              </div>
              <span className="font-bold text-finance-blue group-hover:text-finance-dark transition-colors tracking-widest uppercase text-xs">GitHub</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-finance-dark rounded flex items-center justify-center text-white font-bold text-sm">
              P
            </div>
            <span className="font-bold text-lg tracking-tight text-finance-dark">PORTFOLIO</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Portfolio Professionnel. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-finance-dark transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="hover:text-finance-dark transition-colors uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
