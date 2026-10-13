import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';

@Component({
  selector: 'app-brochure-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule],
  templateUrl: './brochure-modal.html'
})
export class BrochureModal {
  readonly schoolService = inject(SchoolDataService);
  readonly isOpen = this.schoolService.isBrochureModalOpen;
  readonly profile = this.schoolService.profile;
  readonly ppdbWaves = this.schoolService.ppdbWaves;
  readonly programs = this.schoolService.programs;

  readonly activeTab = signal<'overview' | 'fees' | 'requirements'>('overview');

  setTab(tab: 'overview' | 'fees' | 'requirements') {
    this.activeTab.set(tab);
  }

  close() {
    this.schoolService.closeBrochureModal();
  }

  download() {
    this.schoolService.downloadBrochure();
  }

  openWhatsApp() {
    this.close();
    this.schoolService.openWhatsAppConsultation('Pendaftaran PPDB 2026/2027');
  }
}
