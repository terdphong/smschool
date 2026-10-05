import React, { useState } from 'react';
import { NewsArticle, CalendarEvent, GalleryPhoto } from '../types';
import { ITA_ITEMS } from '../data/schoolData';

// 1. Article Modal
export const ArticleModal: React.FC<{
  article: NewsArticle | null;
  onClose: () => void;
}> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-100">
          <img
            src={article.imageUrl}
            alt={article.imageAlt}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
            aria-label="ปิด"
          >
            ✕
          </button>
          <span className="absolute bottom-4 left-4 bg-[#004328] text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md">
            {article.categoryLabel}
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span className="material-symbols-outlined text-[16px] text-[#004328]">
              calendar_today
            </span>
            <span>{article.date}</span>
            <span>•</span>
            <span>โดย {article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">visibility</span>
              {article.views} ครั้ง
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e] leading-snug mb-4">
            {article.title}
          </h2>

          <div className="prose max-w-none text-sm sm:text-base text-[#404942] leading-relaxed whitespace-pre-line mb-6">
            {article.content}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">แชร์ข่าวนี้:</span>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('คัดลอกลิงก์ข่าวเรียบร้อยแล้ว');
                }}
                className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs text-gray-700 flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">link</span>
                คัดลอกลิงก์
              </button>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#004328] hover:bg-[#0d5c3a] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Photo Lightbox Modal
export const PhotoLightboxModal: React.FC<{
  photo: GalleryPhoto | null;
  onClose: () => void;
}> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
          <img
            src={photo.imageUrl}
            alt={photo.imageAlt}
            className="w-full max-h-[75vh] object-contain mx-auto"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors shadow-lg"
            aria-label="ปิดภาพ"
          >
            ✕
          </button>
        </div>
        <div className="w-full text-left text-white mt-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#a9f3c5] bg-[#004328] px-2.5 py-0.5 rounded">
              {photo.category}
            </span>
            <span className="text-xs text-gray-300">ประจำปีการศึกษา {photo.date}</span>
          </div>
          <h3 className="text-lg font-bold text-white">{photo.title}</h3>
          <p className="text-sm text-gray-200 mt-1">{photo.description}</p>
        </div>
      </div>
    </div>
  );
};

// 3. ITA Online Modal
export const ITAModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 p-6 sm:p-8">
        <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#fe932c] flex items-center justify-center text-[#2f1500] shadow-sm">
              <span className="material-symbols-outlined text-[28px]">policy</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#131b2e]">
                  ระบบประเมินคุณธรรมและความโปร่งใส (ITA ONLINE 2569)
                </h2>
                <span className="bg-[#a9f3c5] text-[#002111] text-xs font-black px-2.5 py-0.5 rounded-full">
                  ระดับ AA (97.45)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" สพม.สุพรรณบุรี
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#eaedff]">
            <span className="text-xs text-gray-500 block">ผลการประเมินภาพรวม</span>
            <span className="text-2xl font-black text-[#004328]">ระดับ AA</span>
            <span className="text-xs text-green-700 block mt-1">คะแนน 97.45 เต็ม 100</span>
          </div>
          <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#eaedff]">
            <span className="text-xs text-gray-500 block">ตัวชี้วัดการเปิดเผยข้อมูล (OIT)</span>
            <span className="text-2xl font-black text-[#904d00]">43 / 43 ข้อ</span>
            <span className="text-xs text-gray-600 block mt-1">เปิดเผยครบถ้วน 100%</span>
          </div>
          <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#eaedff]">
            <span className="text-xs text-gray-500 block">มาตรฐานความโปร่งใส</span>
            <span className="text-2xl font-black text-[#004328]">สพฐ. &amp; ป.ป.ช.</span>
            <span className="text-xs text-gray-600 block mt-1">ผ่านเกณฑ์ยอดเยี่ยม</span>
          </div>
        </div>

        {/* Checklist of OIT Items */}
        <h3 className="text-base font-bold text-[#131b2e] mb-3 flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#004328]">fact_check</span>
          รายการเปิดเผยข้อมูลสาธารณะ (Open Data Integrity and Transparency Assessment)
        </h3>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden mb-6">
          {ITA_ITEMS.map((item) => (
            <div
              key={item.code}
              className="p-3.5 flex items-center justify-between bg-white hover:bg-gray-50 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-7 rounded bg-[#004328] text-white flex items-center justify-center font-bold text-xs">
                  {item.code}
                </span>
                <span className="text-[#131b2e] font-medium">{item.name}</span>
              </div>
              <span className="inline-flex items-center gap-1 text-green-700 font-semibold bg-green-50 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[14px]">check_circle</span>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#004328] text-white text-xs font-bold hover:bg-[#0d5c3a]"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// 4. Q&A Modal
export const QAModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'การรับสมัครนักเรียนใหม่ชั้น ม.1 และ ม.4 ประจำปีการศึกษา 2569 มีกำหนดการอย่างไร?',
      a: 'เปิดรับสมัครรอบห้องเรียนพิเศษ SMTE ในช่วงเดือนกุมภาพันธ์ และรอบห้องเรียนปกติทั่วไปในช่วงเดือนมีนาคม ผ่านระบบรับสมัครออนไลน์ของโรงเรียน',
    },
    {
      q: 'ช่องทางการขอเอกสาร ปพ.1 หรือใบรับรองผลการเรียน มีขั้นตอนอย่างไร?',
      a: 'สามารถติดต่อกลุ่มบริหารวิชาการ (งานทะเบียน-วัดผล) อาคาร 1 ในวันและเวลาราชการ หรือกรอกคำร้องผ่านระบบออนไลน์ล่วงหน้า 3 วันทำการ',
    },
    {
      q: 'มีทุนการศึกษาสำหรับนักเรียนที่มีความประพฤติดีแต่ขาดแคลนทุนทรัพย์หรือไม่?',
      a: 'มีทุนการศึกษาจากมูลนิธิบรรหาร-แจ่มใส ศิลปอาชา ทุนกองทุน ส.ส.ผ. และทุนจากศิษย์เก่าทุกภาคเรียน โดยสมัครผ่านครูที่ปรึกษา',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#004328] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[24px]">help</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">ศูนย์ถาม-ตอบ (Q&amp;A)</h2>
              <p className="text-xs text-gray-500">บริการตอบข้อสงสัยสำหรับผู้ปกครองและนักเรียน</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* FAQ list */}
        <h3 className="text-sm font-bold text-[#131b2e] mb-3">คำถามที่พบบ่อย (FAQs)</h3>
        <div className="space-y-3 mb-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-3.5 bg-[#f2f3ff] rounded-xl border border-[#eaedff]">
              <h4 className="text-xs sm:text-sm font-bold text-[#004328] mb-1 flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">
                  help_outline
                </span>
                {faq.q}
              </h4>
              <p className="text-xs text-[#404942] pl-6 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Submit new question */}
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <h4 className="text-xs font-bold text-[#131b2e] mb-2 flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">send</span>
            ฝากคำถามถึงฝ่ายธุรการ/วิชาการ
          </h4>
          {submitted ? (
            <div className="p-3 bg-green-50 text-green-800 rounded-lg text-xs">
              ✓ ส่งคำถามเรียบร้อยแล้ว เจ้าหน้าที่จะตอบกลับภายใน 24 ชั่วโมง
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (question.trim()) setSubmitted(true);
              }}
              className="space-y-2"
            >
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="พิมพ์ข้อคำถามของคุณที่นี่ พร้อมระบุช่องทางติดต่อกลับ (อีเมล/เบอร์โทร)..."
                rows={3}
                required
                className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-xs text-[#131b2e] focus:outline-none focus:ring-1 focus:ring-[#004328]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#004328] hover:bg-[#0d5c3a] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
              >
                ส่งคำถาม
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// 5. Complaint Modal
export const ComplaintModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [complaintType, setComplaintType] = useState('บริการทั่วไป');
  const [topic, setTopic] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#904d00] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[24px]">campaign</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">ศูนย์รับเรื่องร้องเรียน / ข้อเสนอแนะ</h2>
              <p className="text-xs text-gray-500">โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์"</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-3">
              <span className="material-symbols-outlined text-[32px]">check</span>
            </div>
            <h3 className="text-lg font-bold text-[#131b2e]">ได้รับข้อมูลเรียบร้อยแล้ว</h3>
            <p className="text-xs text-gray-600 mt-1 max-w-sm mx-auto">
              เรื่องร้องเรียนของท่านถูกส่งไปยังคณะกรรมการตรวจสอบข้อเท็จจริง และข้อมูลทั้งหมดจะถูกเก็บรักษาเป็นความลับตามมาตรการคุ้มครองผู้ร้องเรียน
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-5 py-2 bg-[#004328] text-white text-xs font-bold rounded-lg"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-bold text-[#131b2e] mb-1">
                ประเภทเรื่องร้องเรียน
              </label>
              <select
                value={complaintType}
                onChange={(e) => setComplaintType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#131b2e]"
              >
                <option value="บริการทั่วไป">การให้บริการของบุคลากร/เจ้าหน้าที่</option>
                <option value="วิชาการ">การจัดการเรียนการสอนและหลักสูตร</option>
                <option value="อาคารสถานที่">ความปลอดภัยและสิ่งอำนวยความสะดวกในสถานศึกษา</option>
                <option value="ทุจริต">การแจ้งเบาะแสการทุจริตและประพฤติมิชอบ</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#131b2e] mb-1">
                หัวข้อเรื่อง <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="ระบุหัวข้อสั้นๆ..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#131b2e] focus:outline-none focus:ring-1 focus:ring-[#004328]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#131b2e] mb-1">
                รายละเอียดเรื่องร้องเรียน <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="ระบุรายละเอียด เหตุการณ์ สถานที่ และวันเวลาที่เกิดเหตุ..."
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-[#131b2e] focus:outline-none focus:ring-1 focus:ring-[#004328]"
              />
            </div>

            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-[11px] text-amber-800 flex items-start gap-1.5">
              <span className="material-symbols-outlined text-[16px] shrink-0 mt-0.5">lock</span>
              <span>
                ข้อมูลของผู้แจ้งจะถูกเก็บเป็นความลับสูงสุดตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
              </span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#904d00] hover:bg-[#703b00] text-white text-xs font-bold rounded-lg shadow-sm"
              >
                ส่งเรื่องร้องเรียน
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// 6. Calendar Event Detail Modal
export const EventDetailModal: React.FC<{
  event: CalendarEvent | null;
  onClose: () => void;
}> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between pb-3 border-b border-gray-100 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#004328] text-white flex flex-col items-center justify-center font-bold">
              <span className="text-[10px] uppercase leading-none">{event.month}</span>
              <span className="text-base leading-tight font-black">{event.day}</span>
            </div>
            <div>
              <span className="text-[11px] text-gray-500 font-medium">
                ประจำปี พ.ศ. {event.year}
              </span>
              <h3 className="text-base font-bold text-[#131b2e] leading-snug">{event.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-xs text-[#404942] mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-[#004328]">badge</span>
            <span>หน่วยงานรับผิดชอบ: <strong>{event.department}</strong></span>
          </div>
          <p className="bg-[#f2f3ff] p-3 rounded-lg border border-[#eaedff] leading-relaxed">
            {event.details}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#004328] text-white text-xs font-bold"
          >
            ตกลง
          </button>
        </div>
      </div>
    </div>
  );
};
