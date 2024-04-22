import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunicationService } from '../services/communication.service';

import { DataBindingComponent } from './data-binding.component';

class MockCommunicationService extends CommunicationService {
  override isAuthenticated(name: string) {
    return name === 'Rishabh' ? true: false;
  }
}

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataBindingComponent],
      providers: [MockCommunicationService]
    })
    .compileComponents();

    await TestBed.overrideComponent(
      DataBindingComponent,
      {set: { providers: [{ provide: CommunicationService, useClass: MockCommunicationService}]}}
    )
    
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
