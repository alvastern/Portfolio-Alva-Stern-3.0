import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-pizza-basilico',
  imports: [CommonModule, RouterLink, Footer],
  standalone: true,
  templateUrl: './pizza-basilico.html',
  styleUrl: './pizza-basilico.scss',
})

export class PizzaBasilico {
  selectedImage: string | null = null;

  openImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
    document.body.style.overflow = 'hidden';
  }

  closeImage(): void {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
