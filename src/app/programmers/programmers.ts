import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Colaboradores } from './colaboradores/colaboradores';

@Component({
  selector: 'app-programmers',
  standalone: true,
  imports: [RouterLink, RouterOutlet, Colaboradores],
  templateUrl: './programmers.html',
  styleUrl: './programmers.scss'
})
export class Programmers {
  constructor(private router: Router) {}

  navigateToColaboradores() {
    this.router.navigate(['programmers/colaboradores']).then(() => {
      // Aguarda um pequeno tempo para garantir que o componente foi carregado
      setTimeout(() => {
        const colaboradoresSection = document.getElementById('colaboradores-section');
        if (colaboradoresSection) {
          colaboradoresSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    });
  }
}
