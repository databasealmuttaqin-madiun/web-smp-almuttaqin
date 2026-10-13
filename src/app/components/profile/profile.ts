import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ScrollRevealDirective],
  templateUrl: './profile.html'
})
export class Profile {
  readonly schoolService = inject(SchoolDataService);
  readonly profile = this.schoolService.profile;

  readonly vision = 'Terwujudnya Generasi Muslim yang Berakhlakul Karimah, Unggul dalam Prestasi Akademik & Sains, Mandiri, serta Berwawasan Lingkungan Global.';

  readonly missions = [
    'Menanamkan aqidah yang lurus, adab islami, dan kebiasaan ibadah yaumiyah yang istiqomah.',
    'Menyelenggarakan proses pembelajaran berbasis Kurikulum Merdeka yang inovatif, kreatif, dan berorientasi HOTS.',
    'Mengembangkan program bimbingan Tahfidz Al-Qur\'an intensif yang berkualitas dan berkesinambungan.',
    'Membina bakat minat peserta didik dalam bidang sains, teknologi digital, olahraga, dan seni budaya.',
    'Mewujudkan iklim sekolah yang bersih, asri, ramah anak, dan menjunjung tinggi kejujuran.'
  ];

  readonly coreValues = [
    {
      title: 'Akhlakul Karimah',
      desc: 'Adab mendahului ilmu. Menanamkan keteladanan sopan santun, kejujuran, dan penghormatan kepada orang tua serta guru.',
      icon: 'favorite'
    },
    {
      title: 'Kecerdasan Komprehensif',
      desc: 'Mengintegrasikan kecerdasan intelektual (IQ), spiritual (SQ), dan emosional (EQ) dalam setiap kurikulum harian.',
      icon: 'auto_awesome'
    },
    {
      title: 'Kemampuan Abad 21',
      desc: 'Membekali siswa dengan kemampuan berpikir kritis, kolaboratif, melek teknologi informasi, dan komunikasi bilingual.',
      icon: 'insights'
    },
    {
      title: 'Kemandirian & Tanggung Jawab',
      desc: 'Membina kepemimpinan (leadership), ketangguhan diri, serta kepedulian sosial kemasyarakatan.',
      icon: 'psychology'
    }
  ];
}
