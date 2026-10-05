import React from 'react';

interface CurriculumSectionProps {
  onSelectCurriculum: (title: string, desc: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onSelectCurriculum }) => {
  const items = [
    {
      id: 'smte',
      icon: 'science',
      title: 'SMTE & ห้องเรียนพิเศษ',
      desc: 'ห้องเรียนพิเศษวิทยาศาสตร์ คณิตศาสตร์ เทคโนโลยีและสิ่งแวดล้อม ส่งเสริมการทำโครงงานและการแข่งขันระดับชาติ',
      iconColor: 'text-[#004328]',
    },
    {
      id: 'languages',
      icon: 'translate',
      title: 'ภาษาต่างประเทศเข้มข้น',
      desc: 'หลักสูตรเน้นการสื่อสารภาษาอังกฤษ จีน และญี่ปุ่น เพื่อความพร้อมในการศึกษาต่อและสื่อสารระดับสากล',
      iconColor: 'text-[#904d00]',
    },
    {
      id: 'sufficiency',
      icon: 'psychology',
      title: 'เศรษฐกิจพอเพียงและคุณธรรม',
      desc: 'บ่มเพาะระเบียบวินัย ความรับผิดชอบ และจิตอาสาเพื่อสังคมตามหลักสูตรโรงเรียนคุณธรรม สพฐ.',
      iconColor: 'text-[#004328]',
    },
  ];

  return (
    <section id="curriculum" className="w-full bg-[#f2f3ff] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-[12px] uppercase tracking-wider text-[#004328] font-bold block mb-1">
              Curriculum &amp; Excellence
            </span>
            <h2 className="text-[26px] sm:text-[32px] text-[#131b2e] font-bold tracking-tight">
              การเรียนรู้รอบด้าน สู่พลโลกคุณภาพ
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#404942] max-w-md leading-relaxed font-light">
            มุ่งเสริมสร้างความเป็นเลิศทางวิชาการ ทักษะปัญญาประดิษฐ์ ดนตรี กีฬา และคุณธรรมจริยธรรม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCurriculum(item.title, item.desc)}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-[#eaedff] hover:border-[#004328]/30 cursor-pointer group"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center ${item.iconColor} mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
              </div>
              <h3 className="text-[18px] text-[#131b2e] font-bold mb-2 group-hover:text-[#004328] transition-colors">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#404942] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
