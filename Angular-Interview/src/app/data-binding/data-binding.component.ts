import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  title: string = 'String Interpolation';
  pageTitle: string = 'Welcome to My Angular App';
  username: string = 'Rishabh Agarwal';

  handleEventBinding() {
    alert('Event Binding')
  }
}
