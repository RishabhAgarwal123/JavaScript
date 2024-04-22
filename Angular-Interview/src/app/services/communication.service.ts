import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs';
import { WebRequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  mergeMapResult: any;
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

  getMergeDetails() {
    this.webRequestService.get<Object>('users/2')
    .pipe(
      map(data => {
        return data
      }),
      mergeMap(data => this.webRequestService.get<Object>(`products/2]}`))).subscribe(data => {
      this.mergeMapResult = data
    });

    console.log(this.mergeMapResult)
  }
}
