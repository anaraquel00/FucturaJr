import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Home } from "./home/home";
import { Sobre } from "./sobre/sobre";
import { Projets } from "./projets/projets";
import { Programmers } from "./programmers/programmers";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sobre, Projets, Programmers],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
