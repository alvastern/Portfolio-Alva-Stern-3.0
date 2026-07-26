import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-dizparc',
  imports: [RouterLink, Footer],
  standalone: true,
  templateUrl: './dizparc.html',
  styleUrl: './dizparc.scss',
})
export class Dizparc {}
