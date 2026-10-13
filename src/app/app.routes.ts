import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProfilePage } from './pages/profile-page/profile-page';
import { ProgramsPage } from './pages/programs-page/programs-page';
import { TeachersPage } from './pages/teachers-page/teachers-page';
import { GalleryPage } from './pages/gallery-page/gallery-page';
import { PpdbPage } from './pages/ppdb-page/ppdb-page';
import { Login } from './pages/login/login';
import { Admin } from './pages/admin/admin';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'beranda',
    pathMatch: 'full'
  },
  {
    path: 'beranda',
    component: Home,
    title: 'SMP Al Muttaqin Kota Madiun | Beranda'
  },
  {
    path: 'profil-sekolah',
    component: ProfilePage,
    title: 'Profile Sekolah & Visi Misi | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'profile-sekolah',
    redirectTo: 'profil-sekolah',
    pathMatch: 'full'
  },
  {
    path: 'galeri',
    component: GalleryPage,
    title: 'Galeri Kegiatan | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'galeri-kegiatan',
    redirectTo: 'galeri',
    pathMatch: 'full'
  },
  {
    path: 'program-unggulan',
    component: ProgramsPage,
    title: 'Program Unggulan | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'tenaga-pendidik',
    component: TeachersPage,
    title: 'Tenaga Pendidik | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'ppdb',
    component: PpdbPage,
    title: 'Info PPDB | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'login',
    component: Login,
    title: 'Login Admin | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'admin',
    component: Admin,
    canActivate: [authGuard],
    title: 'Panel Admin | SMP Al Muttaqin Kota Madiun'
  },
  {
    path: 'home',
    redirectTo: 'beranda',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'beranda'
  }
];
