import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';

import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, ScrollRevealDirective],
  templateUrl: './hero.html'
})
export class Hero {
  readonly schoolService = inject(SchoolDataService);
  readonly profile = this.schoolService.profile;
  readonly heroImagePath = this.schoolService.heroImagePath;

  openBrochure() {
    this.schoolService.openBrochureModal();
  }

  openWhatsApp() {
    this.schoolService.openWhatsAppConsultation('Konsultasi Pendaftaran Calon Siswa Baru');
  }
}
