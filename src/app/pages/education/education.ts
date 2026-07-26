import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-education',
  imports: [Header, Footer],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {}
