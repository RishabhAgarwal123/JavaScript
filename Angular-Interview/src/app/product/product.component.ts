import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../services/communication.service';
import { Product }from './models/Product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  constructor(private communicationService: CommunicationService, private route: ActivatedRoute) {}
  product = {} as Product;
  currentDate = new Date();
  dataPromise: any = '';
  productId: number = 0;

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.getProduct(this.productId);
  }
  
  getProduct(id: any) {
    this.communicationService.getProducts(id).subscribe((res: any) => {
      this.product = res;
    })
    this.dataPromise = this.communicationService.getSomeDelay()
  }
}
