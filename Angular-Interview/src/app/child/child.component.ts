import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() fromParent!: string;
  @Output() messageEvent = new EventEmitter<string>();
  forViewChild: string = 'I will be used for the view child';
  
  sendMessageToParent() {
    this.messageEvent.emit('I am coming from child and getting used in parent');
  }
}
