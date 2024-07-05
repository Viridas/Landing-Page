import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-photo.component.html',
  styleUrl: './main-photo.component.css'
})
export class MainPhotoComponent {
  offsetY = 0;

  onScroll(event: Event): void {
    this.offsetY = window.scrollY * 0.9; // зміна швидкості тут
  }
}
