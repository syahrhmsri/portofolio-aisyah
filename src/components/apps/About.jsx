import React, { useEffect, useRef } from 'react';

const About = ({ activeTab }) => {
  const skillsRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeTab]);

  const tags = [
    'Data Analytics',
    'AI & ML',
    'Cloud Computing',
    'RPA Automation',
    'Frontend',
    'Database Admin'
  ];

  const skills = [
    { name: 'Python', icon: '🐍' },
    { name: 'SQL', icon: '💾' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Git', icon: '🐙' },
    { name: 'React', icon: '⚛️' }
  ];
  return (
    <div className="p-8 md:p-12 text-slate-100 max-w-4xl lg:max-w-5xl xl:max-w-[92%] mx-auto font-sans animate-in fade-in duration-500 select-text">
      
      {/* Title block like fiorenza.site */}
      <div className="flex flex-col gap-2 select-none mb-10">
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tight leading-none">Hello,</h1>
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tight flex items-center gap-4 flex-wrap leading-none mt-2">
          I'm 
          <span className="px-5 py-2.5 bg-[#3f88c5] text-white font-extrabold rounded-2xl shadow-[inset_3px_3px_0px_#63a4d9,inset_-3px_-3px_0px_#1b4f80,4px_4px_8px_rgba(0,0,0,0.5)] tracking-wide hover:bg-[#3271a5] transition-all cursor-pointer select-none">
            Aisyah
          </span>
        </h1>
      </div>

      <hr className="border-[#1e2a4a]/40 my-8" />

      {/* Tags and Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
        {/* Left Tag List */}
        <div className="lg:col-span-4 flex flex-wrap gap-2 select-none">
          {tags.map(t => (
            <span key={t} className="px-3.5 py-1.5 rounded-lg border border-[#1e2d50] bg-[#151e33]/50 text-sm md:text-[15px] font-extrabold text-slate-200 hover:border-[#90caf9]/20 hover:text-white transition-all cursor-default">
              {t}
            </span>
          ))}
        </div>
        
        {/* Right Bio Text */}
        <div className="lg:col-span-8 flex flex-col gap-5 text-[15px] md:text-[17px] lg:text-[18px] xl:text-[19px] text-slate-300 font-medium leading-relaxed">
          <p>
            I'm a university student passionate about software engineering and data analytics, starting my tech journey in <strong className="text-white font-black text-lg">2023</strong>.
          </p>
          <p>
            I began with databases and web architectures, and am currently exploring <strong className="text-white font-black text-lg">AI/Machine Learning Models</strong> and <strong className="text-white font-black text-lg">Cloud Infrastructure</strong> to understand full-scale systems <em className="text-[#3f88c5] not-italic font-black text-lg">end to end</em>.
          </p>
        </div>
      </div>

      {/* Technical Skills Row */}
      <div ref={skillsRef} className="mt-16 select-none">
        <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#90caf9] mb-6 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#90caf9]" />
          Core Tech Stack
        </h3>
        <div className="flex flex-wrap gap-4 items-center">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="w-12 h-12 rounded-full bg-[#151e33] border border-slate-700 hover:border-[#90caf9]/40 flex items-center justify-center relative group cursor-pointer transition-all hover:scale-110 shadow"
            >
              <span className="text-xl filter drop-shadow">{skill.icon}</span>
              {/* Skill Label Tooltip */}
              <span className="absolute -bottom-8 bg-slate-900 text-white text-[12px] px-2 py-0.5 rounded font-sans font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
