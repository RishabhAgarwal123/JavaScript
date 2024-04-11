import { Injectable } from '@angular/core';
import { WebRequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  constructor(private webRequestService: WebRequestService) { }

  getUsers() {
    return this.webRequestService.get<Array<Object>>('/id');
  }

  getProducts(id: number) {
    return this.webRequestService.get<Array<Object>>(`products/${id}`);
  }
}
