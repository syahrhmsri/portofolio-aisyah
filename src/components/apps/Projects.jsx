import React from 'react';
import yriImage from '../../assets/YRI.png';

const Projects = () => {
  const projects = [
    { 
      index: '01',
      name: 'Youth Ranger Indonesia (YRI)', 
      desc: 'Led frontend development to build a highly responsive and interactive web platform. Successfully transformed Figma design assets into pixel-perfect production code, optimizing layout responsiveness across mobile and desktop screens, refining elegant hover animations, and resolving styling bugs to deliver a seamless user experience.',
      tech: 'Next.js, React, Tailwind CSS, Figma, Responsive UI', 
      image: yriImage,
      icon: '🇮🇩', 
      role: 'Frontend Developer',
      date: '2025',
      link: 'https://youthrangerindonesia.com/'
    },
    { 
      index: '02',
      name: 'FinTech LLM Data Pipeline', 
      desc: 'Pipeline pembersihan data (HTML noise removal) & normalisasi teks untuk training LLM finansial.', 
      tech: 'Python, BeautifulSoup, RegEx, NLP', 
      icon: '🤖', 
      role: 'Data Engineer',
      date: 'Dec 2025',
      link: 'https://github.com/syahrhmsri'
    },
    { 
      index: '03',
      name: 'Circular Shift Strategy', 
      desc: 'Strategi bisnis berkelanjutan (Refill system) yang memenangkan penghargaan "Best Paper" di ajang nasional.', 
      tech: 'Business Strategy, Sustainability, KPI Design', 
      icon: '♻️', 
      role: 'Strategy Lead',
      date: 'July 2025',
      link: 'https://github.com/syahrhmsri'
    },
    { 
      index: '04',
      name: 'SkillQu Platform', 
      desc: 'Arsitektur platform tutoring on-demand dengan fitur verifikasi dan booking sistem terintegrasi.', 
      tech: 'Product Architecture, BMC, Financial Analysis', 
      icon: '🎓', 
      role: 'Product Architect',
      date: 'June 2025',
      link: 'https://github.com/syahrhmsri'
    },
    { 
      index: '05',
      name: 'Tweet Sentiment Analysis', 
      desc: 'Deep learning model untuk klasifikasi sentimen tweet publik dengan pencapaian F1 Score sebesar 0.94.', 
      tech: 'Python, Deep Learning, NLP, TensorFlow', 
      icon: '🐦', 
      role: 'ML Engineer',
      date: 'May 2025',
      link: 'https://github.com/syahrhmsri'
    },
    { 
      index: '06',
      name: 'Sistem Peminjaman LAB', 
      desc: 'Full-stack web app untuk digitalisasi dan otomasi peminjaman alat lab KCKS Departemen IT ITS.', 
      tech: 'Nuxt.js, Express.js, PostgreSQL, JWT', 
      icon: '🔬', 
      role: 'Fullstack Developer',
      date: 'Dec 2024',
      link: 'https://github.com/syahrhmsri'
    },
    { 
      index: '07',
      name: 'Library Catalog Web', 
      desc: 'Aplikasi katalog perpustakaan interaktif dengan integrasi RESTful API dan state management terpadu.', 
      tech: 'Vue.js, TypeScript, Pinia, REST API', 
      icon: '📚', 
      role: 'Frontend Developer',
      date: 'Nov 2025',
      link: 'https://github.com/syahrhmsri'
    },
    { 
      index: '08',
      name: 'AMBALABU IoT System', 
      desc: 'Sistem monitoring kelembapan tanaman otomatis menggunakan ESP32, sensor tanah, dan relay otomatis.', 
      tech: 'IoT, ESP32, Sensors, Automation', 
      icon: '🌱', 
      role: 'IoT Developer',
      date: 'Nov 2025',
      link: 'https://github.com/syahrhmsri'
    },
  ];

  return (
    <div className="p-8 md:p-12 text-slate-100 max-w-6xl xl:max-w-[94%] mx-auto font-sans animate-in fade-in duration-500 select-text">
      
      {/* Page Header */}
      <div className="mb-16 select-none">
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-white">Technical Projects</h2>
      </div>

      {/* Projects List layout (fiorenza.site theme) */}
      <div className="flex flex-col gap-24">
        {projects.map((proj) => (
          <div key={proj.name} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
            
            {/* Left Column: Visual Mockup frame - Expanded width lg:col-span-7 and cinematic ratio aspect-[16/9] */}
            <div className="lg:col-span-7 relative w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-slate-900 via-[#0d1527] to-slate-950 border border-[#1e2a4a] shadow-2xl flex items-center justify-center overflow-hidden select-none">
              
              {proj.image ? (
                <>
                  {/* Full bleed premium background screenshot image */}
                  <img 
                    src={proj.image} 
                    alt={proj.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {/* Subtle dark gradient overlay so text/badges remain super readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent z-10" />
                </>
              ) : (
                <>
                  {/* Glowing tech grid lines */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ 
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)', 
                      backgroundSize: '16px 16px' 
                    }} 
                  />
                  <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
                  
                  {/* Floating frosted glass icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center justify-center text-4xl shadow-2xl relative z-10 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    {proj.icon}
                  </div>
                </>
              )}
              
              {/* Technology Overlays at the bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 z-20">
                {proj.tech.split(', ').map(t => (
                  <span key={t} className="px-2.5 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-[12px] md:text-[13px] font-bold font-mono text-slate-200 shadow-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Title, Metadata, Description & Link - lg:col-span-5 */}
            <div className="lg:col-span-5 flex flex-col gap-4 pl-0 lg:pl-4">
              
              {/* Year & Index */}
              <span className="text-sm font-black text-[#3f88c5] font-mono tracking-widest uppercase">
                {proj.index} | {proj.date}
              </span>
              
              {/* Title & Role */}
              <div>
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-white leading-tight group-hover:text-[#90caf9] transition-colors">
                  {proj.name}
                </h3>
                <span className="text-sm font-black text-slate-500 uppercase tracking-widest block mt-1.5">
                  {proj.role}
                </span>
              </div>

              {/* Description quote box */}
              <div 
                className="pl-4 border-l-2 border-slate-700/60 text-base md:text-lg lg:text-[18px] xl:text-[19px] text-slate-400 font-medium leading-relaxed"
                style={{ textAlign: 'justify' }}
              >
                {proj.desc}
              </div>

              {/* View Link */}
              <div className="mt-2.5">
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-black tracking-widest uppercase text-slate-300 hover:text-white inline-flex items-center gap-2 transition-all group/link"
                >
                  <span>Visit Site</span>
                  <svg className="w-[18px] h-[18px] shrink-0 text-slate-400 group-hover/link:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
