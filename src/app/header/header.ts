import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  closeMenu() {
    //funçao de fechar o menu
    this.isMenuOpen = false;
  }
  isMenuOpen: any;
toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
}
}



