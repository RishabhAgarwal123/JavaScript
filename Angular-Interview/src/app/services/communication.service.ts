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

  getAllProducts() {
    return this.webRequestService.get<Array<Object>>('products?limit=5');
  }

  getSomeDelay() {
    return new Promise(resolve => {
      setTimeout(() => resolve('Hello async pipe'), 2000);
    })
  }

  isAuthenticated(name: string) {
    return name === 'Rishabh' ? true: false;
  }
}
