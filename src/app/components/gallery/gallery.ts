import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SchoolDataService } from '../../services/school-data.service';
import { GalleryItem } from '../../models/school.model';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, ScrollRevealDirective],
  templateUrl: './gallery.html'
})
export class Gallery {
  readonly schoolService = inject(SchoolDataService);
  readonly filteredGallery = this.schoolService.filteredGallery;
  readonly activeFilter = this.schoolService.activeGalleryFilter;
  readonly selectedImage = this.schoolService.selectedGalleryImage;

  readonly categories = [
    'Semua',
    'Tahfidz & Ibadah',
    'Sains & Robotik',
    'Prestasi & Lomba',
    'Akademik'
  ];

  setCategory(cat: string) {
    this.schoolService.setGalleryFilter(cat);
  }

  openLightbox(item: GalleryItem) {
    this.schoolService.openGalleryLightbox(item);
  }

  closeLightbox() {
    this.schoolService.closeGalleryLightbox();
  }
}
