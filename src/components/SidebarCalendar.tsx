import React, { useState } from 'react';
import { CalendarEvent } from '../types';

interface SidebarCalendarProps {
  events: CalendarEvent[];
  onOpenEventDetails: (event: CalendarEvent) => void;
  onOpenAllEvents: () => void;
}

export const SidebarCalendar: React.FC<SidebarCalendarProps> = ({
  events,
  onOpenEventDetails,
  onOpenAllEvents,
}) => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const months = [
    { name: 'ตุลาคม 2569', term: 'ภาคเรียนที่ 1 / ปีการศึกษา 2569' },
    { name: 'พฤศจิกายน 2569', term: 'ภาคเรียนที่ 2 / ปีการศึกษา 2569' },
    { name: 'ธันวาคม 2569', term: 'ภาคเรียนที่ 2 / ปีการศึกษา 2569' },
  ];

  const handlePrevMonth = () => {
    setCurrentMonthIndex((prev) => (prev > 0 ? prev - 1 : months.length - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prev) => (prev < months.length - 1 ? prev + 1 : 0));
  };

  const currentMonth = months[currentMonthIndex];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 flex flex-col border border-[#eaedff]">
      {/* Calendar Header with PDF Link */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f2f3ff]">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#004328] text-[22px]">
            calendar_month
          </span>
          <h3 className="text-[17px] font-bold text-[#131b2e]">ปฏิทินปฏิบัติงาน</h3>
        </div>
        <a
          href="https://drive.google.com/file/d/1VO5VfmmMW7EVxcn_PH-Z3yL1lih4W0-_/view"
          target="_blank"
          rel="noreferrer"
          className="text-[#004328] text-[12px] font-semibold hover:underline flex items-center gap-0.5"
        >
          <span>PDF ทั้งหมด</span>
          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>

      {/* Month Navigator Header Box */}
      <div className="bg-[#004328] text-white rounded-xl p-2.5 flex items-center justify-between mb-3 shadow-inner">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="w-8 h-8 rounded-lg hover:bg-[#0d5c3a] flex items-center justify-center transition-colors cursor-pointer"
          title="เดือนก่อนหน้า"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
        </button>

        <div className="text-center">
          <span className="text-[15px] font-bold block">{currentMonth.name}</span>
          <span className="text-[11px] text-[#a9f3c5] block font-light">
            {currentMonth.term}
          </span>
        </div>

        <button
          type="button"
          onClick={handleNextMonth}
          className="w-8 h-8 rounded-lg hover:bg-[#0d5c3a] flex items-center justify-center transition-colors cursor-pointer"
          title="เดือนถัดไป"
        >
          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
        </button>
      </div>

      {/* Event Schedule List */}
      <div className="space-y-2 mb-3.5">
        {events.slice(0, 3).map((event) => {
          let badgeBg = 'bg-[#0d5c3a] text-white';
          if (event.color === 'secondary') {
            badgeBg = 'bg-[#fe932c] text-[#2f1500]';
          } else if (event.color === 'neutral') {
            badgeBg = 'bg-[#dae2fd] text-[#131b2e]';
          }

          return (
            <div
              key={event.id}
              onClick={() => onOpenEventDetails(event)}
              className="p-2.5 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] flex items-start gap-3 transition-colors cursor-pointer group"
            >
              {/* Date Box */}
              <div
                className={`w-10 h-10 rounded-md ${badgeBg} flex flex-col items-center justify-center shrink-0 font-bold shadow-xs`}
              >
                <span className="text-[9px] uppercase tracking-wider leading-none">
                  {event.month}
                </span>
                <span className="text-[14px] leading-tight font-black">{event.day}</span>
              </div>

              {/* Event Content */}
              <div className="min-w-0 flex-1">
                <h4 className="text-[13px] text-[#131b2e] group-hover:text-[#004328] font-bold truncate">
                  {event.title}
                </h4>
                <p className="text-[11px] text-[#404942] truncate">{event.details}</p>
              </div>

              <span className="material-symbols-outlined text-[16px] text-[#707971] group-hover:text-[#004328] self-center">
                chevron_right
              </span>
            </div>
          );
        })}
      </div>

      {/* View All Events Action */}
      <button
        type="button"
        onClick={onOpenAllEvents}
        className="w-full text-center py-2 rounded-lg bg-[#eaedff] hover:bg-[#d2d9f4] text-[#004328] text-[13px] transition-colors font-bold cursor-pointer"
      >
        ดูกิจกรรมประจำเดือนทั้งหมด
      </button>
    </div>
  );
};
