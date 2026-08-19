import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-homepage',
  imports: [Header, Footer, RouterLink, RevealDirective],
  standalone: true,
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})

export class Homepage {
  
}