import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shoping-basket',
  standalone: true,
  imports: [],
  templateUrl: './shoping-basket.component.html',
  styleUrls: ['./shoping-basket.component.css'],
  providers: [NgbOffcanvas]
})
export class ShopingBasketComponent {
  constructor(private offcanvasService: NgbOffcanvas) {}

  openEnd(content: TemplateRef<any>) {
    const options: NgbOffcanvasOptions = {
      position: 'end',
      panelClass: 'custom-bc',
    };
    this.offcanvasService.open(content, options);
  }
}
