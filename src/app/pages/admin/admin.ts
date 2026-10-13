import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { SchoolDataService } from '../../services/school-data.service';
import { Teacher, GalleryItem, PpdbWave, PpdbInquiry, Program } from '../../models/school.model';

@Component({
  selector: 'app-admin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ReactiveFormsModule, MatIconModule],
  templateUrl: './admin.html'
})
export class Admin {
  readonly authService = inject(AuthService);
  readonly schoolService = inject(SchoolDataService);

  readonly profile = this.schoolService.profile;
  readonly teachers = this.schoolService.teachers;
  readonly galleryItems = this.schoolService.galleryItems;
  readonly ppdbWaves = this.schoolService.ppdbWaves;
  readonly inquiries = this.schoolService.inquiries;
  readonly programs = this.schoolService.programs;

  readonly activeTab = signal<'beranda' | 'sambutan' | 'profile' | 'teachers' | 'gallery'>('beranda');
  readonly successToast = signal<string | null>(null);

  // Search & Filters for Inquiries
  readonly inquirySearchQuery = signal<string>('');
  readonly inquiryStatusFilter = signal<string>('ALL');

  readonly filteredInquiries = computed(() => {
    const list = this.inquiries();
    const query = this.inquirySearchQuery().toLowerCase().trim();
    const status = this.inquiryStatusFilter();

    return list.filter((item) => {
      const matchQuery =
        !query ||
        item.studentName.toLowerCase().includes(query) ||
        item.parentName.toLowerCase().includes(query) ||
        item.phone.includes(query) ||
        item.schoolOrigin.toLowerCase().includes(query);
      const matchStatus = status === 'ALL' || item.status === status;
      return matchQuery && matchStatus;
    });
  });

  // Search & Filters for Teachers
  readonly teacherSearchQuery = signal<string>('');
  readonly teacherCategoryFilter = signal<string>('ALL');

  readonly filteredTeachers = computed(() => {
    const list = this.teachers();
    const query = this.teacherSearchQuery().toLowerCase().trim();
    const cat = this.teacherCategoryFilter();

    return list.filter((item) => {
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.subject.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query);
      const matchCat = cat === 'ALL' || item.category === cat;
      return matchQuery && matchCat;
    });
  });

  // Teacher modal / form state
  readonly isTeacherModalOpen = signal<boolean>(false);
  readonly editingTeacherId = signal<string | null>(null);
  readonly teacherForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    category: new FormControl<'PAI & Tahfidz' | 'MIPA' | 'Bahasa' | 'Sosial & Seni' | 'BK & Konseling'>('PAI & Tahfidz', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    experienceYears: new FormControl(5, [Validators.required, Validators.min(0)]),
    bio: new FormControl('', [Validators.required]),
    quote: new FormControl('', [Validators.required]),
    photoUrl: new FormControl('')
  });

  // Gallery modal / form state
  readonly isGalleryModalOpen = signal<boolean>(false);
  readonly galleryForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    category: new FormControl<'Akademik' | 'Tahfidz & Ibadah' | 'Sains & Robotik' | 'Prestasi & Lomba' | 'Ekstrakurikuler'>('Tahfidz & Ibadah', [Validators.required]),
    date: new FormControl('Oktober 2026', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('')
  });

  // Program modal / form state
  readonly isProgramModalOpen = signal<boolean>(false);
  readonly editingProgramId = signal<string | null>(null);
  readonly programForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    badge: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    highlightsText: new FormControl('', [Validators.required]),
    icon: new FormControl('auto_stories', [Validators.required])
  });

  // Beranda form (Foto Sekolahan, Profil Singkat & 4 Metrik Data Siswa / Rombel / Guru)
  readonly berandaForm = new FormGroup({
    schoolPhotoUrl: new FormControl(this.profile().schoolPhotoUrl || '/images/hero_smp_campus_1791853846114.jpg', [Validators.required]),
    shortDescription: new FormControl(this.profile().shortDescription || '', [Validators.required]),
    tagline: new FormControl(this.profile().tagline, [Validators.required]),
    motto: new FormControl(this.profile().motto, [Validators.required]),
    totalStudents: new FormControl(this.profile().studentStats?.totalStudents ?? 486, [Validators.required, Validators.min(1)]),
    maleStudents: new FormControl(this.profile().studentStats?.maleStudents ?? 254, [Validators.required, Validators.min(0)]),
    femaleStudents: new FormControl(this.profile().studentStats?.femaleStudents ?? 232, [Validators.required, Validators.min(0)]),
    totalRombel: new FormControl(this.profile().studentStats?.totalRombel ?? 15, [Validators.required, Validators.min(1)]),
    rombelClass7: new FormControl(this.profile().studentStats?.rombelClass7 ?? 5, [Validators.required, Validators.min(0)]),
    rombelClass8: new FormControl(this.profile().studentStats?.rombelClass8 ?? 5, [Validators.required, Validators.min(0)]),
    rombelClass9: new FormControl(this.profile().studentStats?.rombelClass9 ?? 5, [Validators.required, Validators.min(0)]),
    totalTeachers: new FormControl(this.profile().studentStats?.totalTeachers ?? 28, [Validators.required, Validators.min(1)]),
    certifiedTeachers: new FormControl(this.profile().studentStats?.certifiedTeachers ?? 22, [Validators.required, Validators.min(0)]),
    totalEducationalStaff: new FormControl(this.profile().studentStats?.totalEducationalStaff ?? 10, [Validators.required, Validators.min(0)])
  });

  // Sambutan form (Sambutan Resmi Kepala Sekolah yang tampil di Menu Profil Sekolah)
  readonly sambutanForm = new FormGroup({
    principalName: new FormControl(this.profile().principalName, [Validators.required]),
    principalTitle: new FormControl(this.profile().principalTitle, [Validators.required]),
    principalPhotoUrl: new FormControl(this.profile().principalPhotoUrl || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80'),
    principalWelcome: new FormControl(this.profile().principalWelcome, [Validators.required])
  });

  // Profile form state (Identitas Sekolah & Kontak)
  readonly profileForm = new FormGroup({
    name: new FormControl(this.profile().name, [Validators.required]),
    motto: new FormControl(this.profile().motto, [Validators.required]),
    accreditation: new FormControl(this.profile().accreditation, [Validators.required]),
    npsn: new FormControl(this.profile().npsn, [Validators.required]),
    phone: new FormControl(this.profile().phone, [Validators.required]),
    whatsappFormatted: new FormControl(this.profile().whatsappFormatted, [Validators.required]),
    email: new FormControl(this.profile().email, [Validators.required, Validators.email]),
    address: new FormControl(this.profile().address, [Validators.required]),
    operatingHours: new FormControl(this.profile().operatingHours, [Validators.required])
  });

  constructor() {
    this.populateForms();
  }

  populateForms() {
    const p = this.profile();
    this.berandaForm.patchValue({
      schoolPhotoUrl: p.schoolPhotoUrl || '/images/hero_smp_campus_1791853846114.jpg',
      shortDescription: p.shortDescription || '',
      tagline: p.tagline,
      motto: p.motto,
      totalStudents: p.studentStats?.totalStudents ?? 486,
      maleStudents: p.studentStats?.maleStudents ?? 254,
      femaleStudents: p.studentStats?.femaleStudents ?? 232,
      totalRombel: p.studentStats?.totalRombel ?? 15,
      rombelClass7: p.studentStats?.rombelClass7 ?? 5,
      rombelClass8: p.studentStats?.rombelClass8 ?? 5,
      rombelClass9: p.studentStats?.rombelClass9 ?? 5,
      totalTeachers: p.studentStats?.totalTeachers ?? 28,
      certifiedTeachers: p.studentStats?.certifiedTeachers ?? 22,
      totalEducationalStaff: p.studentStats?.totalEducationalStaff ?? 10
    });

    this.sambutanForm.patchValue({
      principalName: p.principalName,
      principalTitle: p.principalTitle,
      principalPhotoUrl: p.principalPhotoUrl || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      principalWelcome: p.principalWelcome
    });

    this.profileForm.patchValue({
      name: p.name,
      motto: p.motto,
      accreditation: p.accreditation,
      npsn: p.npsn,
      phone: p.phone,
      whatsappFormatted: p.whatsappFormatted,
      email: p.email,
      address: p.address,
      operatingHours: p.operatingHours
    });
  }

  setTab(tab: 'beranda' | 'sambutan' | 'profile' | 'teachers' | 'gallery') {
    this.activeTab.set(tab);
  }

  showToast(message: string) {
    this.successToast.set(message);
    setTimeout(() => {
      this.successToast.set(null);
    }, 3000);
  }

  // Teacher handlers
  openAddTeacherModal() {
    this.editingTeacherId.set(null);
    this.teacherForm.reset({
      name: '',
      title: 'Guru Bidang Studi',
      subject: '',
      category: 'PAI & Tahfidz',
      education: 'S1 Pendidikan',
      experienceYears: 5,
      bio: '',
      quote: '',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    });
    this.isTeacherModalOpen.set(true);
  }

  openEditTeacherModal(teacher: Teacher) {
    this.editingTeacherId.set(teacher.id);
    this.teacherForm.patchValue({
      name: teacher.name,
      title: teacher.title,
      subject: teacher.subject,
      category: teacher.category,
      education: teacher.education,
      experienceYears: teacher.experienceYears,
      bio: teacher.bio,
      quote: teacher.quote,
      photoUrl: teacher.photoUrl
    });
    this.isTeacherModalOpen.set(true);
  }

  closeTeacherModal() {
    this.isTeacherModalOpen.set(false);
    this.editingTeacherId.set(null);
  }

  saveTeacher() {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
      return;
    }

    const val = this.teacherForm.value;
    const defaultPhoto = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80';

    if (this.editingTeacherId()) {
      const existingId = this.editingTeacherId()!;
      this.schoolService.updateTeacher({
        id: existingId,
        name: val.name || '',
        title: val.title || '',
        subject: val.subject || '',
        category: val.category || 'PAI & Tahfidz',
        education: val.education || '',
        experienceYears: Number(val.experienceYears) || 0,
        bio: val.bio || '',
        quote: val.quote || '',
        photoUrl: val.photoUrl || defaultPhoto
      });
      this.showToast('Data guru berhasil diperbarui!');
    } else {
      this.schoolService.addTeacher({
        name: val.name || '',
        title: val.title || '',
        subject: val.subject || '',
        category: val.category || 'PAI & Tahfidz',
        education: val.education || '',
        experienceYears: Number(val.experienceYears) || 0,
        bio: val.bio || '',
        quote: val.quote || '',
        photoUrl: val.photoUrl || defaultPhoto
      });
      this.showToast('Guru baru berhasil ditambahkan!');
    }

    this.closeTeacherModal();
  }

  deleteTeacher(teacher: Teacher) {
    if (confirm(`Apakah Anda yakin ingin menghapus data ${teacher.name}?`)) {
      this.schoolService.deleteTeacher(teacher.id);
      this.showToast('Data guru berhasil dihapus.');
    }
  }

  // Program handlers
  openAddProgramModal() {
    this.editingProgramId.set(null);
    this.programForm.reset({
      title: '',
      badge: 'Program Baru',
      description: '',
      highlightsText: 'Fokus materi 1\nFokus materi 2\nPraktik lapangan',
      icon: 'star'
    });
    this.isProgramModalOpen.set(true);
  }

  openEditProgramModal(prog: Program) {
    this.editingProgramId.set(prog.id);
    this.programForm.patchValue({
      title: prog.title,
      badge: prog.badge,
      description: prog.description,
      highlightsText: prog.highlights.join('\n'),
      icon: prog.icon
    });
    this.isProgramModalOpen.set(true);
  }

  closeProgramModal() {
    this.isProgramModalOpen.set(false);
    this.editingProgramId.set(null);
  }

  saveProgram() {
    if (this.programForm.invalid) {
      this.programForm.markAllAsTouched();
      return;
    }

    const val = this.programForm.value;
    const highlights = (val.highlightsText || '')
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (this.editingProgramId()) {
      this.schoolService.updateProgram({
        id: this.editingProgramId()!,
        title: val.title || '',
        badge: val.badge || '',
        description: val.description || '',
        highlights,
        icon: val.icon || 'star'
      });
      this.showToast('Program unggulan berhasil diperbarui!');
    } else {
      this.schoolService.addProgram({
        title: val.title || '',
        badge: val.badge || '',
        description: val.description || '',
        highlights,
        icon: val.icon || 'star'
      });
      this.showToast('Program unggulan baru berhasil ditambahkan!');
    }

    this.closeProgramModal();
  }

  deleteProgram(prog: Program) {
    if (confirm(`Apakah Anda yakin ingin menghapus program "${prog.title}"?`)) {
      this.schoolService.deleteProgram(prog.id);
      this.showToast('Program unggulan berhasil dihapus.');
    }
  }

  // Gallery handlers
  openAddGalleryModal() {
    this.galleryForm.reset({
      title: '',
      category: 'Tahfidz & Ibadah',
      date: 'Oktober 2026',
      description: '',
      imageUrl: '/src/assets/images/activity_tahfidz_quran_1791853846582.jpg'
    });
    this.isGalleryModalOpen.set(true);
  }

  closeGalleryModal() {
    this.isGalleryModalOpen.set(false);
  }

  saveGalleryItem() {
    if (this.galleryForm.invalid) {
      this.galleryForm.markAllAsTouched();
      return;
    }

    const val = this.galleryForm.value;
    this.schoolService.addGalleryItem({
      title: val.title || '',
      category: val.category || 'Tahfidz & Ibadah',
      date: val.date || 'Oktober 2026',
      description: val.description || '',
      imageUrl: val.imageUrl || '/src/assets/images/activity_tahfidz_quran_1791853846582.jpg'
    });

    this.showToast('Foto kegiatan baru berhasil ditambahkan!');
    this.closeGalleryModal();
  }

  deleteGalleryItem(item: GalleryItem) {
    if (confirm(`Hapus foto "${item.title}" dari galeri?`)) {
      this.schoolService.deleteGalleryItem(item.id);
      this.showToast('Foto galeri berhasil dihapus.');
    }
  }

  // Save handler for Tab 1: Beranda (Foto Sekolahan, Profil Singkat & 4 Metrik Data Siswa)
  saveBeranda() {
    if (this.berandaForm.invalid) {
      this.berandaForm.markAllAsTouched();
      this.showToast('⚠️ Mohon lengkapi profil singkat sekolah dan data statistik siswa.');
      return;
    }

    const val = this.berandaForm.value;
    const totalStudents = Number(val.totalStudents) || 486;
    const maleStudents = Number(val.maleStudents) || 254;
    const femaleStudents = Number(val.femaleStudents) || 232;
    const totalRombel = Number(val.totalRombel) || 15;
    const rombelClass7 = Number(val.rombelClass7) || 5;
    const rombelClass8 = Number(val.rombelClass8) || 5;
    const rombelClass9 = Number(val.rombelClass9) || 5;
    const totalTeachers = Number(val.totalTeachers) || 28;
    const certifiedTeachers = Number(val.certifiedTeachers) || 22;
    const totalEducationalStaff = Number(val.totalEducationalStaff) || 10;

    this.schoolService.updateProfile({
      schoolPhotoUrl: val.schoolPhotoUrl || '/images/hero_smp_campus_1791853846114.jpg',
      shortDescription: val.shortDescription || '',
      tagline: val.tagline || '',
      motto: val.motto || '',
      studentStats: {
        totalStudents,
        maleStudents,
        femaleStudents,
        totalRombel,
        rombelClass7,
        rombelClass8,
        rombelClass9,
        totalTeachers,
        certifiedTeachers,
        totalEducationalStaff
      },
      stats: [
        { label: 'Jumlah Siswa', value: `${totalStudents}`, sublabel: `${maleStudents} Putra · ${femaleStudents} Putri` },
        { label: 'Jumlah Rombel', value: `${totalRombel} Rombel`, sublabel: `Kelas VII, VIII, & IX` },
        { label: 'Jumlah Guru', value: `${totalTeachers} Guru`, sublabel: `Tenaga Pendidik Profesional` },
        { label: 'Tenaga Kependidikan', value: `${totalEducationalStaff} Staf`, sublabel: `Tata Usaha & Kependidikan` }
      ]
    });

    this.showToast('✅ Berhasil disimpan! Foto sekolahan, profil singkat & data siswa langsung diperbarui di Beranda web.');
  }

  // Save handler for Tab: Sambutan Kepala Sekolah (Tampil di Menu Profil Sekolah)
  saveSambutan() {
    if (this.sambutanForm.invalid) {
      this.sambutanForm.markAllAsTouched();
      this.showToast('⚠️ Mohon lengkapi seluruh isian sambutan kepala sekolah.');
      return;
    }

    const val = this.sambutanForm.value;
    this.schoolService.updateProfile({
      principalName: val.principalName || '',
      principalTitle: val.principalTitle || '',
      principalPhotoUrl: val.principalPhotoUrl || '',
      principalWelcome: val.principalWelcome || ''
    });

    this.showToast('✅ Berhasil disimpan! Sambutan Kepala Sekolah langsung diperbarui di menu Profil Sekolah.');
  }

  // Save handler for Tab 2: Profile Sekolah & Kontak
  saveProfileSekolah() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.showToast('⚠️ Mohon lengkapi identitas dan informasi kontak sekolah dengan benar.');
      return;
    }

    const val = this.profileForm.value;
    const cleanPhone = (val.whatsappFormatted || '').replace(/[^0-9]/g, '');

    this.schoolService.updateProfile({
      name: val.name || '',
      motto: val.motto || '',
      accreditation: val.accreditation || '',
      npsn: val.npsn || '',
      phone: val.phone || '',
      whatsapp: cleanPhone || this.profile().whatsapp,
      whatsappFormatted: val.whatsappFormatted || '',
      email: val.email || '',
      address: val.address || '',
      operatingHours: val.operatingHours || ''
    });

    this.showToast('✅ Berhasil disimpan! Identitas profile sekolah & kontak langsung diperbarui di web.');
  }

  // Universal handler delegating based on activeTab
  saveProfile() {
    if (this.activeTab() === 'beranda') {
      this.saveBeranda();
    } else if (this.activeTab() === 'sambutan') {
      this.saveSambutan();
    } else {
      this.saveProfileSekolah();
    }
  }

  // Wave status toggle
  toggleWaveStatus(wave: PpdbWave) {
    const nextStatus = wave.status === 'active' ? 'closed' : 'active';
    const nextBadge = nextStatus === 'active' ? 'Pendaftaran Dibuka' : 'Ditutup';
    this.schoolService.updateWave({
      ...wave,
      status: nextStatus,
      badgeText: nextBadge
    });
    this.showToast(`Status ${wave.name} diubah menjadi ${nextBadge}`);
  }

  // Inquiry status update
  updateInquiryStatus(id: string, status: PpdbInquiry['status']) {
    this.schoolService.updateInquiryStatus(id, status);
    this.showToast(`Status calon santri diubah menjadi ${status}`);
  }

  deleteInquiry(inq: PpdbInquiry) {
    if (confirm(`Hapus data pendaftar ${inq.studentName}?`)) {
      this.schoolService.deleteInquiry(inq.id);
      this.showToast('Data pendaftar berhasil dihapus.');
    }
  }

  contactParentViaWhatsApp(phone: string, studentName: string) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const formattedPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
    const msg = encodeURIComponent(`Assalamu'alaikum Warahmatullahi Wabarakatuh Bapak/Ibu wali dari ananda ${studentName}. Kami dari Panitia PPDB SMP Al Muttaqin Kota Madiun bermaksud menindaklanjuti formulir konsultasi pendaftaran.`);
    window.open(`https://wa.me/${formattedPhone}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }

  logout() {
    this.authService.logout();
  }
}
