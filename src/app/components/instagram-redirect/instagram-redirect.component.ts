import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Seller } from '../best-sellers/bset-sellers-model';

@Component({
  selector: 'app-instagram-redirect',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './instagram-redirect.component.html',
  styleUrl: './instagram-redirect.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(0)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(0)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class InstagramRedirectComponent {
  items = [
    { image: 'assets/Photos/Instagram-redirect/01.jpg'},
    { image: 'assets/Photos/Instagram-redirect/02.jpg'},
    { image: 'assets/Photos/Instagram-redirect/03.jpg'},
    { image: 'assets/Photos/Instagram-redirect/04.jpg'},
    { image: 'assets/Photos/Instagram-redirect/05.jpg'},
    { image: 'assets/Photos/Instagram-redirect/06.jpg'},
    { image: 'assets/Photos/Instagram-redirect/07.jpg'},
    { image: 'assets/Photos/Instagram-redirect/08.jpg'},
    { image: 'assets/Photos/Instagram-redirect/09.jpg'},
    { image: 'assets/Photos/Instagram-redirect/10.jpg'},
    { image: 'assets/Photos/Instagram-redirect/11.jpg'},
    { image: 'assets/Photos/Instagram-redirect/12.jpg'},
  ];

  currentSlideIndex: number = 0;
  previousSlideIndex: number = 0;

  constructor() {}

  onAnimationEnd(event: AnimationEvent) {
    if(this.currentSlideIndex > this.previousSlideIndex){
      this.items.push(this.items.shift()!);
      this.previousSlideIndex = this.previousSlideIndex + 1;
    }
    else if(this.currentSlideIndex < this.previousSlideIndex){
      this.items.unshift(this.items.pop()!);
      this.previousSlideIndex = this.previousSlideIndex - 1;
    }
  }

  showNextSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex + 1;
  }

  showPrevSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex - 1;
  }

  trackByFn(index: number): number {
    return index;
  }
}
