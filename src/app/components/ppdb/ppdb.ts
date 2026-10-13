import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-ppdb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './ppdb.html'
})
export class Ppdb {
  readonly schoolService = inject(SchoolDataService);
  readonly profile = this.schoolService.profile;
  readonly ppdbWaves = this.schoolService.ppdbWaves;
  readonly ppdbSteps = this.schoolService.ppdbSteps;
  readonly ppdbRequirements = this.schoolService.ppdbRequirements;
  readonly faqItems = this.schoolService.faqItems;

  readonly activeFaqId = signal<string | null>('faq-1');
  readonly isSubmitted = signal<boolean>(false);

  readonly inquiryForm = new FormGroup({
    studentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    parentName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9+ -]{9,16}$/)]),
    schoolOrigin: new FormControl('', [Validators.required]),
    programInterest: new FormControl('Reguler Terpadu', [Validators.required]),
    notes: new FormControl('')
  });

  toggleFaq(id: string) {
    if (this.activeFaqId() === id) {
      this.activeFaqId.set(null);
    } else {
      this.activeFaqId.set(id);
    }
  }

  openBrochure() {
    this.schoolService.openBrochureModal();
  }

  downloadBrochure() {
    this.schoolService.downloadBrochure();
  }

  openWhatsAppPanitia() {
    this.schoolService.openWhatsAppConsultation();
  }

  submitInquiry() {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    const val = this.inquiryForm.value;
    const message = `Halo Panitia PPDB SMP Al Muttaqin, saya orang tua dari calon santri ${val.studentName} (asal sekolah ${val.schoolOrigin}). Tertarik program ${val.programInterest}. Catatan: ${val.notes || '-'}`;
    
    // Save to schoolService CMS store
    this.schoolService.addInquiry({
      studentName: val.studentName || '',
      parentName: val.parentName || '',
      phone: val.phone || '',
      schoolOrigin: val.schoolOrigin || '',
      programInterest: val.programInterest || 'Reguler Terpadu',
      notes: val.notes || ''
    });

    this.isSubmitted.set(true);

    setTimeout(() => {
      this.schoolService.openWhatsAppConsultation(message);
    }, 1200);
  }

  resetForm() {
    this.inquiryForm.reset({
      programInterest: 'Reguler Terpadu'
    });
    this.isSubmitted.set(false);
  }
}
