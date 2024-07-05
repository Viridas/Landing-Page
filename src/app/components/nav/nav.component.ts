import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { ShopingBasketComponent } from './shoping-basket/shoping-basket.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, SearchComponent, AccountComponent, ShopingBasketComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  active = 1;
}
