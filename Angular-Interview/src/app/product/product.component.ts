import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { Product }from './models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private communicationService: CommunicationService) {}
  product = {} as Product;
  currentDate = new Date();

  getProducts() {
    this.communicationService.getProducts(2).subscribe((res: any) => {
      this.product = res;
      console.log(this.product)
    })
  }
}
