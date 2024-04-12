import { Component } from '@angular/core';
import { decrement, increment, loadCount } from '../redux/counterActions';
import { Store } from '@ngrx/store';
import { selectCount } from '../redux/counterSelector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  actions: string[] = [];
  counter$ = this.store.select(selectCount);

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  load() {
    this.store.dispatch(loadCount());
  }
}
