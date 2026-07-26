import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';
import { Education } from './pages/education/education';
import { Dizparc } from './pages/dizparc/dizparc';
import { PizzaBasilico } from './pages/pizza-basilico/pizza-basilico';
import { Eleiko } from './pages/eleiko/eleiko';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'about', component: About },
  { path: 'education', component: Education },
  { path: 'dizparc', component: Dizparc },
  { path: 'pizza-basilico', component: PizzaBasilico },
  { path: 'eleiko', component: Eleiko }

];