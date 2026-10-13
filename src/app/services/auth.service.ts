import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Operator PPDB';
  avatar: string;
  lastLogin: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);

  private readonly STORAGE_KEY = 'smp_almuttaqin_admin_user';

  readonly currentUser = signal<AdminUser | null>(null);
  readonly isAuthenticated = computed(() => this.currentUser() !== null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          this.currentUser.set(JSON.parse(saved));
        } catch {
          localStorage.removeItem(this.STORAGE_KEY);
        }
      }
    }
  }

  login(email: string, password: string): { success: boolean; message: string } {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check credentials: accept default admin email or database email with password
    const validEmails = ['admin@almuttaqin.sch.id', 'databasealmuttaqin@gmail.com', 'admin'];
    const isValidUser = validEmails.includes(cleanEmail);
    const isValidPass = password === 'admin123' || password === 'almuttaqin2026';

    if (isValidUser && isValidPass) {
      const user: AdminUser = {
        id: 'adm-01',
        name: 'Administrator Al-Muttaqin',
        email: cleanEmail.includes('@') ? cleanEmail : 'admin@almuttaqin.sch.id',
        role: 'Super Admin',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        lastLogin: new Date().toLocaleString('id-ID', {
          dateStyle: 'medium',
          timeStyle: 'short'
        })
      };

      this.currentUser.set(user);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
      }
      return { success: true, message: 'Login berhasil! Mengalihkan ke dashboard...' };
    }

    return {
      success: false,
      message: 'Email atau kata sandi tidak valid. Gunakan akun demo yang tersedia.'
    };
  }

  logout() {
    this.currentUser.set(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.STORAGE_KEY);
    }
    this.router.navigate(['/login']);
  }
}
