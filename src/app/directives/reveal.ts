import {Directive, ElementRef, OnInit, OnDestroy, Renderer2} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})

export class RevealDirective implements OnInit, OnDestroy {

  private observer?: IntersectionObserver;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const el = this.element.nativeElement;
    
    this.renderer.addClass(el, 'reveal');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(el, 'reveal-visible');
          this.observer?.unobserve(el);
        }
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}