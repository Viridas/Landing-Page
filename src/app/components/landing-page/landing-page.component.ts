import { Component, NgZone } from '@angular/core';
import { BestSellersComponent } from '../best-sellers/best-sellers.component';
import { NavComponent } from '../nav/nav.component';
import { MainPhotoComponent } from '../main-photo/main-photo.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { InstagramRedirectComponent } from '../instagram-redirect/instagram-redirect.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavComponent, MainPhotoComponent, BestSellersComponent, CatalogComponent, InstagramRedirectComponent
    , FooterComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateY(0)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class LandingPageComponent {
  currentSlideIndex: number = 0;
  previousSlideIndex: number = 0;
  isNavbarHidden = false;
  lastScrollTop = 0;
  lastScrollOperation = 0;


  constructor(private ngZone: NgZone) { }

  showNextSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex + 1;
  }

  showPrevSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex - 1;
  }

  onScroll(event: Event): void {
    const lastScrollTop = window.scrollY - this.lastScrollOperation;

    if (this.isNavbarHidden == false && lastScrollTop > 200) {
      this.showPrevSlide();
      setTimeout(() => {
        this.isNavbarHidden = true;
        this.previousSlideIndex = this.previousSlideIndex - 1;
      }, 500);
      this.lastScrollOperation = window.scrollY;
    } else if (this.isNavbarHidden == true && lastScrollTop < -200) {
      this.isNavbarHidden = false;
      this.showNextSlide();
      this.previousSlideIndex = this.previousSlideIndex + 1;
      this.lastScrollOperation = window.scrollY;
    }else if (window.scrollY < 300) {
    this.isNavbarHidden = false;
  }
    else if (lastScrollTop > 200) {
      this.lastScrollOperation = window.scrollY;
    }
    else if (lastScrollTop < -200) {
      this.lastScrollOperation = window.scrollY;
    }
  }
}
