import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './header.html'
})
export class Header {
  readonly schoolService = inject(SchoolDataService);
  readonly authService = inject(AuthService);
  readonly profile = this.schoolService.profile;
  readonly isMobileMenuOpen = this.schoolService.isMobileMenuOpen;

  toggleMenu() {
    this.schoolService.toggleMobileMenu();
  }

  closeMenu() {
    this.schoolService.closeMobileMenu();
  }

  openPpdbWhatsApp() {
    this.schoolService.openWhatsAppConsultation('Informasi PPDB 2026/2027');
  }
}
