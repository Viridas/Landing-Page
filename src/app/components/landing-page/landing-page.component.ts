import { Component } from '@angular/core';
import { BestSellersComponent } from '../best-sellers/best-sellers.component';
import { NavComponent } from '../nav/nav.component';
import { MainPhotoComponent } from '../main-photo/main-photo.component';
import { CatalogComponent } from '../catalog/catalog.component';
import { InstagramRedirectComponent } from '../instagram-redirect/instagram-redirect.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavComponent, MainPhotoComponent, BestSellersComponent, CatalogComponent, InstagramRedirectComponent
    ,FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
