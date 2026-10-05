import React, { useState } from 'react';

interface PDPABannerProps {
  onOpenPrivacy: () => void;
}

export const PDPABanner: React.FC<PDPABannerProps> = ({ onOpenPrivacy }) => {
  const [accepted, setAccepted] = useState(() => {
    return localStorage.getItem('sm_pdpa_accepted') === 'true';
  });

  if (accepted) return null;

  const handleAccept = () => {
    localStorage.setItem('sm_pdpa_accepted', 'true');
    setAccepted(true);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-md z-40 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_12px_28px_-4px_rgba(0,67,40,0.18)] border border-[#e2e7ff] animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-[#004328] text-[26px] shrink-0 mt-0.5">
          shield
        </span>
        <div className="flex-1">
          <h4 className="text-[14px] sm:text-[15px] font-bold text-[#131b2e] mb-1">
            การคุ้มครองข้อมูลส่วนบุคคล (PDPA)
          </h4>
          <p className="text-[12px] sm:text-[13px] text-[#404942] mb-3 leading-relaxed font-light">
            โรงเรียนใช้งานคุกกี้เพื่อมอบประสบการณ์การใช้งานเว็บไซต์ที่ดียิ่งขึ้นตามมาตรฐานพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
            พ.ศ. 2562
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              type="button"
              className="bg-[#004328] text-white hover:bg-[#0d5c3a] text-[12px] font-bold px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              ยอมรับทั้งหมด
            </button>
            <button
              onClick={onOpenPrivacy}
              type="button"
              className="text-[#004328] hover:underline text-[12px] font-semibold cursor-pointer"
            >
              นโยบายความเป็นส่วนตัว
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
