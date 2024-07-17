import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  offsetY = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    window.requestAnimationFrame(this.parallax.bind(this));
  }

  parallax(): void {
    this.offsetY = window.scrollY * 0.6; // зміна швидкості тут
  }
}
