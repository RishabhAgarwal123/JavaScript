import { Component, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal<number>(0);

  increment() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((oldValue) => oldValue + 1);
    // this.actions.mutate((oldActions: any) => oldActions.push('INCREMENT'));
    this.actions.update((old) => [...old, 'INCREMENT']);
  }

  decrement() {
    // this.counter.set(this.counter() - 1);
    this.counter.update((oldValue) => oldValue - 1);
    // this.actions.push('DECREMENT')
    this.actions.update((old) => [...old, 'DECREMENT']);
  }
}
