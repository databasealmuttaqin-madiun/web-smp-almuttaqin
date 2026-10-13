import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule],
  templateUrl: './footer.html'
})
export class Footer {
  readonly schoolService = inject(SchoolDataService);
  readonly profile = this.schoolService.profile;
  readonly currentYear = new Date().getFullYear();

  openWhatsApp() {
    this.schoolService.openWhatsAppConsultation();
  }
}
