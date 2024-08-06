import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Seller } from './bset-sellers-model';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css',
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

export class BestSellersComponent {
  items: Seller[] = [
    { image: 'assets/Photos/Carusel/Brilles.png', title: 'Product', price: '25,00₴', id: 0},
    { image: 'assets/Photos/Carusel/Bublik.png', title: 'Product', price: '7,50₴', id: 1},
    { image: 'assets/Photos/Carusel/Butilka.png', title: 'Product', price: '15,00₴', id: 2},
    { image: 'assets/Photos/Carusel/Kamni.png', title: 'Product', price: '85,00₴', id: 3},
    { image: 'assets/Photos/Carusel/Kapli.png', title: 'Product', price: '85,00₴', id: 4},
    { image: 'assets/Photos/Carusel/Kepka.png', title: 'Product', price: '85,00₴', id: 5},
    { image: 'assets/Photos/Carusel/Paket.png', title: 'Product', price: '85,00₴', id: 6},
    { image: 'assets/Photos/Carusel/Sereshky.png', title: 'Product', price: '85,00₴', id: 7},
    { image: 'assets/Photos/Carusel/Stul.png', title: 'Product', price: '85,00₴', id: 8},
    { image: 'assets/Photos/Carusel/Sweter.png', title: 'Product', price: '85,00₴', id: 9},
    { image: 'assets/Photos/Carusel/T-Shirt.png', title: 'Product', price: '85,00₴', id: 10},
    { image: 'assets/Photos/Carusel/Vasa.png', title: 'Product', price: '85,00₴', id: 11},
  ]

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

  trackByFn(index: number, item: Seller): number {
    return item.id;
  }
}
