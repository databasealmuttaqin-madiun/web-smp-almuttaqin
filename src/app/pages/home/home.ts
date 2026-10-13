import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { Hero } from '../../components/hero/hero';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, Hero, ScrollRevealDirective],
  templateUrl: './home.html'
})
export class Home {
  readonly schoolService = inject(SchoolDataService);
  readonly profile = this.schoolService.profile;
  readonly programs = this.schoolService.programs;
  readonly teachers = this.schoolService.teachers;
  readonly galleryItems = this.schoolService.galleryItems;
  readonly ppdbWaves = this.schoolService.ppdbWaves;

  openBrochure() {
    this.schoolService.openBrochureModal();
  }

  openWhatsApp() {
    this.schoolService.openWhatsAppConsultation('Pendaftaran PPDB 2026/2027');
  }

  getGradeStats(grade: '7' | '8' | '9') {
    const stats = this.profile().studentStats;
    const r7 = stats?.rombelClass7 ?? 5;
    const r8 = stats?.rombelClass8 ?? 5;
    const r9 = stats?.rombelClass9 ?? 5;
    const totalRombel = (r7 + r8 + r9) || 15;
    const rombelCount = grade === '7' ? r7 : grade === '8' ? r8 : r9;
    const totalStudents = stats?.totalStudents ?? 486;
    const maleTotal = stats?.maleStudents ?? 254;

    const ratio = rombelCount / totalRombel;
    const gradeTotal = Math.round(totalStudents * ratio);
    const gradeMale = Math.round(maleTotal * ratio);
    const gradeFemale = Math.max(0, gradeTotal - gradeMale);

    return {
      rombel: rombelCount,
      male: gradeMale,
      female: gradeFemale,
      total: gradeTotal
    };
  }

  getAverageStudentsPerRombel(): number {
    const stats = this.profile().studentStats;
    const total = stats?.totalStudents ?? 486;
    const rombel = stats?.totalRombel ?? 15;
    return rombel > 0 ? Math.round(total / rombel) : 32;
  }

  getStudentTeacherRatio(): number {
    const stats = this.profile().studentStats;
    const total = stats?.totalStudents ?? 486;
    const teachers = stats?.totalTeachers ?? 28;
    return teachers > 0 ? Math.round(total / teachers) : 17;
  }
}
