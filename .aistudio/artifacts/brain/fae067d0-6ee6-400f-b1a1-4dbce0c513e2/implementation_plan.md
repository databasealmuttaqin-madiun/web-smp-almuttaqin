# Rencana Pembangunan Website Landing Page SMP AL MUTTAQIN KOTA MADIUN

Website landing page resmi dan representatif untuk **SMP AL MUTTAQIN KOTA MADIUN** yang menyajikan profil sekolah komprehensif, direktori tenaga pendidik interaktif, galeri kegiatan sekolah dengan lightbox, serta portal informasi PPDB (Penerimaan Peserta Didik Baru) T.A. 2026/2027 terlengkap dengan jadwal gelombang, persyaratan, unduh brosur PDF, dan kontak panitia langsung.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> Keputusan dan spesifikasi yang telah dikonfirmasi bersama:
> - **Nama & Identitas Sekolah**: SMP AL MUTTAQIN KOTA MADIUN
> - **Jenjang & Fokus Pendidikan**: Pendidikan Sekolah Menengah Pertama (SMP) dengan integrasi Kurikulum Merdeka, Tahfidz Al-Qur'an, dan pembinaan karakter Islami.
> - **Fitur Utama Portal PPDB**: Informasi persyaratan berkas & tes, jadwal gelombang pendaftaran, preview dan unduh brosur informasi (PDF/digital brochure), serta jalur cepat konsultasi ke panitia via WhatsApp resmi.

---

## 1. Overview & Core Concept

- **Apa yang Dibangun**: Platform landing page responsif, elegan, berkecepatan tinggi, dan informatif untuk calon wali murid, siswa, serta masyarakat umum di Kota Madiun dan sekitarnya.
- **Audiens Target**: Calon orang tua/wali murid baru kelas 7, alumni, siswa aktif, dan masyarakat pendidikan.
- **Nilai Utama**: Citra sekolah yang islami, modern, berprestasi, dan transparan; mempermudah orang tua mendapatkan informasi resmi PPDB dan menghubungi panitia penerimaan santri/siswa baru tanpa kendala.

---

## 2. User Experience & Visual Design

### Visual Identity & Theme
- **Aesthetic Direction**: *Institutional Prestige meets Islamic Modernism* — bersih, terpercaya, teduh, dengan sentuhan warna hijau zamrud islami (*emerald green* `#064E3B`, `#047857`), aksen hangat emas/marigold (`#D97706`, `#B45309`), latar belakang netral terang sejuk (`#F8FAFC` dan `#FFFFFF`), serta tipografi berbobot tinggi.
- **Tipografi**:
  - *Display / Headings*: Plus Jakarta Sans & Outfit (tegas, modern, mudah dibaca di layar retina)
  - *Body Prose*: DM Sans & Public Sans (kontras tinggi, nyaman untuk membaca teks panjang)
  - *Data & Tanggal PPDB*: Tabular numbers (`tabular-nums font-mono`)
- **Top Bar Contract**:
  - Zone 1: Wordmark "SMP AL MUTTAQIN"
  - Zone 2: Tautan navigasi (`Profil`, `Program`, `Guru & Staf`, `Galeri`, `PPDB 2026/2027`)
  - Zone 3: Tombol aksi utama `"Info PPDB 2026/2027"`

### Alur Halaman (Page Structure)
```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header (Navbar 3-Zona Bersih & Sticky)                   │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero Section: Foto Kampus, Slogan Unggulan & CTA PPDB    │
├─────────────────────────────────────────────────────────────┤
│ 3. Profil Singkat & Visi Misi & Sambutan Kepala Sekolah    │
├─────────────────────────────────────────────────────────────┤
│ 4. Program Unggulan (Tahfidz, Bilingual, Sains & IT)        │
├─────────────────────────────────────────────────────────────┤
│ 5. Direktori Tenaga Pendidik (Filter Mapel & Pencarian)    │
├─────────────────────────────────────────────────────────────┤
│ 6. Galeri Kegiatan & Prestasi Siswa (Filter & Lightbox)     │
├─────────────────────────────────────────────────────────────┤
│ 7. Portal Informasi PPDB 2026/2027:                         │
│    - Status Gelombang & Timeline Jadwal                     │
│    - Persyaratan Dokumen & Alur Pendaftaran                 │
│    - Modal Preview Brosur PDF & Tombol Download Langsung    │
│    - Tanya Panitia via WhatsApp Resmi & Call Center         │
│    - FAQ PPDB Interaktif (Accordion)                        │
├─────────────────────────────────────────────────────────────┤
│ 8. Footer Komprehensif (Alamat Madiun, Kontak, Medsos)      │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detail Fitur & Interaktivitas

### A. Direktori Guru & Tenaga Pendidik
- Filter kategori mata pelajaran: *Semua*, *PAI & Tahfidz*, *MIPA (Matematika & IPA)*, *Bahasa*, *Sosial & Seni*, *Bimbingan Konseling (BK)*.
- Kotak pencarian realtime berdasarkan nama atau mata pelajaran yang diampu.
- Kartu profil guru yang memuat foto formal, gelar akademik, mata pelajaran, serta kutipan inspiratif.

### B. Galeri Kegiatan Sekolah
- Kategori foto: *Akademik & Sains*, *Keagamaan & Tahfidz*, *Ekstrakurikuler*, *Lomba & Prestasi*.
- Modal Lightbox: Klik gambar untuk melihat ukuran penuh beserta deskripsi momen kegiatan dan tanggal pelaksanaan.

### C. Portal Informasi PPDB 2026/2027
- **Jadwal Gelombang**: Gelombang 1 (Jalur Prestasi & Tahfidz) & Gelombang 2 (Jalur Reguler) dengan indikator status aktif.
- **Tahapan & Alur**: Diagram alur 5 langkah dari pendaftaran daring/luring, penyerahan berkas, tes pemetaan, pengumuman, hingga daftar ulang.
- **Brosur PPDB**: Fitur interaktif untuk membaca brosur digital resmi sekolah langsung di website (modal preview interaktif) serta opsi unduh berkas brosur.
- **Kontak Panitia**: Tombol integrasi WhatsApp yang langsung menyertakan format teks salam pembuka dan pertanyaan PPDB siap kirim ke panitia resmi.
- **FAQ Accordion**: Rangkuman jawaban seputar seragam, biaya pendidikan, asrama/full-day, serta jadwal jam belajar.

---

## 4. Technical Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                           Angular 21                             │
│                                                                  │
│  ┌─────────────────────────┐        ┌─────────────────────────┐  │
│  │     Data State Store    │        │      UI Components      │  │
│  │ - school-data.service   │───────>│ - Header                │  │
│  │   (Profile, Teachers,   │        │ - HeroSection           │  │
│  │    Gallery, PPDB Info,  │        │ - ProfileSection        │  │
│  │    FaqItems, Waves)     │        │ - ProgramsSection       │  │
│  └─────────────────────────┘        │ - TeachersDirectory     │  │
│                                     │ - GalleryLightbox       │  │
│                                     │ - PpdbPortalSection     │  │
│                                     │ - BrochureModal         │  │
│                                     │ - Footer                │  │
│                                     └─────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘
```

- **Aset Gambar**: Menggunakan `generate_image` untuk menghasilkan aset visual asli sekolah (gedung sekolah islami modern, kegiatan belajar santri/siswa SMP, guru mengajar, kegiatan sains & tahfidz) sehingga tampilan autentik dan bebas broken image.
- **Animasi & Transisi**: Menggunakan Tailwind CSS micro-transitions yang halus ($\le 200\text{ms}$) tanpa mengganggu performa.
- **Aksesibilitas**: Kontras teks memenuhi standar WCAG AA, navigasi keyboard yang bersahabat, dan tata letak responsif untuk perangkat mobile maupun desktop.
