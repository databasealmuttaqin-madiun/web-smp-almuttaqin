import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Ppdb } from '../../components/ppdb/ppdb';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-ppdb-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatIconModule, Ppdb, ScrollRevealDirective],
  templateUrl: './ppdb-page.html'
})
export class PpdbPage {}
