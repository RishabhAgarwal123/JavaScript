import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  parentContent: string = "I am coming from parent and getting used in child";
  recievedMessage: string = '';
  viewChildContent: string = '';

  receiveMessageFromChild(message: string) {
    this.recievedMessage = message;
  }

  ngAfterViewInit() {
    this.viewChildContent = this.childComponent.forViewChild;
  }
}
