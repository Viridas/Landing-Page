import { Component, HostListener } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { ShopingBasketComponent } from './shoping-basket/shoping-basket.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, SearchComponent, AccountComponent, ShopingBasketComponent, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  active = 1;
  windowWidth: number = 1440;

  constructor() {
    this.updateWindowWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateWindowWidth();
  }

  updateWindowWidth() {
    this.windowWidth = window.innerWidth;
  }
}
