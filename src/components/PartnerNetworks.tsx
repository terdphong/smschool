import React from 'react';

export const PartnerNetworks: React.FC = () => {
  const networks = [
    {
      name: 'สพฐ.',
      desc: 'สำนักงาน กพฐ.',
      icon: 'account_balance',
      url: 'https://www.obec.go.th',
    },
    {
      name: 'สสวท.',
      desc: 'สถาบันส่งเสริมฯ',
      icon: 'biotech',
      url: 'https://www.ipst.ac.th',
    },
    {
      name: 'สมศ.',
      desc: 'ประเมินคุณภาพการศึกษา',
      icon: 'verified_user',
      url: 'https://www.onesqa.or.th',
    },
    {
      name: 'ศธ.',
      desc: 'กระทรวงศึกษาธิการ',
      icon: 'apartment',
      url: 'https://www.moe.go.th',
    },
    {
      name: 'สพม.สุพรรณบุรี',
      desc: 'เขตพื้นที่การศึกษามัธยมฯ',
      icon: 'school',
      url: 'https://www.secondarysuphan.go.th',
      isWide: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 w-full">
      <div className="text-center mb-6">
        <span className="text-[12px] uppercase tracking-wider text-[#404942] font-semibold block">
          Educational Networks
        </span>
        <h3 className="text-[20px] sm:text-[22px] text-[#131b2e] font-bold mt-1">
          เครือข่ายและหน่วยงานที่เกี่ยวข้อง
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {networks.map((net) => (
          <a
            key={net.name}
            href={net.url}
            target="_blank"
            rel="noreferrer"
            className={`bg-white hover:bg-[#e2e7ff]/50 p-4 rounded-xl shadow-xs border border-[#eaedff] text-center flex flex-col items-center justify-center group transition-all duration-200 hover:-translate-y-1 ${
              net.isWide ? 'col-span-2 sm:col-span-4 lg:col-span-1' : ''
            }`}
          >
            <span className="material-symbols-outlined text-[#004328] text-[32px] mb-2 group-hover:scale-110 transition-transform">
              {net.icon}
            </span>
            <span className="text-sm text-[#131b2e] font-bold group-hover:text-[#004328]">
              {net.name}
            </span>
            <span className="text-[11px] text-[#404942] mt-0.5">{net.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
