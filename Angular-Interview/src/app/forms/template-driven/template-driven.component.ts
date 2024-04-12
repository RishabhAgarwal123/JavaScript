import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  user = {
    name: '',
    email: ''
  };
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.user);
    } else {
      console.error('Form invalid');
    }
  }
}
