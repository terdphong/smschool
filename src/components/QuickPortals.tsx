import React from 'react';

interface QuickPortalsProps {
  onSelectPortal: (portalId: string) => void;
}

export const QuickPortals: React.FC<QuickPortalsProps> = ({ onSelectPortal }) => {
  const portals = [
    {
      id: 'ita-online',
      icon: 'policy',
      badge: 'ความโปร่งใส 2569',
      badgeClass: 'bg-[#ffdcc3] text-[#2f1500]',
      title: 'ITA ONLINE',
      description: 'ระบบประเมินคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงาน',
      actionText: 'เข้าสู่ระบบประเมิน',
      accentColor: 'text-[#004328]',
      hoverBg: 'group-hover:bg-[#004328] group-hover:text-white',
    },
    {
      id: 'district-school',
      icon: 'stars',
      badge: 'ยกระดับคุณภาพ',
      badgeClass: 'bg-[#e2e7ff] text-[#404942]',
      title: '1 อำเภอ 1 โรงเรียนคุณภาพ',
      description: 'โครงการขับเคลื่อนพัฒนาคุณภาพการศึกษาสู่ชุมชนและนวัตกรรมการเรียนรู้',
      actionText: 'รายละเอียดโครงการ',
      accentColor: 'text-[#904d00]',
      hoverBg: 'group-hover:bg-[#904d00] group-hover:text-white',
    },
    {
      id: 'obecqa',
      icon: 'workspace_premium',
      badge: 'เกียรติประวัติ',
      badgeClass: 'bg-[#a9f3c5] text-[#002111]',
      title: 'OBECQA',
      description: 'รางวัลคุณภาพแห่งสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน',
      actionText: 'เกณฑ์และเอกสารอ้างอิง',
      accentColor: 'text-[#004328]',
      hoverBg: 'group-hover:bg-[#004328] group-hover:text-white',
    },
    {
      id: 'ndlp',
      icon: 'devices',
      badge: 'Anywhere Anytime',
      badgeClass: 'bg-[#e2e7ff] text-[#131b2e]',
      title: 'ระบบ NDLP / ดิจิทัล',
      description: 'แพลตฟอร์ม CBMS / EvMS / OLS สำหรับครูและนักเรียนครบวงจร',
      actionText: 'เข้าสู่ระบบสารสนเทศ',
      accentColor: 'text-[#004328]',
      hoverBg: 'group-hover:bg-[#0d5c3a] group-hover:text-white',
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 -mt-10 sm:-mt-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {portals.map((portal) => (
          <div
            key={portal.id}
            onClick={() => onSelectPortal(portal.id)}
            className="group bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between border border-[#eaedff] cursor-pointer"
          >
            <div>
              <div
                className={`w-12 h-12 rounded-xl bg-[#f2f3ff] flex items-center justify-center ${portal.accentColor} mb-3.5 transition-colors duration-200 ${portal.hoverBg}`}
              >
                <span className="material-symbols-outlined text-[28px]">{portal.icon}</span>
              </div>
              <span
                className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-2 ${portal.badgeClass}`}
              >
                {portal.badge}
              </span>
              <h3 className="text-[18px] font-bold text-[#131b2e] group-hover:text-[#004328] transition-colors leading-tight">
                {portal.title}
              </h3>
              <p className="text-[13px] text-[#404942] mt-2 leading-relaxed font-normal">
                {portal.description}
              </p>
            </div>

            <div
              className={`mt-4 pt-3 border-t border-[#f2f3ff] flex items-center justify-between font-semibold text-[13px] ${portal.accentColor}`}
            >
              <span>{portal.actionText}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1.5 transition-transform duration-200">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
