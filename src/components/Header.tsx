import React, { useState } from 'react';

interface HeaderProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onOpenITA: () => void;
  onOpenQA: () => void;
  onOpenComplaint: () => void;
  onOpenSearch: (query: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeNav,
  setActiveNav,
  onOpenITA,
  onOpenQA,
  onOpenComplaint,
  onOpenSearch,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'about-school', label: 'เกี่ยวกับโรงเรียน' },
    { id: 'personnel', label: 'บุคลากร' },
    { id: 'achievements', label: 'ผลงานและรางวัล' },
    { id: 'downloads', label: 'ดาวน์โหลดเอกสาร' },
    { id: 'contact', label: 'ติดต่อเรา' },
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onOpenSearch(searchQuery);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8ff]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-[#e2e7ff]">
      {/* Top Utility Bar */}
      <div className="bg-[#004328] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-10 flex items-center justify-between text-[11px] sm:text-[12px] font-medium tracking-wide">
          {/* Left contact info */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:035528553"
              className="flex items-center gap-1 hover:text-[#a9f3c5] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span>035-528553</span>
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="mailto:info@smschool.ac.th"
              className="hidden sm:flex items-center gap-1 hover:text-[#a9f3c5] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>info@smschool.ac.th</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/90">สพม.สุพรรณบุรี</span>
          </div>

          {/* Right helper links & search */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onOpenQA}
              type="button"
              className="hover:text-[#a9f3c5] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">help</span>
              <span>ถาม-ตอบ (Q&amp;A)</span>
            </button>
            <button
              onClick={onOpenComplaint}
              type="button"
              className="hover:text-[#a9f3c5] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">campaign</span>
              <span>ร้องเรียน / แจ้งเบาะแส</span>
            </button>

            {/* Top Search Input */}
            <div className="relative hidden lg:flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="ค้นหาข้อมูลโรงเรียน..."
                className="bg-[#0d5c3a] text-white placeholder:text-[#8ad2a7] rounded-full pl-3 pr-8 py-0.5 text-[12px] focus:outline-none focus:ring-1 focus:ring-[#8ed6aa] w-44 focus:w-56 transition-all"
              />
              <button
                type="button"
                onClick={() => onOpenSearch(searchQuery)}
                className="absolute right-2 text-[#8ad2a7] hover:text-white flex items-center justify-center cursor-pointer"
                title="ค้นหา"
              >
                <span className="material-symbols-outlined text-[14px]">search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* School Logo & Brand Typography */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-12 h-12 rounded-xl bg-[#004328] flex items-center justify-center text-white shadow-sm ring-2 ring-[#a9f3c5]/50 group-hover:scale-105 transition-transform duration-200">
            <span className="material-symbols-outlined text-[28px] text-[#a9f3c5]">school</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[17px] sm:text-[20px] font-bold text-[#004328] tracking-tight leading-snug">
                โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์"
              </span>
              <span className="hidden xl:inline-block bg-[#ffdcc3] text-[#2f1500] text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                World-Class Standard School
              </span>
            </div>
            <span className="text-[12px] sm:text-[13px] text-[#404942]">
              Bangplama Soongsumarnpadungwit School • สพม.สุพรรณบุรี
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-3">
          <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#eaedff]/60 rounded-xl">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-[14px] font-semibold transition-all rounded-lg cursor-pointer ${
                    isActive
                      ? 'bg-[#004328] text-white shadow-sm'
                      : 'text-[#404942] hover:bg-[#e2e7ff] hover:text-[#131b2e]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons: ITA ONLINE & Profile Avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenITA}
              type="button"
              className="inline-flex items-center gap-1.5 bg-[#fe932c] hover:bg-[#904d00] text-[#2f1500] hover:text-white text-[13px] sm:text-[14px] px-3 sm:px-3.5 py-2 rounded-lg font-bold shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>ITA ONLINE</span>
            </button>

            <button
              type="button"
              onClick={onOpenQA}
              title="ผู้ใช้งาน / บัญชีครู"
              className="w-9 h-9 rounded-full bg-[#004328] hover:bg-[#0d5c3a] flex items-center justify-center text-white transition-colors cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#131b2e] hover:bg-[#eaedff] transition-colors cursor-pointer"
              aria-label="เปิดเมนู"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[#eaedff] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 space-y-1">
            {/* Mobile Search */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="ค้นหาข้อมูล..."
                className="w-full bg-[#f2f3ff] text-[#131b2e] rounded-lg pl-3 pr-9 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#004328]"
              />
              <button
                type="button"
                onClick={() => onOpenSearch(searchQuery)}
                className="absolute right-3 top-2.5 text-[#004328]"
              >
                <span className="material-symbols-outlined text-[18px]">search</span>
              </button>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors flex items-center justify-between ${
                  activeNav === link.id
                    ? 'bg-[#004328] text-white'
                    : 'text-[#131b2e] hover:bg-[#f2f3ff]'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            ))}

            <div className="pt-2 border-t border-[#eaedff] flex items-center gap-2">
              <button
                onClick={() => {
                  onOpenITA();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 bg-[#fe932c] text-[#2f1500] font-bold text-center py-2.5 rounded-lg text-sm flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-[18px]">verified</span>
                ITA ONLINE 2569
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
