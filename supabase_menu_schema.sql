-- Skema SQL untuk Struktur Menu Website SMP Al Muttaqin
-- Didesain untuk Supabase (PostgreSQL)

-- 1. MENU: PROFIL (Sudah ada, tapi ini pengembangannya)
CREATE TABLE IF NOT EXISTS profil_sekolah (
    id SERIAL PRIMARY KEY,
    nama TEXT NOT NULL,
    semboyan TEXT,
    motto TEXT,
    akreditasi TEXT,
    npsn TEXT,
    kota TEXT,
    alamat TEXT,
    telepon TEXT,
    whatsapp TEXT,
    whatsapp_terformat TEXT,
    email TEXT,
    jam_operasional TEXT,
    url_foto_sekolah TEXT,
    deskripsi_singkat TEXT,
    visi TEXT,
    misi TEXT,
    nama_kepala_sekolah TEXT,
    jabatan_kepala_sekolah TEXT,
    url_foto_kepala_sekolah TEXT,
    sambutan_kepala_sekolah TEXT
);

-- 2. MENU: FASILITAS
CREATE TABLE IF NOT EXISTS fasilitas (
    id SERIAL PRIMARY KEY,
    nama_fasilitas TEXT NOT NULL,
    deskripsi TEXT,
    url_foto TEXT,
    dibuat_pada TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. MENU: TENAGA PENDIDIK & KEPENDIDIKAN
CREATE TABLE IF NOT EXISTS tenaga_pendidik (
    id SERIAL PRIMARY KEY,
    nama_lengkap TEXT NOT NULL,
    jabatan TEXT NOT NULL,
    bidang_studi TEXT,
    url_foto TEXT,
    urutan INTEGER DEFAULT 0
);

-- 4. MENU: EKSTRAKURIKULER
CREATE TABLE IF NOT EXISTS ekstrakurikuler (
    id SERIAL PRIMARY KEY,
    nama_ekskul TEXT NOT NULL,
    deskripsi TEXT,
    pembina TEXT,
    url_foto TEXT,
    dibuat_pada TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. MENU: BERITA & ARTIKEL
CREATE TABLE IF NOT EXISTS berita (
    id SERIAL PRIMARY KEY,
    judul TEXT NOT NULL,
    konten TEXT NOT NULL,
    penulis TEXT,
    url_foto_utama TEXT,
    dibuat_pada TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
