import React from 'react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
  onSelectStat: (statKey: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact, onSelectStat }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#004328] text-white">
      {/* Ambient background glow effects */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#a9f3c5] blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[#fe932c] blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#0d5c3a] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-20 md:pt-20 md:pb-32 flex flex-col items-center text-center">
        {/* Standard Pill / Badge */}
        <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-[#a9f3c5] mb-5 shadow-sm border border-white/10">
          <span className="material-symbols-outlined text-[18px]">verified</span>
          <span className="text-[12px] md:text-[13px] tracking-wide uppercase font-semibold">
            World-Class Standard School • สพม.สุพรรณบุรี
          </span>
        </div>

        {/* Main Inspiring Headline */}
        <h1 className="text-[34px] sm:text-[46px] md:text-[56px] font-extrabold max-w-4xl tracking-tight leading-[1.2] text-white mb-5">
          โรงเรียนคุณภาพตามมาตรฐานสากล <br className="hidden sm:inline" />
          <span className="text-[#a9f3c5]">บนพื้นฐานความเป็นไทย</span>
        </h1>

        {/* Philosophical Mission Subtitle */}
        <p className="text-[15px] sm:text-[17px] text-[#8ad2a7] max-w-3xl mb-8 leading-relaxed font-light">
          โดยใช้หลักปรัชญาของเศรษฐกิจพอเพียง มุ่งพัฒนาคุณภาพผู้เรียนตามมาตรฐานสากล สร้างเสริมสมรรถนะครูสู่มืออาชีพ เสริมสร้างเยาวชนที่มีคุณธรรมคู่ปัญญาในสังคมร่วมสมัย
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onExplore}
            type="button"
            className="inline-flex items-center gap-2 bg-[#a9f3c5] hover:bg-white text-[#002111] text-[15px] sm:text-[16px] font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">explore</span>
            <span>ทำความรู้จักเรา</span>
          </button>
          <button
            onClick={onContact}
            type="button"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-[15px] sm:text-[16px] font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">description</span>
            <span>ดาวน์โหลดเอกสาร / ติดต่อสอบถาม</span>
          </button>
        </div>

        {/* Institutional Metric Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mt-12 pt-6">
          {/* Card 1 */}
          <div
            onClick={() => onSelectStat('history')}
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-4 rounded-xl text-left border border-white/10 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <div className="text-[34px] sm:text-[40px] font-black text-[#ffdcc3] tracking-tight leading-none mb-1">
              80+
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#8ad2a7] font-medium leading-tight">
              ปีแห่งเกียรติยศและคุณภาพ
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onSelectStat('quality')}
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-4 rounded-xl text-left border border-white/10 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <div className="text-[34px] sm:text-[40px] font-black text-[#a9f3c5] tracking-tight leading-none mb-1">
              100%
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#8ad2a7] font-medium leading-tight">
              มาตรฐานการศึกษาขั้นพื้นฐาน
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onSelectStat('obecqa')}
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-4 rounded-xl text-left border border-white/10 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <div className="text-[32px] sm:text-[38px] font-black text-[#ffdcc3] tracking-tight leading-none mb-1">
              OBEC
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#8ad2a7] font-medium leading-tight">
              รางวัลคุณภาพแห่ง สพฐ. (OBECQA)
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => onSelectStat('ita')}
            className="bg-white/10 hover:bg-white/15 backdrop-blur-md p-4 rounded-xl text-left border border-white/10 cursor-pointer transition-all hover:scale-[1.02]"
          >
            <div className="text-[34px] sm:text-[40px] font-black text-[#a9f3c5] tracking-tight leading-none mb-1">
              AA
            </div>
            <div className="text-[12px] sm:text-[13px] text-[#8ad2a7] font-medium leading-tight">
              ผลประเมินคุณธรรม ITA องค์กร
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
