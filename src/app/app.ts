import { Component, inject, signal } from '@angular/core';
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";
import { Projets } from "./projets/projets";
import { Programmers } from "./programmers/programmers";

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, Projets, Programmers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FucturaJr');
  constructor() {

  }
}
