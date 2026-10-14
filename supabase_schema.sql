-- Skema SQL untuk Data Beranda/Profil Sekolah SMP Al Muttaqin
-- Didesain untuk Supabase (PostgreSQL)

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
    misi TEXT[],
    nama_kepala_sekolah TEXT,
    jabatan_kepala_sekolah TEXT,
    url_foto_kepala_sekolah TEXT,
    sambutan_kepala_sekolah TEXT,
    dibuat_pada TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    diperbarui_pada TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed awal untuk data profil
INSERT INTO profil_sekolah (
    nama, semboyan, motto, akreditasi, npsn, kota, alamat, telepon, whatsapp, 
    whatsapp_terformat, email, jam_operasional, deskripsi_singkat, visi, misi, 
    nama_kepala_sekolah, jabatan_kepala_sekolah, sambutan_kepala_sekolah
) VALUES (
    'SMP AL MUTTAQIN KOTA MADIUN',
    'Membentuk Generasi Berakhlak Mulia, Cerdas, dan Berprestasi',
    'Religius, Berintegritas, Unggul dalam IPTEK & IMTAQ',
    'Akreditasi A (Unggul)',
    '20534219',
    'Kota Madiun',
    'Jl. Mastrip No. 45, Mojorejo, Kec. Taman, Kota Madiun, Jawa Timur 63139',
    '(0351) 462890',
    '6281234567890',
    '+62 812-3456-7890',
    'databasealmuttaqin@gmail.com',
    'Senin - Jumat: 07.00 - 15.30 WIB | Sabtu: 07.30 - 12.00 WIB',
    'SMP Al Muttaqin Kota Madiun merupakan lembaga pendidikan menengah pertama Islam terpadu unggulan di Kota Madiun yang mengintegrasikan Kurikulum Merdeka Nasional dengan penguatan adab Islami, tahfidz Al-Qur''an, dan keunggulan sains-teknologi.',
    'Mewujudkan Generasi Qur''ani yang Cerdas, Mandiri, Berakhlak Mulia, dan Unggul dalam IPTEK serta Berwawasan Lingkungan',
    ARRAY[
        'Menyelenggarakan pembelajaran terpadu Kurikulum Merdeka dengan penguatan tahfidz Al-Qur''an dan akhlakul karimah.',
        'Mengembangkan potensi sains, teknologi digital, dan riset ilmiah peserta didik secara optimal.',
        'Membina kemandirian, kepemimpinan, dan kecakapan hidup (life skills) santri melalui program ekstrakurikuler komprehensif.',
        'Menciptakan lingkungan kampus sekolah yang asri, religius, ramah anak, dan berwawasan lingkungan hidup.'
    ],
    'Drs. H. Ahmad Mustofa, M.Pd.I.',
    'Kepala Sekolah SMP Al Muttaqin Kota Madiun',
    'Selamat datang di portal resmi SMP Al Muttaqin Kota Madiun. Puji syukur ke hadirat Allah SWT yang senantiasa melimpahkan hidayah dan taufik-Nya bagi kita semua...'
) ON CONFLICT DO NOTHING;
