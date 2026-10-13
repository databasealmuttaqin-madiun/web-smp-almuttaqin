import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
              // Once revealed, unobserve to keep it visible
              this.observer?.unobserve(entry.target);
            }
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      this.observer.observe(this.el.nativeElement);
    } else {
      // Fallback if browser doesn't support IntersectionObserver
      this.el.nativeElement.classList.add('aos-animate');
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
