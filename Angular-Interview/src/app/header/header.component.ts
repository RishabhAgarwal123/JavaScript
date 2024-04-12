import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  actions: string[] = [];
  counter: number = 0;

  increment() {
    this.counter++;
    this.actions.push('INCREMENT')
  }

  decrement() {
    this.counter--;
    this.actions.push('DECREMENT')
  }
}
