import React from 'react';

const Experience = () => {
  const experiences = [
    {
      index: '01',
      date: 'Feb 2026 - Present',
      role: 'Teaching Assistant for Cloud Computing',
      company: 'ITS Surabaya',
      desc: 'Membimbing praktikan dalam memahami konsep komputasi awan (IaaS, PaaS, SaaS) serta konfigurasi server menggunakan virtualisasi dan kontainerisasi.'
    },
    {
      index: '02',
      date: 'Aug - Dec 2025',
      role: 'Project Management & RPA Assistant',
      company: 'ITS Surabaya',
      desc: 'Mengkoordinasikan timeline proyek integrasi automasi sistem internal kampus dan melatih staf operasional mengenai efisiensi alur kerja berbasis robot (RPA).'
    },
    {
      index: '03',
      date: 'July 2025',
      role: 'Human Resource Intern (RPA Developer)',
      company: 'KPw Bank Indonesia Kepulauan Riau',
      desc: 'Engineered an automated RPA workflow with Power Automate to streamline data entry, reducing human processing errors and saving hours of administrative work.'
    },
    {
      index: '04',
      date: 'Feb - June 2025',
      role: 'Teaching Assistant for Enterprise Architecture',
      company: 'ITS Surabaya',
      desc: 'Facilitated lab sessions on enterprise design patterns, system modeling, UML design, and IT infrastructure aligning with business requirements.'
    }
  ];

  return (
    <div className="p-8 md:p-12 text-slate-100 max-w-4xl lg:max-w-5xl xl:max-w-[92%] mx-auto font-sans animate-in fade-in duration-500 select-text">
      
      {/* Section Header */}
      <div className="mb-14 select-none">
        <h3 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight text-white flex items-center gap-3">
          Professional Experience
        </h3>
        <p className="text-slate-400 text-base md:text-lg font-bold mt-2">
          Perjalanan karir, asisten akademik, dan kontribusi industri.
        </p>
      </div>
      
      <div className="flex flex-col gap-12 mt-10">
        {experiences.map((exp) => (
          <div key={exp.index} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group">
            
            {/* Left Column: Number & Date */}
            <div className="lg:col-span-4 flex flex-col select-none">
              <span className="text-sm md:text-[15px] font-black text-[#3f88c5] font-mono tracking-widest uppercase">
                {exp.index} | {exp.date}
              </span>
            </div>

            {/* Right Column: Title, Company & Description Quote */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div>
                <h4 className="text-xl md:text-2xl xl:text-3xl font-black text-white leading-tight group-hover:text-[#90caf9] transition-colors">
                  {exp.role}
                </h4>
                <span className="text-sm md:text-[15px] font-black text-slate-500 tracking-wider block mt-2 uppercase select-none">
                  {exp.company}
                </span>
              </div>
              
              {/* Blockquote-style Description */}
              <div className="pl-4 border-l-2 border-slate-700/60 text-base md:text-lg lg:text-[19px] xl:text-[20px] text-slate-200 font-semibold leading-relaxed">
                {exp.desc}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
