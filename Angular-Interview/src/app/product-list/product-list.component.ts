import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(private communicationService: CommunicationService, private router: Router) {}
  products: any = [];

  getAllProducts() {
    this.communicationService.getAllProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
  }

  moveToProduct(product: any) {
    this.router.navigate([`/products/${product.id}`])
  }
}
