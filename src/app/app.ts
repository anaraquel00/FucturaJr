import { Component, inject, signal } from '@angular/core';
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";
import { Projets } from "./projets/projets";

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer, Projets],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('FucturaJr');
  constructor() {

  }
}
