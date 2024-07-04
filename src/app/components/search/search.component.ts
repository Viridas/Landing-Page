import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, catchError, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, JsonPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  model: any;
	searching = false;
	searchFailed = false;
}
