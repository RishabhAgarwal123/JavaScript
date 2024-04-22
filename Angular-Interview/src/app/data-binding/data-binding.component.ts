import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  constructor(private communicationService: CommunicationService) {}
  title: string = 'String Interpolation';
  pageTitle: string = 'Welcome to My Angular App';
  username: string = 'Rishabh Agarwal';

  ngOnInit() {
    this.communicationService.getMergeDetails()
  }

  handleEventBinding() {
    alert('Event Binding')
  }
}
