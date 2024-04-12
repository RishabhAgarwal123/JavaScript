import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  parentContent: string = "I am coming from parent and getting used in child";
  recievedMessage: string = '';
  viewChildContent: string = '';
  counter: number = 0;
  arr: Array<number> = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    // setInterval(() => {
      // this.counter = Math.random();
      // this.arr = [Math.random()];
      // this.changeDetectorRef.markForCheck();
    // }, 1000);
  }

  receiveMessageFromChild(message: string) {
    this.recievedMessage = message;
  }

  ngAfterViewInit() {
    console.log(this.childComponent.forViewChild);
  }

  callChildMethod() {
    this.childComponent.triggerFromParentUsingViewChild();
  }

  // parent() {
  //   console.log('Parent');
  //   return 'Parent';
  // }
}
