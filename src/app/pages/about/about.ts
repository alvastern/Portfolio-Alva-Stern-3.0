import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-about',
  imports: [Header, Footer, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
