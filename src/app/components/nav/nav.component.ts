import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgbNavModule, SearchComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  active = 1;
}
