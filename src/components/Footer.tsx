import React from 'react';

interface FooterProps {
  onOpenITA: () => void;
  onOpenComplaint: () => void;
  onOpenPrivacy: () => void;
  onOpenFAQ: () => void;
  onOpenSitemap: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenITA,
  onOpenComplaint,
  onOpenPrivacy,
  onOpenFAQ,
  onOpenSitemap,
}) => {
  return (
    <footer id="contact" className="w-full bg-[#f2f3ff] mt-12 border-t border-[#eaedff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: School Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#004328] flex items-center justify-center text-white shadow-xs">
                <span className="material-symbols-outlined text-[22px] text-[#a9f3c5]">school</span>
              </div>
              <span className="text-[18px] text-[#004328] font-bold">ส.ส.ผ. สุพรรณบุรี</span>
            </div>
            <p className="text-[13px] text-[#404942] leading-relaxed">
              โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" มุ่งมั่นพัฒนาการศึกษาสู่มาตรฐานสากล
              บนพื้นฐานความเป็นไทยและคุณธรรมนำความรู้
            </p>
            <div className="pt-2 flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e] hover:bg-[#004328] hover:text-white transition-colors"
                title="Facebook โรงเรียน"
              >
                <span className="material-symbols-outlined text-[18px]">public</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e] hover:bg-[#004328] hover:text-white transition-colors"
                title="YouTube SMTV2471"
              >
                <span className="material-symbols-outlined text-[18px]">smart_display</span>
              </a>
              <a
                href="https://line.me"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#dae2fd] flex items-center justify-center text-[#131b2e] hover:bg-[#004328] hover:text-white transition-colors"
                title="LINE Official Account"
              >
                <span className="material-symbols-outlined text-[18px]">forum</span>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-3">
            <h3 className="text-[16px] text-[#131b2e] font-bold">ติดต่อสถานศึกษา</h3>
            <div className="space-y-2 text-[13px] text-[#404942]">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#004328] text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>304 หมู่ 5 ต.โคกคราม อ.บางปลาม้า จ.สุพรรณบุรี 72150</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004328] text-[18px] shrink-0">
                  call
                </span>
                <span>035-528553 (สำนักงาน)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004328] text-[18px] shrink-0">
                  print
                </span>
                <span>035-528554 (โทรสาร)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004328] text-[18px] shrink-0">
                  mail
                </span>
                <span>info@smschool.ac.th</span>
              </p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-[16px] text-[#131b2e] font-bold">เมนูลัดสำคัญ</h3>
            <ul className="space-y-2 text-[13px] text-[#404942]">
              <li>
                <button
                  type="button"
                  onClick={onOpenITA}
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  การประเมินคุณธรรม ITA
                </button>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  หลักสูตรสถานศึกษา
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1VO5VfmmMW7EVxcn_PH-Z3yL1lih4W0-_/view"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  ปฏิทินกิจกรรมโรงเรียน
                </a>
              </li>
              <li>
                <a
                  href="#news"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  ประกาศจัดซื้อจัดจ้าง
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenComplaint}
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  ศูนย์รับเรื่องร้องเรียน
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Educational Networks */}
          <div className="space-y-3">
            <h3 className="text-[16px] text-[#131b2e] font-bold">หน่วยงานทางการศึกษา</h3>
            <ul className="space-y-2 text-[13px] text-[#404942]">
              <li>
                <a
                  href="https://www.moe.go.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  กระทรวงศึกษาธิการ (ศธ.)
                </a>
              </li>
              <li>
                <a
                  href="https://www.obec.go.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  สำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (สพฐ.)
                </a>
              </li>
              <li>
                <a
                  href="https://www.onesqa.or.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  สำนักงานรับรองมาตรฐานและประเมินคุณภาพการศึกษา (สมศ.)
                </a>
              </li>
              <li>
                <a
                  href="https://www.ipst.ac.th"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#004328] transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  สถาบันส่งเสริมการสอนวิทยาศาสตร์และเทคโนโลยี (สสวท.)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="mt-8 pt-6 border-t border-[#eaedff] flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[#404942]">
          <p>© 2025 โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์". All rights reserved. World-Class Standard School.</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-[#131b2e] cursor-pointer"
            >
              นโยบายความเป็นส่วนตัว
            </button>
            <span className="text-gray-300">•</span>
            <button
              type="button"
              onClick={onOpenFAQ}
              className="hover:text-[#131b2e] cursor-pointer"
            >
              ศูนย์ช่วยเหลือ
            </button>
            <span className="text-gray-300">•</span>
            <button
              type="button"
              onClick={onOpenSitemap}
              className="hover:text-[#131b2e] cursor-pointer"
            >
              แผนผังเว็บไซต์
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
