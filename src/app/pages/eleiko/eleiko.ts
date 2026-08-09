import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { RevealDirective } from '../../directives/reveal';

@Component({
  selector: 'app-eleiko',
  imports: [CommonModule, RouterLink, Footer, RevealDirective],
  standalone: true,
  templateUrl: './eleiko.html',
  styleUrl: './eleiko.scss',
})

export class Eleiko {
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