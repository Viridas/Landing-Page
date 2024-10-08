import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = "";
  showElement: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.checkScreenWidth();

    window.addEventListener('resize', this.checkScreenWidth.bind(this));
  }

  checkScreenWidth() {
    this.showElement = window.innerWidth >= 450;
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.email);
      // You can add more logic here to handle the form submission
    }
  }
}
