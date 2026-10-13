import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-programs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ScrollRevealDirective],
  templateUrl: './programs.html'
})
export class Programs {
  readonly schoolService = inject(SchoolDataService);
  readonly programs = this.schoolService.programs;

  readonly extracurriculars = [
    { name: 'Pramuka Penggalang', category: 'Kepanduan Wajib', icon: 'explore' },
    { name: 'Pencak Silat Tapak Suci', category: 'Bela Diri & Fisik', icon: 'sports_martial_arts' },
    { name: 'Futsal & Mini Soccer', category: 'Olahraga Prestasi', icon: 'sports_soccer' },
    { name: 'English Speech & Debate', category: 'Bahasa & Public Speaking', icon: 'record_voice_over' },
    { name: 'Koding & Robotika Edukatif', category: 'Sains & Teknologi', icon: 'smart_toy' },
    { name: 'Jurnalistik & Majalah Dinding', category: 'Literasi & Media', icon: 'newspaper' },
    { name: 'PMR & Pertolongan Pertama', category: 'Kemanusiaan', icon: 'medical_services' },
    { name: 'Seni Kaligrafi Islam', category: 'Seni & Budaya', icon: 'brush' }
  ];

  openConsultation(programTitle: string) {
    this.schoolService.openWhatsAppConsultation(`Program ${programTitle}`);
  }
}
