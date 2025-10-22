import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './colaboradores.html',
  styleUrl: './colaboradores.scss'
})
export class Colaboradores {
  private router = inject(Router);

  navigateToHome() {
    this.router.navigate(['']).then(() => {
      // Aguarda um pequeno tempo para garantir que o componente foi carregado
      setTimeout(() => {
        const homeSection = document.querySelector('.home-container');
        if (homeSection) {
          homeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    });
  }
}
