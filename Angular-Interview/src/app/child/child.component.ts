import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class ChildComponent {
  @Input() fromParent!: string;
  @Input() arr!: Array<number>;
  @Output() messageEvent = new EventEmitter<string>();
  forViewChild: string = 'I will be used for the view child';
  
  sendMessageToParent() {
    this.messageEvent.emit('I am coming from child and getting used in parent');
  }

  triggerFromParentUsingViewChild() {
    console.log('I will be triggered from the parent using view child');
  }

  // child() {
  //   console.log('Child');
  //   return 'Child';
  // }
}
