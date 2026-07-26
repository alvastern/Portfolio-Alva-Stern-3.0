import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-pizza-basilico',
  imports: [RouterLink, Footer],
  standalone: true,
  templateUrl: './pizza-basilico.html',
  styleUrl: './pizza-basilico.scss',
})
export class PizzaBasilico {}
