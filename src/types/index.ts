export interface NewsArticle {
  id: string;
  title: string;
  category: 'pr' | 'procurement' | 'academic';
  categoryLabel: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  views: number;
  featured?: boolean;
  pdfUrl?: string;
}

export interface CalendarEvent {
  id: string;
  day: string;
  month: string;
  year: string;
  title: string;
  department: string;
  details: string;
  type: 'exam' | 'academic' | 'holiday' | 'activity';
  color: 'primary' | 'secondary' | 'neutral';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  category: string;
}
