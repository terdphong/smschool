import React, { useState } from 'react';

export const RoyalMemorial: React.FC = () => {
  const [signed, setSigned] = useState(false);
  const [showSignModal, setShowSignModal] = useState(false);
  const [name, setName] = useState('');
  const [blessing, setBlessing] = useState('น้อมสำนึกในพระมหากรุณาธิคุณอันหาที่สุดมิได้');

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSigned(true);
    setShowSignModal(false);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#283044] text-[#eef0ff] p-4 sm:p-5 shadow-md border border-[#404942]/40">
      {/* Golden glow decoration */}
      <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-[#ffdcc3]/20 blur-2xl pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-[#ffdcc3] text-[22px]">
          workspace_premium
        </span>
        <span className="text-[12px] uppercase tracking-wider text-[#ffdcc3] font-bold">
          น้อมสำนึกในพระมหากรุณาธิคุณ
        </span>
      </div>

      {/* Royal Portrait Banner */}
      <div className="h-44 w-full rounded-lg overflow-hidden bg-black/60 mb-3 relative group">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYXwpcvXIu7JBSjFn45orBDwAZltblw2XH2--B47m0My6OoQGcnieAJ5Avr4y-NI9gAGgNYV5jZ7GfZBzAtjIlWQX--pkRBPOfV8cBLpp83DBrMeZyC-MozRsfcTHf1tJv16dBwQFokSYtsI-H8zkia4p_wSVDGytJZU1arFnnT412bCND8frKtAeNQPMegwYMgBThO5zgbdJWzuSmW8TmMxPcpmzCHFeiqY-dgP-C31DyQthm91SL"
          alt="Monochrome dignified royal portrait banner with subtle golden particles and respectful Thai commemorative inscription for solemn national tribute"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-3">
          <span className="text-white text-[12px] font-light leading-snug">
            สถิตอยู่ในใจตราบนิรันดร์ น้อมสำนึกในพระมหากรุณาธิคุณอันหาที่สุดมิได้
          </span>
        </div>
      </div>

      <p className="text-[12px] sm:text-[13px] text-[#eef0ff]/85 leading-relaxed font-light mb-3">
        ข้าพระพุทธเจ้า ผู้บริหาร ครู บุคลากร และนักเรียน โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์"
      </p>

      {/* Interaction button: Sign Tribute */}
      <button
        type="button"
        onClick={() => setShowSignModal(true)}
        className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-[#ffdcc3] text-[12px] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[16px]">edit_note</span>
        <span>
          {signed ? '✓ ร่วมลงนามถวายความอาลัยแล้ว' : 'ร่วมลงนามถวายความอาลัย / น้อมรำลึก'}
        </span>
      </button>

      {/* Signature Modal */}
      {showSignModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#1e2538] text-white w-full max-w-md rounded-2xl p-6 border border-[#ffdcc3]/30 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <h3 className="text-lg font-bold text-[#ffdcc3] flex items-center gap-2">
                <span className="material-symbols-outlined">edit_note</span>
                ลงนามน้อมสำนึกในพระมหากรุณาธิคุณ
              </h3>
              <button
                type="button"
                onClick={() => setShowSignModal(false)}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSign} className="space-y-4">
              <div>
                <label className="block text-xs text-white/80 mb-1">
                  ชื่อ-นามสกุล หรือหน่วยงาน <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="เช่น นายสมชาย ใจดี หรือ ตัวแทนนักเรียน ม.6/1"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#ffdcc3]"
                />
              </div>

              <div>
                <label className="block text-xs text-white/80 mb-1">ข้อความน้อมรำลึก</label>
                <textarea
                  rows={3}
                  value={blessing}
                  onChange={(e) => setBlessing(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#ffdcc3]"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSignModal(false)}
                  className="px-4 py-2 rounded-lg text-xs text-white/80 hover:bg-white/10"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#ffdcc3] hover:bg-white text-[#2f1500] font-bold text-xs shadow-md transition-colors"
                >
                  บันทึกการลงนาม
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
