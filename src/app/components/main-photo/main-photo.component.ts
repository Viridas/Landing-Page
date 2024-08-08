import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-photo.component.html',
  styleUrls: ['./main-photo.component.css']
})
export class MainPhotoComponent {
  offsetY = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (window.innerWidth >= 1000) {
      window.requestAnimationFrame(this.parallax.bind(this));
    } else {
      this.offsetY = 0; // Скидаємо offset до 0 при маленькому екрані
    }
  }

  parallax(): void {
    this.offsetY = window.scrollY * 0.7; // зміна швидкості тут
  }
}

