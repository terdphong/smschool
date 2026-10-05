import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickPortals } from './components/QuickPortals';
import { NewsSection } from './components/NewsSection';
import { SidebarCalendar } from './components/SidebarCalendar';
import { RoyalMemorial } from './components/RoyalMemorial';
import { PhotoGallery } from './components/PhotoGallery';
import { CurriculumSection } from './components/CurriculumSection';
import { PartnerNetworks } from './components/PartnerNetworks';
import { Footer } from './components/Footer';
import { PDPABanner } from './components/PDPABanner';
import {
  ArticleModal,
  PhotoLightboxModal,
  ITAModal,
  QAModal,
  ComplaintModal,
  EventDetailModal,
} from './components/Modals';
import {
  AboutSchoolModal,
  PersonnelModal,
  DownloadsModal,
  PrivacyModal,
} from './components/PageSectionsModals';
import { NEWS_ARTICLES, CALENDAR_EVENTS, GALLERY_PHOTOS } from './data/schoolData';
import { NewsArticle, CalendarEvent, GalleryPhoto } from './types';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilter, setSearchFilter] = useState('');

  // Modal States
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showITAModal, setShowITAModal] = useState(false);
  const [showQAModal, setShowQAModal] = useState(false);
  const [showComplaintModal, setShowComplaintModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showPersonnelModal, setShowPersonnelModal] = useState(false);
  const [showDownloadsModal, setShowDownloadsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleNavChange = (navId: string) => {
    setActiveNav(navId);
    if (navId === 'about-school') {
      setShowAboutModal(true);
    } else if (navId === 'personnel') {
      setShowPersonnelModal(true);
    } else if (navId === 'downloads') {
      setShowDownloadsModal(true);
    } else if (navId === 'achievements') {
      const el = document.getElementById('news');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (q: string) => {
    setSearchFilter(q);
    const el = document.getElementById('news');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPortal = (portalId: string) => {
    if (portalId === 'ita-online') {
      setShowITAModal(true);
    } else if (portalId === 'district-school') {
      showToast('โครงการ 1 อำเภอ 1 โรงเรียนคุณภาพ: มุ่งยกระดับการศึกษาชุมชนสู่มาตรฐานสากล');
    } else if (portalId === 'obecqa') {
      showToast('OBECQA: รางวัลคุณภาพแห่งสำนักงานคณะกรรมการการศึกษาขั้นพื้นฐาน ระดับสากล');
    } else if (portalId === 'ndlp') {
      showToast('ระบบ NDLP: เข้าสู่ระบบสารสนเทศ CBMS / EvMS / OLS สำหรับครูและนักเรียน');
    }
  };

  const handleSelectStat = (statKey: string) => {
    if (statKey === 'ita') {
      setShowITAModal(true);
    } else if (statKey === 'history') {
      setShowAboutModal(true);
    } else if (statKey === 'obecqa') {
      showToast('โรงเรียนบางปลาม้า "สูงสุมารผดุงวิทย์" ผ่านการรับรองมาตรฐานคุณภาพ OBECQA');
    } else if (statKey === 'quality') {
      showToast('มาตรฐานการศึกษาขั้นพื้นฐาน: บรรลุผลตามเกณฑ์การประเมิน 100%');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-[#a9f3c5] selection:text-[#002111]">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-24 right-6 z-50 bg-[#004328] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-[#a9f3c5]/30 animate-in slide-in-from-top-3">
          <span className="material-symbols-outlined text-[#a9f3c5] text-[20px]">info</span>
          <span className="text-xs sm:text-sm font-medium">{notification}</span>
        </div>
      )}

      {/* Header */}
      <Header
        activeNav={activeNav}
        setActiveNav={handleNavChange}
        onOpenITA={() => setShowITAModal(true)}
        onOpenQA={() => setShowQAModal(true)}
        onOpenComplaint={() => setShowComplaintModal(true)}
        onOpenSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="w-full pt-28 bg-[#faf8ff] flex-1">
        {/* Hero Section */}
        <Hero
          onExplore={() => setShowAboutModal(true)}
          onContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectStat={handleSelectStat}
        />

        {/* Quick Portals - Floating Cards Overlap */}
        <QuickPortals onSelectPortal={handleSelectPortal} />

        {/* Split Section: News & Announcements (Left 8 cols) + Right Widgets (4 cols) */}
        <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: News */}
            <div className="lg:col-span-8">
              <NewsSection
                articles={NEWS_ARTICLES}
                onOpenArticle={(article) => setSelectedArticle(article)}
                searchFilter={searchFilter}
              />
            </div>

            {/* Right Column: Calendar, Royal Tribute, and Photo Gallery */}
            <div className="lg:col-span-4 space-y-6">
              {/* Calendar Widget */}
              <SidebarCalendar
                events={CALENDAR_EVENTS}
                onOpenEventDetails={(event) => setSelectedEvent(event)}
                onOpenAllEvents={() => {
                  showToast('เปิดปฏิทินปฏิบัติงานภาคเรียนที่ 1 และ 2 ครบถ้วน');
                }}
              />

              {/* Royal Memorial Tribute Card */}
              <RoyalMemorial />

              {/* Photo Gallery Widget */}
              <PhotoGallery
                photos={GALLERY_PHOTOS}
                onOpenPhoto={(photo) => setSelectedPhoto(photo)}
              />
            </div>
          </div>
        </section>

        {/* Curriculum & Excellence Bento */}
        <CurriculumSection
          onSelectCurriculum={(title, desc) => {
            showToast(`${title}: ${desc}`);
          }}
        />

        {/* Educational Networks */}
        <PartnerNetworks />
      </main>

      {/* Footer */}
      <Footer
        onOpenITA={() => setShowITAModal(true)}
        onOpenComplaint={() => setShowComplaintModal(true)}
        onOpenPrivacy={() => setShowPrivacyModal(true)}
        onOpenFAQ={() => setShowQAModal(true)}
        onOpenSitemap={() => {
          showToast('แผนผังเว็บไซต์: รวมทุกหน้าและระบบงานของสถานศึกษา');
        }}
      />

      {/* Floating PDPA Cookie Consent Banner */}
      <PDPABanner onOpenPrivacy={() => setShowPrivacyModal(true)} />

      {/* Modals & Dialogs */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <PhotoLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ITAModal
        isOpen={showITAModal}
        onClose={() => setShowITAModal(false)}
      />

      <QAModal
        isOpen={showQAModal}
        onClose={() => setShowQAModal(false)}
      />

      <ComplaintModal
        isOpen={showComplaintModal}
        onClose={() => setShowComplaintModal(false)}
      />

      <AboutSchoolModal
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />

      <PersonnelModal
        isOpen={showPersonnelModal}
        onClose={() => setShowPersonnelModal(false)}
      />

      <DownloadsModal
        isOpen={showDownloadsModal}
        onClose={() => setShowDownloadsModal(false)}
      />

      <PrivacyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
    </div>
  );
}
