import React from 'react';

// About School Modal
export const AboutSchoolModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#004328] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[26px] text-[#a9f3c5]">school</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">
                ประวัติความเป็นมาและวิสัยทัศน์โรงเรียน
              </h2>
              <p className="text-xs text-gray-500">
                โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" World-Class Standard School
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#404942] leading-relaxed">
          <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#eaedff]">
            <h3 className="font-bold text-[#004328] text-sm mb-1">วิสัยทัศน์ (Vision)</h3>
            <p>
              "โรงเรียนคุณภาพตามมาตรฐานสากล บนพื้นฐานความเป็นไทย โดยใช้หลักปรัชญาของเศรษฐกิจพอเพียง
              มุ่งพัฒนาคุณภาพผู้เรียนสู่ศตวรรษที่ 21 สร้างเสริมสมรรถนะครูสู่มืออาชีพ"
            </p>
          </div>

          <div className="bg-[#f2f3ff] p-4 rounded-xl border border-[#eaedff]">
            <h3 className="font-bold text-[#904d00] text-sm mb-1">พันธกิจ (Mission)</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>พัฒนาหลักสูตรสถานศึกษาเทียบเคียงมาตรฐานสากลและส่งเสริมทักษะดิจิทัลและ AI</li>
              <li>ยกระดับผลสัมฤทธิ์ทางการเรียนและการแข่งขันระดับชาติและนานาชาติ</li>
              <li>ปลูกฝังคุณธรรม จริยธรรม ค่านิยมที่พึงประสงค์ และจิตสาธารณะ</li>
              <li>บริหารจัดการด้วยระบบคุณภาพแห่งสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน (OBECQA)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#131b2e] text-sm mb-1">ประวัติโดยย่อ</h3>
            <p>
              โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ก่อตั้งขึ้นเพื่อขยายโอกาสทางการศึกษาระดับมัธยมศึกษาในอำเภอบางปลาม้า จังหวัดสุพรรณบุรี ตลอดระยะเวลากว่า 80 ปี โรงเรียนได้ผลิตเยาวชนที่มีคุณภาพสร้างประโยชน์แก่ประเทศชาตินับหมื่นคน และได้รับการคัดเลือกให้เป็นโรงเรียนมาตรฐานสากล (World-Class Standard School)
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-100 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#004328] text-white text-xs font-bold"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// Personnel Modal
export const PersonnelModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const staffGroups = [
    { title: 'กลุ่มบริหารวิชาการ', count: '32 ท่าน', head: 'นางสาวจินตนา ศรีสุข' },
    { title: 'กลุ่มบริหารงบประมาณและสินทรัพย์', count: '14 ท่าน', head: 'นายณรงค์เดช เกียรติสกุล' },
    { title: 'กลุ่มบริหารบุคคล', count: '18 ท่าน', head: 'นางพิมพา วัฒนากูล' },
    { title: 'กลุ่มบริหารทั่วไป', count: '24 ท่าน', head: 'นายประสิทธิ์ สุพรรณวงศ์' },
    { title: 'กลุ่มบริหารกิจการนักเรียน', count: '20 ท่าน', head: 'นายธนาธิป เจริญผล' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#004328] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[26px]">groups</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">คณะผู้บริหารและบุคลากรครู</h2>
              <p className="text-xs text-gray-500">โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์"</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {staffGroups.map((group, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#f2f3ff] border border-[#eaedff]">
              <span className="text-xs text-gray-500 block">ฝ่าย/กลุ่มงาน</span>
              <h4 className="font-bold text-sm text-[#004328]">{group.title}</h4>
              <p className="text-xs text-gray-600 mt-1">หัวหน้ากลุ่ม: {group.head}</p>
              <span className="inline-block mt-2 text-[11px] bg-white px-2 py-0.5 rounded text-gray-700 font-medium">
                จำนวนครูและบุคลากร: {group.count}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#004328] text-white text-xs font-bold"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// Downloads Modal
export const DownloadsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const docs = [
    { title: 'แบบคำร้องขอหลักฐานการศึกษา (ปพ.1 / ปพ.7)', size: '240 KB', type: 'PDF' },
    { title: 'คู่มือนักเรียนและผู้ปกครอง ประจำปีการศึกษา 2569', size: '4.8 MB', type: 'PDF' },
    { title: 'แบบฟอร์มขออนุญาตลาเรียน / ขอลาออก', size: '180 KB', type: 'DOCX' },
    { title: 'แผนการจัดซื้อจัดจ้างประจำปีงบประมาณ 2569', size: '820 KB', type: 'PDF' },
    { title: 'ปฏิทินปฏิบัติงานโรงเรียน ภาคเรียนที่ 1 และ 2', size: '1.2 MB', type: 'PDF' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#004328] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[26px]">download</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">ศูนย์ดาวน์โหลดเอกสารและแบบฟอร์ม</h2>
              <p className="text-xs text-gray-500">บริการสำหรับนักเรียน ผู้ปกครอง และบุคคลภายนอก</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="divide-y divide-gray-100 border border-gray-100 rounded-xl overflow-hidden mb-6">
          {docs.map((doc, idx) => (
            <div
              key={idx}
              className="p-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500 text-[22px]">
                  picture_as_pdf
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#131b2e]">{doc.title}</h4>
                  <span className="text-[11px] text-gray-400">
                    ขนาด: {doc.size} • รูปแบบ: {doc.type}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => alert(`ดาวน์โหลดเอกสาร: ${doc.title} สำเร็จ`)}
                className="px-3 py-1.5 rounded-lg bg-[#004328] hover:bg-[#0d5c3a] text-white text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">download</span>
                ดาวน์โหลด
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#004328] text-white text-xs font-bold"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

// Privacy Policy Modal
export const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#004328] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[26px]">shield</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#131b2e]">
                นโยบายการคุ้มครองข้อมูลส่วนบุคคล (PDPA Policy)
              </h2>
              <p className="text-xs text-gray-500">โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์"</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#404942] leading-relaxed">
          <p>
            โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลของนักเรียน ผู้ปกครอง ครู บุคลากร และผู้ใช้งานเว็บไซต์ ตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
          </p>
          <h4 className="font-bold text-[#131b2e]">1. การเก็บรวบรวมข้อมูล</h4>
          <p>
            โรงเรียนเก็บรวบรวมข้อมูลที่จำเป็น เช่น ข้อมูลการศึกษา ผลการเรียน ข้อมูลการติดต่อ ข้อมูลภาพถ่ายกิจกรรม เพื่อประโยชน์ในการบริหารจัดการศึกษา การวัดผล และการประชาสัมพันธ์ผลงานของสถานศึกษา
          </p>
          <h4 className="font-bold text-[#131b2e]">2. การใช้งานคุกกี้ (Cookies)</h4>
          <p>
            เว็บไซต์นี้ใช้คุกกี้เพื่อจดจำการตั้งค่าการใช้งานของผู้ใช้ เพิ่มประสิทธิภาพการประมวลผล และวิเคราะห์สถิติผู้เข้าชมเว็บไซต์ โดยไม่มีการส่งต่อข้อมูลให้กับบุคคลภายนอกเพื่อการค้า
          </p>
          <h4 className="font-bold text-[#131b2e]">3. สิทธิของเจ้าของข้อมูล</h4>
          <p>
            ท่านมีสิทธิในการขอเข้าถึง ขอสำเนา ขอแก้ไข หรือขอลบข้อมูลส่วนบุคคลของท่านได้ โดยติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ประจำโรงเรียนที่ info@smschool.ac.th
          </p>
        </div>

        <div className="flex justify-end pt-6 border-t border-gray-100 mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#004328] text-white text-xs font-bold"
          >
            รับทราบและปิด
          </button>
        </div>
      </div>
    </div>
  );
};
