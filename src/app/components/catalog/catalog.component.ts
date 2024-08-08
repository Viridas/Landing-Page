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
  showElement: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkScreenWidth();

    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    this.showElement = window.innerWidth >= 1000;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (window.innerWidth >= 1000) {
      window.requestAnimationFrame(this.parallax.bind(this));
    } else {
      this.offsetY = 0; // Скидаємо offset до 0 при маленькому екрані
    }
  }

  parallax(): void {
    this.offsetY = window.scrollY * 0.6; // зміна швидкості тут
  }
}
