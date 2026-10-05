import React, { useState } from 'react';
import { NewsArticle } from '../types';

interface NewsSectionProps {
  articles: NewsArticle[];
  onOpenArticle: (article: NewsArticle) => void;
  searchFilter: string;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  articles,
  onOpenArticle,
  searchFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<'pr' | 'procurement' | 'academic'>('pr');

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = art.category === activeCategory;
    if (!matchesCategory) return false;
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.author.toLowerCase().includes(q) ||
      art.categoryLabel.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-4">
      {/* Header and Category Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#eaedff]">
        <div>
          <span className="text-[11px] sm:text-[12px] uppercase tracking-wider text-[#904d00] font-bold block mb-0.5">
            News &amp; Announcements
          </span>
          <h2 className="text-[24px] sm:text-[28px] text-[#131b2e] font-bold tracking-tight">
            ข่าวสารและประชาสัมพันธ์
          </h2>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="inline-flex p-1 bg-[#e2e7ff] rounded-xl text-[#404942] text-[13px] self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveCategory('pr')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'pr'
                ? 'bg-white text-[#004328] font-bold shadow-sm'
                : 'text-[#404942] hover:text-[#131b2e]'
            }`}
          >
            ข่าวประชาสัมพันธ์
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('procurement')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'procurement'
                ? 'bg-white text-[#004328] font-bold shadow-sm'
                : 'text-[#404942] hover:text-[#131b2e]'
            }`}
          >
            จัดซื้อจัดจ้าง
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('academic')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'academic'
                ? 'bg-white text-[#004328] font-bold shadow-sm'
                : 'text-[#404942] hover:text-[#131b2e]'
            }`}
          >
            เผยแพร่ผลงาน
          </button>
        </div>
      </div>

      {searchFilter && (
        <div className="bg-[#e2e7ff]/60 px-3 py-2 rounded-lg text-[13px] text-[#004328] flex items-center justify-between">
          <span>
            ผลการค้นหาสำหรับ: <strong>"{searchFilter}"</strong> ({filteredArticles.length} รายการ)
          </span>
        </div>
      )}

      {/* News Cards Feed */}
      <div className="space-y-3">
        {filteredArticles.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-[#eaedff]">
            <span className="material-symbols-outlined text-[36px] text-[#707971] mb-2">article</span>
            <p className="text-gray-500 text-sm">ไม่พบข่าวสารในหมวดหมู่นี้</p>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="group bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row gap-4 sm:gap-5 items-start border border-[#eaedff] hover:border-[#004328]/30 cursor-pointer"
            >
              {/* Image with Tag Overlay */}
              <div className="w-full md:w-48 h-36 md:h-32 rounded-lg bg-[#eaedff] overflow-hidden shrink-0 relative">
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span
                  className={`absolute top-2 left-2 text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-sm ${
                    article.categoryLabel === 'กิจการนักเรียน' || article.categoryLabel === 'ทุนการศึกษา'
                      ? 'bg-[#904d00] text-white'
                      : 'bg-[#004328] text-white'
                  }`}
                >
                  {article.categoryLabel}
                </span>
              </div>

              {/* Text Information */}
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center gap-1.5 text-[#404942] text-[11px] sm:text-[12px] mb-1.5 flex-wrap">
                    <span className="material-symbols-outlined text-[15px] text-[#004328]">
                      calendar_today
                    </span>
                    <span>{article.date}</span>
                    <span className="mx-1">•</span>
                    <span>โดย {article.author}</span>
                  </div>

                  <h3 className="text-[16px] sm:text-[17px] text-[#131b2e] group-hover:text-[#004328] transition-colors font-bold leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-[13px] text-[#404942] mt-1.5 line-clamp-2 leading-relaxed font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-3 pt-2 sm:pt-3 flex items-center justify-between border-t border-[#f2f3ff]">
                  <span className="text-[#004328] group-hover:underline text-[13px] flex items-center gap-1 font-semibold">
                    อ่านรายละเอียด{' '}
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  </span>
                  <span className="text-[#707971] text-[11px] sm:text-[12px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                    เข้าชม {article.views.toLocaleString()} ครั้ง
                  </span>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      {/* News Archive CTA Button */}
      <div className="pt-2 flex justify-center">
        <button
          type="button"
          onClick={() => {
            alert('กำลังนำท่านไปยังคลังจดหมายข่าวและเอกสารเผยแพร่ทั้งหมด');
          }}
          className="inline-flex items-center gap-2 bg-[#004328] hover:bg-[#0d5c3a] text-white px-6 py-2.5 rounded-lg text-[14px] font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>ข่าวสารทั้งหมด</span>
          <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
        </button>
      </div>
    </div>
  );
};
