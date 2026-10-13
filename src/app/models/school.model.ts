export interface Teacher {
  id: string;
  name: string;
  title: string;
  subject: string;
  category: 'PAI & Tahfidz' | 'MIPA' | 'Bahasa' | 'Sosial & Seni' | 'BK & Konseling';
  education: string;
  experienceYears: number;
  bio: string;
  quote: string;
  photoUrl: string;
}

export interface Program {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Akademik' | 'Tahfidz & Ibadah' | 'Sains & Robotik' | 'Prestasi & Lomba' | 'Ekstrakurikuler';
  date: string;
  description: string;
  imageUrl: string;
}

export interface PpdbWave {
  id: string;
  name: string;
  badgeText: string;
  period: string;
  status: 'active' | 'upcoming' | 'closed';
  quota: string;
  description: string;
  benefits: string[];
}

export interface PpdbStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  timeline: string;
}

export interface PpdbRequirement {
  category: string;
  items: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SchoolFacility {
  name: string;
  description: string;
  icon: string;
}

export interface SchoolStatistics {
  totalStudents: number;
  maleStudents: number;
  femaleStudents: number;
  totalRombel: number;
  rombelClass7: number;
  rombelClass8: number;
  rombelClass9: number;
  totalTeachers: number;
  certifiedTeachers: number;
  totalEducationalStaff: number;
}

export interface SchoolProfile {
  name: string;
  tagline: string;
  motto: string;
  accreditation: string;
  npsn: string;
  city: string;
  address: string;
  phone: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  operatingHours: string;
  schoolPhotoUrl?: string;
  shortDescription?: string;
  vision?: string;
  missions?: string[];
  principalName: string;
  principalTitle: string;
  principalPhotoUrl?: string;
  principalWelcome: string;
  studentStats?: SchoolStatistics;
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  facilities: SchoolFacility[];
}

export interface PpdbInquiry {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  schoolOrigin: string;
  programInterest: string;
  notes: string;
  createdAt: string;
  status: 'Baru' | 'Dihubungi' | 'Daftar Ulang' | 'Selesai';
}
