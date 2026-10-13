import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  SchoolProfile,
  Teacher,
  Program,
  GalleryItem,
  PpdbWave,
  PpdbStep,
  PpdbRequirement,
  FaqItem,
  PpdbInquiry
} from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolDataService {
  private readonly platformId = inject(PLATFORM_ID);
  // Generated school image paths
  readonly heroImagePath = '/src/assets/images/hero_smp_campus_1791853846114.jpg';
  readonly tahfidzImagePath = '/src/assets/images/activity_tahfidz_quran_1791853846582.jpg';
  readonly scienceLabImagePath = '/src/assets/images/activity_science_lab_1791853847113.jpg';
  readonly achievementImagePath = '/src/assets/images/activity_ceremony_achievement_1791853847278.jpg';

  readonly profile = signal<SchoolProfile>({
    name: 'SMP AL MUTTAQIN KOTA MADIUN',
    tagline: 'Membentuk Generasi Berakhlak Mulia, Cerdas, dan Berprestasi',
    motto: 'Religius, Berintegritas, Unggul dalam IPTEK & IMTAQ',
    accreditation: 'Akreditasi A (Unggul)',
    npsn: '20534219',
    city: 'Kota Madiun',
    address: 'Jl. Mastrip No. 45, Mojorejo, Kec. Taman, Kota Madiun, Jawa Timur 63139',
    phone: '(0351) 462890',
    whatsapp: '6281234567890',
    whatsappFormatted: '+62 812-3456-7890',
    email: 'databasealmuttaqin@gmail.com',
    operatingHours: 'Senin - Jumat: 07.00 - 15.30 WIB | Sabtu: 07.30 - 12.00 WIB',
    schoolPhotoUrl: '/images/hero_smp_campus_1791853846114.jpg',
    shortDescription:
      'SMP Al Muttaqin Kota Madiun merupakan lembaga pendidikan menengah pertama Islam terpadu unggulan di Kota Madiun yang mengintegrasikan Kurikulum Merdeka Nasional dengan penguatan adab Islami, tahfidz Al-Qur\'an, dan keunggulan sains-teknologi. Kami berkomitmen mewujudkan generasi cerdas, mandiri, berkarakter mulia, serta siap menyongsong masa depan dengan landasan iman dan takwa yang kokoh.',
    vision: 'Mewujudkan Generasi Qur\'ani yang Cerdas, Mandiri, Berakhlak Mulia, dan Unggul dalam IPTEK serta Berwawasan Lingkungan',
    missions: [
      'Menyelenggarakan pembelajaran terpadu Kurikulum Merdeka dengan penguatan tahfidz Al-Qur\'an dan akhlakul karimah.',
      'Mengembangkan potensi sains, teknologi digital, dan riset ilmiah peserta didik secara optimal.',
      'Membina kemandirian, kepemimpinan, dan kecakapan hidup (life skills) santri melalui program ekstrakurikuler komprehensif.',
      'Menciptakan lingkungan kampus sekolah yang asri, religius, ramah anak, dan berwawasan lingkungan hidup.'
    ],
    principalName: 'Drs. H. Ahmad Mustofa, M.Pd.I.',
    principalTitle: 'Kepala Sekolah SMP Al Muttaqin Kota Madiun',
    principalPhotoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    principalWelcome:
      'Assalamu’alaikum Warahmatullahi Wabarakatuh.\n\nSelamat datang di portal resmi SMP Al Muttaqin Kota Madiun. Puji syukur ke hadirat Allah SWT yang senantiasa melimpahkan hidayah dan taufik-Nya bagi kita semua. SMP Al Muttaqin berkomitmen menyelenggarakan pendidikan menengah pertama yang memadukan Kurikulum Merdeka Nasional dengan penguatan adab Islami, tahfidz Al-Qur\'an, pembiasaan ibadah harian, serta penguasaan sains dan teknologi digital modern.\n\nKami mendampingi setiap peserta didik agar berkembang secara utuh lahir dan batin, memiliki kecerdasan intelektual, kemandirian, dan berakhlakul karimah, siap menyongsong masa depan dengan bekal ilmu yang berkah dan bermanfaat bagi umat dan bangsa.\n\nWassalamu’alaikum Warahmatullahi Wabarakatuh.',
    studentStats: {
      totalStudents: 486,
      maleStudents: 254,
      femaleStudents: 232,
      totalRombel: 15,
      rombelClass7: 5,
      rombelClass8: 5,
      rombelClass9: 5,
      totalTeachers: 28,
      certifiedTeachers: 22,
      totalEducationalStaff: 10
    },
    stats: [
      { label: 'Jumlah Siswa', value: '486', sublabel: '254 Putra · 232 Putri' },
      { label: 'Jumlah Rombel', value: '15 Rombel', sublabel: 'Kelas VII, VIII, & IX' },
      { label: 'Jumlah Guru', value: '28 Guru', sublabel: 'Tenaga Pendidik Profesional' },
      { label: 'Tenaga Kependidikan', value: '10 Staf', sublabel: 'Tenaga Kependidikan & TU' }
    ],
    facilities: [
      {
        name: 'Masjid Jami\' Baitul Muttaqin',
        description: 'Pusat pembinaan spiritual, shalat berjamaah 5 waktu, kajian hadits, dan halaqah tahfidz harian.',
        icon: 'mosque'
      },
      {
        name: 'Laboratorium Sains & Robotika',
        description: 'Dilengkapi mikroskop digital, kit eksperimen fisika/biologi, dan mikrokontroler coding untuk siswa.',
        icon: 'science'
      },
      {
        name: 'Perpustakaan Digital & Ruang Baca',
        description: 'Koleksi ribuan buku referensi umum, kitab kuning terjemahan, literatur sains, dan e-book interaktif.',
        icon: 'menu_book'
      },
      {
        name: 'Laboratorium Komputer Multimedia',
        description: '36 unit PC spesifikasi modern dengan jaringan serat optik untuk Asesmen Nasional dan kelas desain grafis.',
        icon: 'computer'
      },
      {
        name: 'Lapangan Olahraga Multifungsi',
        description: 'Sarana futsal, basket, bulutangkis, serta arena latihan bela diri pencak silat dan tapak suci.',
        icon: 'sports_soccer'
      },
      {
        name: 'Kantin Sehat & UKS Terstandar',
        description: 'Penyediaan konsumsi halal dan higienis serta layanan kesehatan pertama dengan perawat siaga.',
        icon: 'health_and_safety'
      }
    ]
  });

  readonly programs = signal<Program[]>([
    {
      id: 'tahfidz',
      title: 'Program Unggulan Tahfidz Al-Qur\'an',
      badge: 'Spiritual & Karakter',
      description:
        'Bimbingan intensif hafalan Al-Qur\'an dengan metode Talaqqi dan Muraja\'ah terstruktur, dibimbing langsung oleh Asatidz bersanad untuk mencapai target minimal 3 hingga 5 Juz.',
      highlights: [
        'Halaqah Al-Qur\'an pagi dan sore',
        'Uji petik tasmi\' juz berkala',
        'Tahsin bersanad metode Utsmani',
        'Wisuda Tahfidz tahunan'
      ],
      icon: 'auto_stories'
    },
    {
      id: 'kurikulum-merdeka',
      title: 'Kurikulum Merdeka & Kelas MIPA Terpadu',
      badge: 'Akademik Unggul',
      description:
        'Pembelajaran berbasis proyek (P5) yang mengasah logika berpikir kritis, pemecahan masalah dunia nyata, serta persiapan kompetisi sains (OSN & OLYMPIC).',
      highlights: [
        'Klinik MIPA & olimpiade terbimbing',
        'Praktikum eksperimen laboratorium aktif',
        'Literasi riset ilmiah remaja',
        'Pendekatan STEM interaktif'
      ],
      icon: 'psychology'
    },
    {
      id: 'bilingual',
      title: 'Bilingual & Islamic English Club',
      badge: 'Wawasan Global',
      description:
        'Pengembangan kecakapan komunikasi bahasa Inggris dan bahasa Arab dalam percakapan tematik harian, pidato tiga bahasa, serta pembiasaan vocabulary harian.',
      highlights: [
        'Muhadhoroh 3 Bahasa (ID, EN, AR)',
        'Native speaker guest sessions',
        'Debat & speech contest preparation',
        'English Morning Assembly'
      ],
      icon: 'translate'
    },
    {
      id: 'it-robotics',
      title: 'Digital Literation & Coding Club',
      badge: 'Teknologi & Masa Depan',
      description:
        'Pengenalan dasar pemrograman, robotika Arduino, pembuatan konten positif, dan etika berteknologi untuk menjawab tantangan era kecerdasan buatan.',
      highlights: [
        'Dasar algoritma & robotik sekolah',
        'Desain grafis Canva & editing video',
        'Literasi keamanan siber bagi remaja',
        'Kompetisi inovasi teknologi pelajar'
      ],
      icon: 'memory'
    }
  ]);

  readonly teachers = signal<Teacher[]>([
    {
      id: 't1',
      name: 'Drs. H. Ahmad Mustofa, M.Pd.I.',
      title: 'Kepala Sekolah & Guru PAI',
      subject: 'Pendidikan Agama Islam & Fiqih',
      category: 'PAI & Tahfidz',
      education: 'S2 Manajemen Pendidikan Islam (UIN Malang)',
      experienceYears: 24,
      bio: 'Berdedikasi lebih dari dua dekade membina generasi muda Madiun dengan pendekatan keteladanan akhlak dan manajemen sekolah modern.',
      quote: 'Adab dan budi pekerti mendahului ilmu pengetahuan.',
      photoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't2',
      name: 'Ustadz Muhammad Rizqi, Lc., M.Ag.',
      title: 'Koordinator Tahfidz Al-Qur\'an',
      subject: 'Tahfidz, Tahsin & Bahasa Arab',
      category: 'PAI & Tahfidz',
      education: 'S1 Universitas Al-Azhar Kairo, S2 UIN Syarif Hidayatullah',
      experienceYears: 12,
      bio: 'Pemegang sanad qira\'ah Al-Qur\'an, membimbing siswa mendalami tartil serta tadabbur ayat-ayat suci dengan kecintaan yang tulus.',
      quote: 'Sebaik-baik kalian adalah yang belajar Al-Qur\'an dan mengajarkannya.',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't3',
      name: 'Nur Aini Rahmawati, S.Si., M.Pd.',
      title: 'Wakasek Kurikulum & Pembina OSN',
      subject: 'Ilmu Pengetahuan Alam (IPA Fisika & Biologi)',
      category: 'MIPA',
      education: 'S2 Pendidikan Sains (Universitas Negeri Surabaya)',
      experienceYears: 14,
      bio: 'Membawa inovasi praktikum laboratorium interaktif sehingga siswa mencintai fenomena alam dan sains aplikatif.',
      quote: 'Sains adalah sarana mengagumi keagungan ciptaan Allah SWT.',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't4',
      name: 'Bambang Triyono, S.Pd., Gr.',
      title: 'Guru Matematika & Logika Analitik',
      subject: 'Matematika SMP',
      category: 'MIPA',
      education: 'S1 Pendidikan Matematika (Universitas Negeri Malang)',
      experienceYears: 11,
      bio: 'Mengajar matematika dengan metode visual dan games interaktif sehingga tidak ada lagi momok sulit dalam berhitung.',
      quote: 'Setiap masalah matematis memiliki pintu solusi jika didekati dengan sabar.',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't5',
      name: 'Siti Maryam, S.Pd., M.Hum.',
      title: 'Koordinator Bilingual & Bahasa Inggris',
      subject: 'Bahasa Inggris & Conversation',
      category: 'Bahasa',
      education: 'S2 Linguistik Terapan (Universitas Sebelas Maret)',
      experienceYears: 9,
      bio: 'Penggiat public speaking yang sukses membawa kontingen siswa menjuarai lomba pidato bahasa Inggris tingkat Karesidenan Madiun.',
      quote: 'Language is the bridge of knowledge and global friendship.',
      photoUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't6',
      name: 'Farida Kusumawardani, S.Pd.',
      title: 'Guru Bahasa Indonesia & Literasi',
      subject: 'Bahasa Indonesia & Menulis Kreatif',
      category: 'Bahasa',
      education: 'S1 Sastra Indonesia (Universitas Airlangga)',
      experienceYears: 8,
      bio: 'Membimbing ekstrakurikuler jurnalistik dan kepenulisan cerpen, menghasilkan antologi puisi karya siswa SMP Al Muttaqin.',
      quote: 'Menulislah agar namamu abadi dalam peradaban yang beradab.',
      photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't7',
      name: 'Hendra Gunawan, S.Kom., M.T.',
      title: 'Guru Informatika & Pembina Robotik',
      subject: 'Informatika & Coding',
      category: 'MIPA',
      education: 'S2 Teknik Informatika (Institut Teknologi Sepuluh Nopember)',
      experienceYears: 10,
      bio: 'Spesialis IoT dan robotika edukasi yang mendampingi tim robotik sekolah dalam kompetisi nasional tingkat pelajar.',
      quote: 'Teknologi adalah alat kebaikan ketika dipandu oleh iman dan nurani.',
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't8',
      name: 'Dewi Anjarsari, S.Pd.',
      title: 'Guru IPS & Sejarah Kebudayaan',
      subject: 'Ilmu Pengetahuan Sosial (IPS)',
      category: 'Sosial & Seni',
      education: 'S1 Pendidikan Sejarah (Universitas Jember)',
      experienceYears: 7,
      bio: 'Membangun kesadaran cinta tanah air dan wawasan kebangsaan melalui pembelajaran sejarah yang interaktif dan humanis.',
      quote: 'Menghargai sejarah adalah pondasi membangun kemajuan bangsa.',
      photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 't9',
      name: 'Rahmat Hidayat, S.Psi., M.A.',
      title: 'Koordinator Bimbingan Konseling (BK)',
      subject: 'Bimbingan Konseling & Karir Siswa',
      category: 'BK & Konseling',
      education: 'S2 Psikologi Pendidikan (Universitas Gadjah Mada)',
      experienceYears: 13,
      bio: 'Sahabat siswa dalam menggali potensi minat bakat, mengatasi kendala belajar, dan menjalin hubungan harmonis keluarga-sekolah.',
      quote: 'Setiap anak memiliki bintang cahayanya sendiri yang siap bersinar.',
      photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    }
  ]);

  readonly galleryItems = signal<GalleryItem[]>([
    {
      id: 'g1',
      title: 'Halaqah Pagi Tahfidz Al-Qur\'an',
      category: 'Tahfidz & Ibadah',
      date: 'Oktober 2026',
      description: 'Suasana khidmat santri membaca dan menyetorkan hafalan di ruang perpustakaan Islami sekolah.',
      imageUrl: '/src/assets/images/activity_tahfidz_quran_1791853846582.jpg'
    },
    {
      id: 'g2',
      title: 'Praktikum Sains & Eksperimen Robotik',
      category: 'Sains & Robotik',
      date: 'September 2026',
      description: 'Siswa-siswi melakukan riset mikroskop dan perakitan sensor gerak di laboratorium modern SMP Al Muttaqin.',
      imageUrl: '/src/assets/images/activity_science_lab_1791853847113.jpg'
    },
    {
      id: 'g3',
      title: 'Pemberian Apresiasi Juara Olimpiade & Kejuaraan',
      category: 'Prestasi & Lomba',
      date: 'Agustus 2026',
      description: 'Penyerahan trofi juara kejuaraan sains dan seni tingkat Jawa Timur di lapangan utama kampus.',
      imageUrl: '/src/assets/images/activity_ceremony_achievement_1791853847278.jpg'
    },
    {
      id: 'g4',
      title: 'Kawasan Kampus Asri & Ramah Lingkungan',
      category: 'Akademik',
      date: 'Juli 2026',
      description: 'Arsitektur gedung sekolah putih berpadu kubah hijau dengan halaman rindang yang sejuk untuk belajar.',
      imageUrl: '/src/assets/images/hero_smp_campus_1791853846114.jpg'
    }
  ]);

  readonly ppdbWaves = signal<PpdbWave[]>([
    {
      id: 'gelombang-1',
      name: 'Gelombang I (Jalur Inden & Prestasi)',
      badgeText: 'Pendaftaran Dibuka',
      period: '01 November 2025 - 31 Januari 2026',
      status: 'active',
      quota: 'Sisa Kuota: 32 Kursi',
      description: 'Jalur prioritas khusus bagi calon siswa dengan prestasi akademik/tahfidz minimal 1 Juz atau ranking kelas 5-6 SD.',
      benefits: [
        'Keringanan Dana Pengembangan Pendidikan hingga 25%',
        'Bebas biaya pendaftaran dan seleksi tes',
        'Jaminan kuota kelas unggulan peminatan',
        'Mendapatkan 1 set seragam batik eksklusif sekolah'
      ]
    },
    {
      id: 'gelombang-2',
      name: 'Gelombang II (Jalur Reguler)',
      badgeText: 'Mendatang',
      period: '01 Februari 2026 - 30 April 2026',
      status: 'upcoming',
      quota: 'Kuota: 64 Kursi',
      description: 'Jalur pendaftaran umum melalui seleksi pemetaan minat, bakat, serta tes kemampuan dasar membaca Al-Qur\'an.',
      benefits: [
        'Dukungan fasilitas belajar modern lengkap',
        'Penempatan kelas berbasis gaya belajar anak',
        'Konsultasi psikologi pemetaan bakat gratis',
        'Program matrikulasi pengenalan sekolah menyenangkan'
      ]
    }
  ]);

  readonly ppdbSteps = signal<PpdbStep[]>([
    {
      step: 1,
      title: 'Pendaftaran & Pengisian Data',
      description: 'Mengisi formulir online melalui website atau datang langsung ke ruang panitia PPDB SMP Al Muttaqin.',
      icon: 'edit_note',
      timeline: 'Langkah Awal'
    },
    {
      step: 2,
      title: 'Verifikasi Berkas Administrasi',
      description: 'Menyerahkan salinan Akta Kelahiran, KK, NISN, serta pas foto terbaru ke sekretariat penerimaan.',
      icon: 'verified_user',
      timeline: '1-2 Hari Kerja'
    },
    {
      step: 3,
      title: 'Observasi Akademik & Uji Tahsin',
      description: 'Penjajakan kemampuan dasar baca Al-Qur\'an, wawancara kepribadian santri, dan wawancara orang tua/wali.',
      icon: 'fact_check',
      timeline: 'Sesuai Jadwal Gelombang'
    },
    {
      step: 4,
      title: 'Pengumuman Kelulusan',
      description: 'Pemberitahuan hasil seleksi resmi melalui portal website dan pesan langsung ke WhatsApp orang tua.',
      icon: 'campaign',
      timeline: '3 Hari Pasca Observasi'
    },
    {
      step: 5,
      title: 'Daftar Ulang & Pengukuran Seragam',
      description: 'Konfirmasi penyelesaian administrasi, pengambilan paket perlengkapan sekolah, dan menyambut MOS/Matsama.',
      icon: 'school',
      timeline: 'Maks. 7 Hari Kerja'
    }
  ]);

  readonly ppdbRequirements = signal<PpdbRequirement[]>([
    {
      category: 'Syarat Dokumen Administrasi',
      items: [
        'Fotokopi Akta Kelahiran calon peserta didik (2 lembar)',
        'Fotokopi Kartu Keluarga (KK) terbaru (2 lembar)',
        'Fotokopi KTP kedua orang tua/wali (2 lembar)',
        'Fotokopi Rapor kelas 5 & 6 SD/MI yang telah dilegalisir',
        'Surat Keterangan Lulus (SKL) / Ijazah SD (bisa menyusul)',
        'Pas foto berwarna ukuran 3x4 (4 lembar) berlatar belakang merah/biru'
      ]
    },
    {
      category: 'Syarat Khusus Jalur Prestasi / Tahfidz',
      items: [
        'Sertifikat kejuaraan lomba akademik/non-akademik minimal tingkat Kabupaten/Kota (jika ada)',
        'Syahadah atau piagam hafalan Al-Qur\'an minimal 1 Juz (khusus jalur Tahfidz)',
        'Surat rekomendasi dari Kepala Sekolah/Madrasah asal (nilai tambah)'
      ]
    }
  ]);

  readonly faqItems = signal<FaqItem[]>([
    {
      id: 'faq-1',
      question: 'Apakah SMP Al Muttaqin memiliki sistem asrama (boarding) atau full day school?',
      answer:
        'SMP Al Muttaqin Kota Madiun menyelenggarakan sistem Full Day School (Senin-Jumat pukul 07.00 - 15.30 WIB) yang terintegrasi dengan shalat berjamaah, makan siang bersama, dan halaqah Al-Qur\'an. Kami juga bekerja sama dengan mitra asrama/pesantren bagi siswa yang berdomisili dari luar kota Madiun.',
      category: 'Sistem Pembelajaran'
    },
    {
      id: 'faq-2',
      question: 'Bagaimana jika calon siswa belum lancar membaca Al-Qur\'an saat mendaftar?',
      answer:
        'Jangan khawatir! Tes Al-Qur\'an saat seleksi bersifat observasi pemetaan (placement test), bukan untuk menggugurkan. Sekolah menyediakan program bimbingan intensif "Matrikulasi Tahsin Utsmani" bagi siswa baru agar dapat mengejar bacaan tartil dengan cepat dan percaya diri.',
      category: 'Keagamaan'
    },
    {
      id: 'faq-3',
      question: 'Berapa perkiraan rincian biaya pendaftaran dan Dana Pengembangan?',
      answer:
        'Rincian biaya pendidikan dirancang transparan dan berkeadilan, mencakup biaya formulir, seragam lengkap 5 stel, modul belajar, dan SPP bulanan. Skema beasiswa prestasi dan keringanan gelombang 1 tersedia bagi calon wali murid. Rincian tabel resmi dapat diunduh pada Brosur PPDB kami.',
      category: 'Biaya Pendidikan'
    },
    {
      id: 'faq-4',
      question: 'Apa saja kegiatan ekstrakurikuler yang dapat diikuti siswa?',
      answer:
        'Terdapat ragam ekstrakurikuler wajib dan pilihan, antara lain: Pramuka, Tapak Suci, Futsal, Basket, English Speech & Story Telling Club, Jurnalistik & Mading Kreatif, Robotika & Coding, PMR, dan Kaligrafi Islam.',
      category: 'Ekstrakurikuler'
    },
    {
      id: 'faq-5',
      question: 'Bagaimana cara berkonsultasi langsung dengan Panitia PPDB?',
      answer:
        'Orang tua dapat langsung menghubungi narahubung panitia melalui WhatsApp resmi di 0812-3456-7890 atau berkunjung langsung ke Sekretariat PPDB di Ruang Informasi Lantai 1 setiap hari kerja pukul 07.30 - 14.30 WIB.',
      category: 'Layanan PPDB'
    }
  ]);

  // UI state signals
  readonly activeTeacherFilter = signal<string>('Semua');
  readonly teacherSearchQuery = signal<string>('');
  readonly activeGalleryFilter = signal<string>('Semua');
  readonly selectedGalleryImage = signal<GalleryItem | null>(null);
  readonly isBrochureModalOpen = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);

  // Filtered teachers computed signal
  readonly filteredTeachers = computed(() => {
    const filter = this.activeTeacherFilter();
    const query = this.teacherSearchQuery().toLowerCase().trim();
    let list = this.teachers();

    if (filter !== 'Semua') {
      list = list.filter((t) => t.category === filter);
    }

    if (query) {
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(query) ||
          t.subject.toLowerCase().includes(query) ||
          t.education.toLowerCase().includes(query)
      );
    }

    return list;
  });

  // Filtered gallery computed signal
  readonly filteredGallery = computed(() => {
    const filter = this.activeGalleryFilter();
    const list = this.galleryItems();
    if (filter === 'Semua') return list;
    return list.filter((item) => item.category === filter);
  });

  setTeacherFilter(category: string) {
    this.activeTeacherFilter.set(category);
  }

  setTeacherSearch(query: string) {
    this.teacherSearchQuery.set(query);
  }

  setGalleryFilter(category: string) {
    this.activeGalleryFilter.set(category);
  }

  openGalleryLightbox(item: GalleryItem) {
    this.selectedGalleryImage.set(item);
  }

  closeGalleryLightbox() {
    this.selectedGalleryImage.set(null);
  }

  openBrochureModal() {
    this.isBrochureModalOpen.set(true);
  }

  closeBrochureModal() {
    this.isBrochureModalOpen.set(false);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((v) => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  // Pre-configured WhatsApp click handler
  openWhatsAppConsultation(customSubject?: string) {
    const phone = this.profile().whatsapp;
    const greeting = 'Assalamu\'alaikum Warahmatullahi Wabarakatuh Bapak/Ibu Panitia PPDB SMP Al Muttaqin Kota Madiun.';
    const topic = customSubject
      ? `Saya ingin berkonsultasi mengenai: ${customSubject}.`
      : 'Saya ingin bertanya mengenai informasi Penerimaan Peserta Didik Baru (PPDB) T.A. 2026/2027.';
    const text = encodeURIComponent(`${greeting}\n\n${topic}\nMohon informasi petunjuk lebih lanjut. Terima kasih.`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  downloadBrochure() {
    // Generate a downloadable structured text brochure file for offline reading
    const profile = this.profile();
    const brochureContent = `
==============================================================
        BROSUR RESMI INFORMASI PPDB 2026/2027
            ${profile.name}
==============================================================

Akreditasi: ${profile.accreditation}
NPSN: ${profile.npsn}
Alamat: ${profile.address}
Telepon: ${profile.phone} | WA: ${profile.whatsappFormatted}
Email: ${profile.email}

--------------------------------------------------------------
PROGRAM UNGGULAN SMP AL MUTTAQIN KOTA MADIUN:
--------------------------------------------------------------
1. Program Tahfidz Al-Qur'an (Target 3-5 Juz bersanad)
2. Kurikulum Merdeka & Kelas MIPA Terpadu (Klinik Olimpiade)
3. Bilingual & Islamic English Club (Percakapan 3 Bahasa)
4. Digital Literation & Coding Club (Robotik & Informatika)

--------------------------------------------------------------
JADWAL GELOMBANG PENDAFTARAN T.A. 2026/2027:
--------------------------------------------------------------
- Gelombang I (Jalur Inden & Prestasi):
  Periode: 01 November 2025 s.d. 31 Januari 2026
  Keuntungan: Potongan Dana Pengembangan hingga 25% & Bebas Biaya Tes.

- Gelombang II (Jalur Reguler):
  Periode: 01 Februari 2026 s.d. 30 April 2026

--------------------------------------------------------------
SYARAT PENDAFTARAN DOKUMEN:
--------------------------------------------------------------
1. Fotokopi Akta Kelahiran (2 lbr)
2. Fotokopi Kartu Keluarga terbaru (2 lbr)
3. Fotokopi KTP Orang Tua/Wali (2 lbr)
4. Fotokopi Rapor Kelas 5-6 SD/MI dilegalisir
5. Pas foto berwarna 3x4 (4 lbr)
6. Sertifikat prestasi / piagam hafalan Quran (jika ada)

--------------------------------------------------------------
LAYANAN INFORMASI & KONSULTASI:
--------------------------------------------------------------
Sekretariat PPDB: Gedung Utama Lt. 1 SMP Al Muttaqin Madiun
Jam Pelayanan: Senin - Jumat (07.30 - 15.00 WIB)
WhatsApp Center: ${profile.whatsappFormatted}
Website Resmi: https://ais-dev-vqk6em3gm6ou3qj57xm5ec-253474951008.asia-east1.run.app

==============================================================
Membentuk Generasi Berakhlak Mulia, Cerdas, dan Berprestasi
==============================================================
    `.trim();

    const blob = new Blob([brochureContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Brosur-PPDB-SMP-Al-Muttaqin-Madiun-2026-2027.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // ==========================================
  // ADMIN CMS & CONTENT MANAGEMENT METHODS
  // ==========================================

  readonly inquiries = signal<PpdbInquiry[]>([
    {
      id: 'inq-1',
      studentName: 'Ahmad Faiz Al-Ghifari',
      parentName: 'Bambang Sulistyo',
      phone: '081234567891',
      schoolOrigin: 'SD Islam Al-Hikmah Madiun',
      programInterest: 'Tahfidz Intensif (Target 3-5 Juz)',
      notes: 'Hafal Juz 30 dan ingin memperdalam tartil quran',
      createdAt: '12 Okt 2026, 14:20 WIB',
      status: 'Baru'
    },
    {
      id: 'inq-2',
      studentName: 'Zaskia Putri Kirana',
      parentName: 'Hj. Siti Rahmawati',
      phone: '085712345678',
      schoolOrigin: 'SDN 02 Mojorejo Madiun',
      programInterest: 'Kelas Sains & Olimpiade MIPA',
      notes: 'Pernah juara 2 OSN IPA tingkat Kota Madiun',
      createdAt: '11 Okt 2026, 09:15 WIB',
      status: 'Dihubungi'
    }
  ]);

  updateProfile(updated: Partial<SchoolProfile>) {
    this.profile.update((prev) => ({
      ...prev,
      ...updated
    }));
    this.saveItem('smp_profile', this.profile());
  }

  addTeacher(teacher: Omit<Teacher, 'id'>) {
    const newId = 't_' + Date.now();
    const newTeacher: Teacher = {
      ...teacher,
      id: newId
    };
    this.teachers.update((list) => [newTeacher, ...list]);
    this.saveItem('smp_teachers', this.teachers());
  }

  updateTeacher(updatedTeacher: Teacher) {
    this.teachers.update((list) =>
      list.map((t) => (t.id === updatedTeacher.id ? updatedTeacher : t))
    );
    this.saveItem('smp_teachers', this.teachers());
  }

  deleteTeacher(id: string) {
    this.teachers.update((list) => list.filter((t) => t.id !== id));
    this.saveItem('smp_teachers', this.teachers());
  }

  addGalleryItem(item: Omit<GalleryItem, 'id'>) {
    const newId = 'g_' + Date.now();
    const newItem: GalleryItem = {
      ...item,
      id: newId
    };
    this.galleryItems.update((list) => [newItem, ...list]);
    this.saveItem('smp_gallery', this.galleryItems());
  }

  deleteGalleryItem(id: string) {
    this.galleryItems.update((list) => list.filter((g) => g.id !== id));
    this.saveItem('smp_gallery', this.galleryItems());
  }

  updateWave(updatedWave: PpdbWave) {
    this.ppdbWaves.update((waves) =>
      waves.map((w) => (w.id === updatedWave.id ? updatedWave : w))
    );
    this.saveItem('smp_waves', this.ppdbWaves());
  }

  addInquiry(inquiryData: Omit<PpdbInquiry, 'id' | 'createdAt' | 'status'>) {
    const newInquiry: PpdbInquiry = {
      ...inquiryData,
      id: 'inq_' + Date.now(),
      createdAt: new Date().toLocaleString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }) + ' WIB',
      status: 'Baru'
    };
    this.inquiries.update((list) => [newInquiry, ...list]);
    this.saveItem('smp_inquiries', this.inquiries());
  }

  updateInquiryStatus(id: string, newStatus: PpdbInquiry['status']) {
    this.inquiries.update((list) =>
      list.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    this.saveItem('smp_inquiries', this.inquiries());
  }

  deleteInquiry(id: string) {
    this.inquiries.update((list) => list.filter((item) => item.id !== id));
    this.saveItem('smp_inquiries', this.inquiries());
  }

  addProgram(program: Omit<Program, 'id'>) {
    const newId = 'prog_' + Date.now();
    const newProgram: Program = {
      ...program,
      id: newId
    };
    this.programs.update((list) => [...list, newProgram]);
    this.saveItem('smp_programs', this.programs());
  }

  updateProgram(updatedProgram: Program) {
    this.programs.update((list) =>
      list.map((p) => (p.id === updatedProgram.id ? updatedProgram : p))
    );
    this.saveItem('smp_programs', this.programs());
  }

  deleteProgram(id: string) {
    this.programs.update((list) => list.filter((p) => p.id !== id));
    this.saveItem('smp_programs', this.programs());
  }

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadStoredData();
      this.fetchServerData();
      this.setupStorageListener();
    }
  }

  private setupStorageListener() {
    if (!isPlatformBrowser(this.platformId)) return;
    window.addEventListener('storage', (event) => {
      if (event.key && event.key.startsWith('smp_')) {
        this.loadStoredData();
      }
    });
    window.addEventListener('school-data-updated', () => {
      this.loadStoredData();
    });
  }

  fetchServerData() {
    if (!isPlatformBrowser(this.platformId)) return;
    fetch('/api/school-data')
      .then((res) => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then((data) => {
        if (data) {
          if (data.profile) {
            this.profile.update((def) => ({
              ...def,
              ...data.profile,
              studentStats: {
                ...def.studentStats!,
                ...(data.profile.studentStats || {})
              }
            }));
            this.saveToLocal('smp_profile', this.profile());
          }
          if (Array.isArray(data.teachers) && data.teachers.length > 0) {
            this.teachers.set(data.teachers);
            this.saveToLocal('smp_teachers', data.teachers);
          }
          if (Array.isArray(data.galleryItems) && data.galleryItems.length > 0) {
            this.galleryItems.set(data.galleryItems);
            this.saveToLocal('smp_gallery', data.galleryItems);
          }
          if (Array.isArray(data.programs) && data.programs.length > 0) {
            this.programs.set(data.programs);
            this.saveToLocal('smp_programs', data.programs);
          }
          if (Array.isArray(data.ppdbWaves) && data.ppdbWaves.length > 0) {
            this.ppdbWaves.set(data.ppdbWaves);
            this.saveToLocal('smp_waves', data.ppdbWaves);
          }
        }
      })
      .catch((err) => {
        // Fallback to local storage
        console.warn('Could not fetch server school data, using local storage cache:', err);
      });
  }

  private loadStoredData() {
    try {
      const p = localStorage.getItem('smp_profile');
      if (p) {
        const parsed = JSON.parse(p);
        this.profile.update((def) => ({
          ...def,
          ...parsed,
          studentStats: {
            ...def.studentStats!,
            ...(parsed.studentStats || {})
          }
        }));
      }
      const t = localStorage.getItem('smp_teachers');
      if (t) this.teachers.set(JSON.parse(t));
      const g = localStorage.getItem('smp_gallery');
      if (g) this.galleryItems.set(JSON.parse(g));
      const w = localStorage.getItem('smp_waves');
      if (w) this.ppdbWaves.set(JSON.parse(w));
      const inq = localStorage.getItem('smp_inquiries');
      if (inq) this.inquiries.set(JSON.parse(inq));
      const prog = localStorage.getItem('smp_programs');
      if (prog) this.programs.set(JSON.parse(prog));
    } catch {
      // storage error fallback
    }
  }

  private saveToLocal(key: string, data: unknown) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch {
        // quota fallback
      }
    }
  }

  private saveItem(key: string, data: unknown) {
    this.saveToLocal(key, data);
    this.syncToServer(key, data);
  }

  private syncToServer(key: string, data: unknown) {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Broadcast custom event for other components on page
    window.dispatchEvent(new CustomEvent('school-data-updated'));

    let payload: Record<string, unknown> = {};
    if (key === 'smp_profile') payload = { profile: data };
    else if (key === 'smp_teachers') payload = { teachers: data };
    else if (key === 'smp_gallery') payload = { galleryItems: data };
    else if (key === 'smp_programs') payload = { programs: data };
    else if (key === 'smp_waves') payload = { ppdbWaves: data };
    else if (key === 'smp_inquiries') payload = { inquiries: data };
    else payload = { [key]: data };

    fetch('/api/school-data', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch((err) => {
      console.warn('Failed to sync school data to server:', err);
    });
  }
}
