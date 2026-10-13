import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { SchoolDataService } from '../../services/school-data.service';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, ReactiveFormsModule, MatIconModule],
  templateUrl: './login.html'
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  readonly schoolService = inject(SchoolDataService);
  readonly profile = this.schoolService.profile;

  readonly showPassword = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);
  readonly isLoading = signal<boolean>(false);

  readonly loginForm = new FormGroup({
    email: new FormControl('admin@almuttaqin.sch.id', [Validators.required]),
    password: new FormControl('admin123', [Validators.required, Validators.minLength(4)]),
    rememberMe: new FormControl(true)
  });

  togglePasswordVisibility() {
    this.showPassword.update((v) => !v);
  }

  fillDemoCredentials() {
    this.loginForm.patchValue({
      email: 'admin@almuttaqin.sch.id',
      password: 'admin123'
    });
    this.errorMessage.set(null);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMessage.set(null);
    this.isLoading.set(true);

    const val = this.loginForm.value;
    const result = this.authService.login(val.email || '', val.password || '');

    setTimeout(() => {
      this.isLoading.set(false);
      if (result.success) {
        this.router.navigate(['/admin']);
      } else {
        this.errorMessage.set(result.message);
      }
    }, 400);
  }
}
