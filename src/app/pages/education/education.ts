import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-education',
  imports: [Header, Footer, RevealDirective],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {}
