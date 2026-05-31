import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '⌨️',
      skills: [
        { name: 'Python', level: 94, color: 'bg-yellow-500' },
        { name: 'SQL', level: 88, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-amber-400' },
        { name: 'C / C++', level: 80, color: 'bg-indigo-500' },
        { name: 'Java / PHP', level: 75, color: 'bg-orange-500' },
        { name: 'HTML / CSS', level: 95, color: 'bg-sky-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Data (MySQL, ChromaDB)', level: 85, color: 'bg-emerald-500' },
        { name: 'AI (HuggingFace, LangChain)', level: 82, color: 'bg-purple-500' },
        { name: 'DevOps (Docker, Git)', level: 80, color: 'bg-slate-700' },
        { name: 'Design (Figma, Photoshop)', level: 90, color: 'bg-pink-500' },
      ]
    }
  ];

  const tools = [
    'VS Code', 'GitHub', 'Google Colab', 'Kaggle', 'LangChain', 
    'ChromaDB', 'HuggingFace', 'BeautifulSoup', 'Docker', 'Wireshark'
  ];

  const softSkills = [
    'Leadership', 'Analytical Problem Solving', 'Data-Driven Decision Making', 
    'Effective Communication', 'Adaptability', 'Project Management'
  ];

  return (
    <div className="p-8 text-slate-800">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black tracking-tight text-slate-900">Technical Expertise</h2>
        <p className="text-slate-500 text-sm font-bold mt-2 italic">"Bridging the gap between data insights and technical implementation."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-2xl flex flex-col gap-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-1000" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl shadow-lg">
                {cat.icon}
              </div>
              <h3 className="font-black text-xl text-slate-900 tracking-tight">{cat.title}</h3>
            </div>
            
            <div className="flex flex-col gap-8 relative z-10">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-3 group/skill">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/skill:text-slate-900 transition-colors">{skill.name}</span>
                    <span className="text-xs font-black text-slate-900">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 p-0.5 shadow-inner">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 shadow-lg relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-10 rounded-[3rem] bg-slate-900 text-white border border-white/10 shadow-2xl">
          <h3 className="text-xs font-black mb-8 text-white/40 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-6 h-0.5 bg-emerald-500" /> Productivity Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span key={tool} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] font-black text-white/80 hover:bg-white/15 hover:text-white transition-all cursor-default shadow-lg">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-2xl">
          <h3 className="text-xs font-black mb-8 text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
            <span className="w-6 h-0.5 bg-rose-500" /> Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span key={skill} className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] font-black text-slate-700 hover:shadow-md transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
