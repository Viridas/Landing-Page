import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgbTypeaheadModule, FormsModule, JsonPipe, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';
  model: any;
	searching = false;
	searchFailed = false;

  onInput(): void {
    // Цей метод викликається при кожному введенні тексту
  }

  clearSearch(): void {
    this.searchText = '';
  }
}
