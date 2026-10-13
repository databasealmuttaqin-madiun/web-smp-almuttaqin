import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { Teacher } from '../../models/school.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-teachers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ScrollRevealDirective],
  templateUrl: './teachers.html'
})
export class Teachers {
  readonly schoolService = inject(SchoolDataService);
  readonly filteredTeachers = this.schoolService.filteredTeachers;
  readonly activeFilter = this.schoolService.activeTeacherFilter;
  readonly searchQuery = this.schoolService.teacherSearchQuery;

  readonly categories = [
    'Semua',
    'PAI & Tahfidz',
    'MIPA',
    'Bahasa',
    'Sosial & Seni',
    'BK & Konseling'
  ];

  readonly selectedTeacher = signal<Teacher | null>(null);

  setCategory(cat: string) {
    this.schoolService.setTeacherFilter(cat);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.schoolService.setTeacherSearch(input.value);
  }

  clearSearch() {
    this.schoolService.setTeacherSearch('');
  }

  openTeacherDetail(teacher: Teacher) {
    this.selectedTeacher.set(teacher);
  }

  closeTeacherDetail() {
    this.selectedTeacher.set(null);
  }
}
