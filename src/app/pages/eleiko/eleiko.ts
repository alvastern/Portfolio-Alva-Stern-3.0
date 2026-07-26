import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-eleiko',
  imports: [RouterLink, Footer],
  standalone: true,
  templateUrl: './eleiko.html',
  styleUrl: './eleiko.scss',
})
export class Eleiko {}
