import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [Header, Footer, RouterLink],
  standalone: true,
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {}
