import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';
import { Education } from './pages/education/education';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'about', component: About },
  { path: 'education', component: Education }
];