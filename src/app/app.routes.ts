import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Programmers } from './programmers/programmers';
import { Colaboradores } from './programmers/colaboradores/colaboradores';
import { Sobre } from './sobre/sobre';
import { Projets } from './projets/projets';

export const routes: Routes = [
  {


    pathMatch: "full",
    path: '', // Rota para a página inicial,
    component: Home
  },
  { path: 'sobre', component: Sobre },
  { path: 'projetos', component: Projets },
  {
    path: 'programmers',
    component: Programmers,
    children: [
      /* {
        path: '',
        component: Programmers
      }, */
      {
        path: 'colaboradores',
        component: Colaboradores
      }
    ]
  },

];
