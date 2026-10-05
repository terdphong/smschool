import React, { useState } from 'react';
import { GalleryPhoto } from '../types';

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  onOpenPhoto: (photo: GalleryPhoto) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, onOpenPhoto }) => {
  const [showAllModal, setShowAllModal] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 border border-[#eaedff]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#f2f3ff]">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#004328] text-[22px]">
            photo_library
          </span>
          <h3 className="text-[17px] font-bold text-[#131b2e]">อัลบั้มภาพล่าสุด</h3>
        </div>
        <span className="text-[12px] text-[#404942] font-semibold bg-[#f2f3ff] px-2 py-0.5 rounded">
          งานโสตฯ
        </span>
      </div>

      {/* Grid of 4 photos */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {photos.slice(0, 4).map((photo) => (
          <div
            key={photo.id}
            onClick={() => onOpenPhoto(photo)}
            className="h-24 sm:h-28 rounded-lg overflow-hidden relative group cursor-pointer border border-gray-100"
          >
            <img
              src={photo.imageUrl}
              alt={photo.imageAlt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-end p-1.5">
              <span className="text-[10px] text-white font-medium bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs truncate max-w-full">
                {photo.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button
        type="button"
        onClick={() => setShowAllModal(true)}
        className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-[#004328] text-[13px] font-semibold transition-colors cursor-pointer"
      >
        <span>ดูภาพกิจกรรมทั้งหมด (SM PHOTO)</span>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
      </button>

      {/* All Photos Gallery Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#eaedff] mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#004328] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">photo_library</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#131b2e]">
                    คลังภาพกิจกรรมโรงเรียน (SM PHOTO)
                  </h3>
                  <p className="text-xs text-gray-500">
                    กลุ่มสาระและงานโสตทัศนศึกษา โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์"
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setShowAllModal(false);
                    onOpenPhoto(item);
                  }}
                  className="group rounded-xl overflow-hidden border border-[#eaedff] hover:shadow-md transition-all cursor-pointer bg-white"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={item.imageUrl}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 right-2 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-[#131b2e] group-hover:text-[#004328] line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAllModal(false)}
                className="px-4 py-2 rounded-lg bg-[#004328] text-white text-xs font-bold"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
