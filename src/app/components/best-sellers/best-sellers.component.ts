import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent {

  constructor(config: NgbCarouselConfig) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = false;
	}
  
  @ViewChild(NgbCarousel) carousel!: NgbCarousel;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }
}
